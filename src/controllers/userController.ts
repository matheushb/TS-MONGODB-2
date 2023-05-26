import { Request, Response } from "express";
import { IUserService } from "../interfaces/IUser";

export class UserController {
    constructor(
        private readonly userService: IUserService
    ) {}

     getAllUsers = async (req: Request, res: Response) => {
         res.status(200).json(await this.userService.getAllUsers())
    }

    InsertUser = async(req: Request, res: Response) => {
        res.status(201).json(await this.userService.insertUser(req.body))
    }

    getUserById = async(req: Request, res: Response) => {
        const { id } = req.params
        res.status(200).json(await this.userService.getUserById(id))
    }

    updateUserById = async(req: Request, res: Response) => {
        const { id } = req.params;
        res.status(201).json(await this.userService.updateUserById(id, req.body ))
    }

    deleteUserById = async(req: Request, res: Response) => {
        const { id } = req.params
        res.status(200).json(await this.userService.deleteUserById(id))
    }


}
