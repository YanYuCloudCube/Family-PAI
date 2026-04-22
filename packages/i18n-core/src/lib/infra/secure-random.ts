/**
 * @file infra/secure-random.ts
 * @description Cryptographically secure random generation utilities using Node.js crypto
 * @author YYC³ Team <team@yyc3.dev>
 * @version 2.0.1
 */

import { randomBytes, randomInt, randomUUID } from "node:crypto";

export function generateSecureUuid(): string {
  return randomUUID();
}

export function generateSecureToken(bytes = 16): string {
  return randomBytes(bytes).toString("base64url");
}

export function generateSecureHex(bytes = 16): string {
  return randomBytes(bytes).toString("hex");
}

export function generateSecureFraction(): number {
  return randomBytes(4).readUInt32BE(0) / 0x1_0000_0000;
}

export function generateSecureInt(maxExclusive: number): number;
export function generateSecureInt(minInclusive: number, maxExclusive: number): number;
export function generateSecureInt(a: number, b?: number): number {
  return typeof b === "number" ? randomInt(a, b) : randomInt(a);
}
