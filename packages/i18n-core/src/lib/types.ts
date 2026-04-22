/**
 * @file types.ts
 * @description Core type definitions for the i18n framework
 * @author YYC³ Team <team@yyc3.dev>
 * @version 2.0.1
 */

export type TranslationMap = { [key: string]: string | TranslationMap };

export type Locale =
  | "en"
  | "zh-CN"
  | "zh-TW"
  | "ja"
  | "ko"
  | "fr"
  | "de"
  | "es"
  | "pt-BR"
  | "ar";

export type RTLLocale = Extract<Locale, "ar">;

export type TextDirection = "ltr" | "rtl" | "auto";

export type HorizontalAlignment = "left" | "right";

export type SpacingProperty = "marginLeft" | "marginRight" | "paddingLeft" | "paddingRight";

export interface I18nConfig {
  locale: Locale;
  fallbackLocale: Locale;
  translations: Partial<Record<Locale, TranslationMap>>;
  rtlSupport?: boolean;
}
