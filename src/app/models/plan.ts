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

export class PlanItem {
    id: number = 0;
    planId: number;
    name: string = '';
    note: string = '';
    prepared: boolean = false;
    price: number = 0;
    count: number = 1;
    createdAt?: string;
    updatedAt?: string;

    constructor(pId: number) {
        this.planId = pId;
    }
}

export class PlanFood extends PlanItem {
    foodPreparers: PreparerFood[] = [];
}
export class PlanTool extends PlanItem {
    toolPreparers: PreparerTool[] = [];
}
export interface PreparerFood {
    userId: number;
    user: User | null;
    planFoodId: number;
    planFood: PlanFood | null;
}

export interface PreparerTool {
    userId: number;
    user: User | null;
    planToolId: number;
    planTool: PlanTool | null;
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