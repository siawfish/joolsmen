export enum UserTypes {
    INDIVIDUAL = 'INDIVIDUAL',
    BUSINESS = 'BUSINESS',
}

export enum MediaType {
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
}

export interface Media {
    id?: string;
    uri: string;
    width?: number;
    height?: number;
    type?: MediaType;
}

export enum BookingStatuses {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    DECLINED = "DECLINED",
    ONGOING = "ONGOING",
    CANCELLED = "CANCELLED",
    COMPLETED = "COMPLETED",
    PAUSED = "PAUSED",
}
export interface StatusColors {
    color: string;
    backgroundColor: string;
}

