const DEBUG = typeof process !== 'undefined' && process.env?.['YYC3_DEBUG'] === 'true';

export const logger = {
  info: (...args: unknown[]) => { if (DEBUG) console.info('[YYC3]', ...args); },
  warn: (...args: unknown[]) => { if (DEBUG) console.warn('[YYC3]', ...args); },
  error: (...args: unknown[]) => console.error('[YYC3]', ...args),
  init: (msg: string) => { if (DEBUG) console.log(`🚀 ${msg}`); },
  step: (num: number, msg: string) => { if (DEBUG) console.log(`${num}️⃣ ${msg}`); },
  done: (msg: string) => { if (DEBUG) console.log(`✅ ${msg}`); },
  stat: (key: string, val: string) => { if (DEBUG) console.log(`   - ${key}: ${val}`); },
};
