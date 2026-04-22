/**
 * @file lit-controller.ts
 * @description Lit reactive controller for automatic i18n locale change updates
 * @author YYC³ Team <team@yyc3.dev>
 * @version 2.0.1
 */

import type { ReactiveController, ReactiveControllerHost } from "lit";
import { i18n } from "./engine.js";

export class I18nController implements ReactiveController {
  private host: ReactiveControllerHost;
  private unsubscribe?: () => void;

  constructor(host: ReactiveControllerHost) {
    this.host = host;
    this.host.addController(this);
  }

  hostConnected() {
    this.unsubscribe = i18n.subscribe(() => {
      this.host.requestUpdate();
    });
  }

  hostDisconnected() {
    this.unsubscribe?.();
  }
}
