import { IUser } from './userInterface';

export interface IResponse {
    info: object;
    results: IUser[];
}
