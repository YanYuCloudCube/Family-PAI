import { describe, it, expect } from 'vitest';
import { YYC3AIHub } from '../../src/hub.js';
import {
  FAMILY_PERSONAS,
  getPersona,
  getAllPersonas,
  getPersonaByHour,
  getNextDutyMember,
} from '../../src/family-compass/index.js';

describe('YYC3AIHub', () => {
  it('should instantiate without error', () => {
    const hub = new YYC3AIHub();
    expect(hub).toBeDefined();
  });
});

describe('Family Compass - Personas', () => {
  it('FAMILY_PERSONAS should have 8 members', () => {
    const personas = FAMILY_PERSONAS;
    expect(Object.keys(personas)).toHaveLength(8);
  });

  it('getPersona should return a valid persona', () => {
    const qianxing = getPersona('qianxing');
    expect(qianxing).toBeDefined();
    expect(qianxing?.name).toBe('言启·千行');
  });

  it('getAllPersonas should return all 8 members', () => {
    const all = getAllPersonas();
    expect(all).toHaveLength(8);
  });

  it('getPersonaByHour should return a member for any hour (0-23)', () => {
    for (let h = 0; h < 24; h++) {
      const member = getPersonaByHour(h);
      expect(member).toBeDefined();
      expect(member?.id).toBeTruthy();
    }
  });

  it('getNextDutyMember should rotate through members', () => {
    const next1 = getNextDutyMember(6);
    const next2 = getNextDutyMember(7.5);
    expect(next1).toBeDefined();
    expect(next2).toBeDefined();
    if (next1 && next2) {
      expect(next1.id).not.toBe(next2.id);
    }
  });
});
