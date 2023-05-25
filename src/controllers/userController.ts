import { UserService } from "../services/userService";

export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    getAllUsers = () => {
        return this.userService.getAllUsers()   
    }

    InsertUser = () => {

    }

    getUserById = () => {

    }

    updateUserById = () => {

    }

    deleteUserById = () => {

    }


}
