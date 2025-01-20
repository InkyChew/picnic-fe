import { User } from "./user";

export class Plan {
    id: number = 0;
    name: string = '';
    description: string = '';
    placeId: number = 0;
    startTime: string = '';
    endTime: string = '';
    createdAt: string = '';
    updatedAt: string = '';
    foods: PlanFood[] | null = null;
    tools: PlanTool[] | null = null;
    users: PlanUser[] | null = null;
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
    planId: number;
    userId: number;
    status: InvitationStatus = InvitationStatus.Pending;
    createdAt: string = '';
    updatedAt: string = '';
    plan: Plan | null = null;
    user: User | null = null;

    constructor(pId: number, uId: number) {
        this.planId = pId;
        this.userId = uId;
    }
}

export enum InvitationStatus {
    Reject,
    Pending,
    Accept
}