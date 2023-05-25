import { User } from "../interfaces/IUser";

export interface IUserService {
    getAllUsers(): Promise<User[]>
}