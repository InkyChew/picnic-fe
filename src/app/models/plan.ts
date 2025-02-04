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
    userId: number;
    name: string = '';
    note: string = '';
    prepared: boolean = false;
    price: number = 0;
    createdAt?: string;
    updatedAt?: string;

    constructor(pId: number, uId: number) {
        this.planId = pId;
        this.userId = uId;
    }
}

export class PlanFood extends PlanItem {

}

export class PlanTool extends PlanItem {

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