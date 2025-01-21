import { User } from "./user";

export class Plan {
    id: number = 0;
    name: string = '';
    description: string = '';
    placeId: number = 0;
    startTime: string = '';
    endTime: string = '';
    createdAt?: string;
    updatedAt?: string;
    foods?: PlanFood[];
    tools?: PlanTool[];
    users?: PlanUser[];
}

export interface PlanItem {
    id: number;
    planId: number;
    userId: number;
    name: string;
    note: string;
    prepared: boolean;
    createdAt: string;
    updatedAt: string;
    plan: Plan | null;
}

export interface PlanFood extends PlanItem {

}

export interface PlanTool extends PlanItem {

}

export class PlanUser {
    planId: number = 0;
    userId: number;
    isHost: boolean = false;
    status: InvitationStatus = InvitationStatus.Pending;
    createdAt: string = '';
    updatedAt: string = '';
    plan: Plan | null = null;
    user: User | null = null;

    constructor(uId: number) {
        this.userId = uId;
    }
}

export enum InvitationStatus {
    Reject,
    Pending,
    Accept
}