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
}

export interface IPlan {
    id: number;
    name: string;
    description: string;
    placeId: number;
    startTime: string;
    endTime: string;
    createdAt: string;
    updatedAt: string;
    foods: PlanFood[] | null;
    tools: PlanTool[] | null;
    users: PlanUser[] | null;
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

export interface PlanUser {
    planId: number;
    userId: number;
    status: InvitationStatus;
    createdAt: string;
    updatedAt: string;
    plan: Plan | null;
    user: User | null;
}

export enum InvitationStatus {
    Reject,
    Pending,
    Accept
}