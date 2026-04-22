/**
 * @file translate.ts
 * @description Legacy i18n module - DEPRECATED, use engine.ts instead
 * @author YYC³ Team <team@yyc3.dev>
 * @version 2.0.1
 * @deprecated All exports are re-exported from engine.ts for backward compatibility.
 *             This module will be removed in v3.0.0.
 */

export { i18n, t, SUPPORTED_LOCALES, isSupportedLocale } from "./engine.js";
