import { Request, Response } from "express";
import { UserService } from "../services/userService";

export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

     getAllUsers = async(req: Request, res: Response) => {
         res.json(await this.userService.getAllUsers())
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
