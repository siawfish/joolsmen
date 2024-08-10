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