import { User } from "../interfaces/IUser";

export interface IUserService {
    getAllUsers(): Promise<User[]>
    InsertUser(): void
    getUserById(): Promise<User>
    updateUserById(): void
    deleteUserById(): void
}