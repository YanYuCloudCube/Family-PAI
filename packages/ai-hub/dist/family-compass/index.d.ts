import { a as CompassState, F as FamilyMemberId, P as PhoneCallSession, C as CallMessage, M as MemoryEntry, b as FamilyPersona } from '../types-C_cQ_nrJ.js';
export { D as DutyRosterEntry, G as GrowthMilestone } from '../types-C_cQ_nrJ.js';

declare class FamilyCompass {
    private personas;
    private callSessions;
    private memories;
    private startTime;
    constructor();
    getCompassState(): CompassState;
    private buildDutyRoster;
    private getDutyType;
    getOnlineMembers(): FamilyMemberId[];
    private generateCenterMessage;
    private calculateDayProgress;
    private calculateConnectionQuality;
    private formatUptime;
    initiateCall(memberId: FamilyMemberId): PhoneCallSession;
    answerCall(sessionId: string): boolean;
    sendCallMessage(sessionId: string, content: string): CallMessage | null;
    endCall(sessionId: string): PhoneCallSession | null;
    private generateGreeting;
    private generateResponse;
    recordMemory(memberId: FamilyMemberId, memory: Omit<MemoryEntry, 'id' | 'memberId' | 'timestamp'>): MemoryEntry;
    getMemories(memberId: FamilyMemberId, limit?: number): MemoryEntry[];
    getAllMemories(limit?: number): MemoryEntry[];
    private calculateImportance;
    getMemberPosition(memberId: FamilyMemberId): {
        x: number;
        y: number;
        angle: number;
    };
    getActiveMemberForTime(date: Date): FamilyPersona;
}
declare function createFamilyCompass(): FamilyCompass;

declare const FAMILY_PERSONAS: Record<FamilyMemberId, FamilyPersona>;
declare function getPersona(id: FamilyMemberId): FamilyPersona | undefined;
declare function getAllPersonas(): FamilyPersona[];
declare function getPersonaByHour(hour: number): FamilyPersona;
declare function getNextDutyMember(currentHour?: number): FamilyPersona;

export { CallMessage, CompassState, FAMILY_PERSONAS, FamilyCompass, FamilyMemberId, FamilyPersona, MemoryEntry, PhoneCallSession, createFamilyCompass, getAllPersonas, getNextDutyMember, getPersona, getPersonaByHour };
