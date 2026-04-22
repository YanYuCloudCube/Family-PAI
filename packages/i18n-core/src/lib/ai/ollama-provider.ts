/**
 * @file ai/ollama-provider.ts
 * @description Ollama local LLM provider for zero-cost translation
 * @author YYC³ Team <team@yyc3.dev>
 * @version 2.1.0
 *
 * Design inspired by FAmily π³ OllamaProvider.
 * Zero dependencies - uses native fetch API.
 * Data privacy: all translation stays on local machine.
 */

import { logger } from "../infra/logger.js";
import type {
  AIProvider,
  AIProviderConfig,
  AIProviderInfo,
  TranslationRequest,
  TranslationResponse,
} from "./provider.js";

export class OllamaProvider implements AIProvider {
  readonly type = "ollama" as const;
  private baseUrl: string;
  private defaultModel: string;
  private _isReady = false;

  constructor(config?: AIProviderConfig) {
    this.baseUrl = config?.baseUrl ?? "http://localhost:11434";
    this.defaultModel = config?.defaultModel ?? "qwen2.5:3b";
  }

  get isReady(): boolean {
    return this._isReady;
  }

  async initialize(): Promise<void> {
    const available = await this.validate();
    if (!available) {
      throw new Error(`Ollama not available at ${this.baseUrl}. Start with: ollama serve`);
    }
    this._isReady = true;
    logger.info(`Ollama provider initialized (model: ${this.defaultModel})`);
  }

  async validate(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/api/tags`, {
        method: "GET",
        signal: AbortSignal.timeout(5000),
      });
      return response.ok;
    } catch {
      return false;
    }
  }

  async translate(request: TranslationRequest): Promise<TranslationResponse> {
    if (!this.isReady) await this.initialize();

    const systemPrompt = `You are a professional translator. Translate from ${request.sourceLocale} to ${request.targetLocale}. Output ONLY the translated text.`;
    let userPrompt = `Translate: ${request.sourceText}`;
    if (request.context) userPrompt += `\nContext: ${request.context}`;

    const response = await fetch(`${this.baseUrl}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: this.defaultModel,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        stream: false,
        options: { temperature: 0.3 },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Ollama API error (${response.status}): ${errorText}`);
    }

    const data = (await response.json()) as {
      message: { content: string };
      model: string;
    };

    const translatedText = (data.message?.content ?? "").trim();

    return {
      translatedText,
      qualityScore: 75,
      provider: "ollama",
      model: data.model ?? this.defaultModel,
      cached: false,
    };
  }

  async batchTranslate(requests: TranslationRequest[]): Promise<TranslationResponse[]> {
    const results: TranslationResponse[] = [];
    for (const req of requests) {
      results.push(await this.translate(req));
    }
    return results;
  }

  getInfo(): AIProviderInfo {
    return {
      type: "ollama",
      displayName: "Ollama (Local)",
      isAvailable: this.isReady,
      isLocal: true,
      models: [this.defaultModel],
      defaultModel: this.defaultModel,
    };
  }

  async dispose(): Promise<void> {
    this._isReady = false;
  }
}
