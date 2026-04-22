/**
 * @file local-storage.ts
 * @description Safe localStorage access utility handling private browsing and SSR scenarios
 * @author YYC³ Team <team@yyc3.dev>
 * @version 2.0.1
 */

export function getSafeLocalStorage(): Storage | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const testKey = '__yyc3_test__';
    window.localStorage.setItem(testKey, 'test');
    window.localStorage.removeItem(testKey);
    return window.localStorage;
  } catch (e) {
    return null;
  }
}
