import { Router } from 'express';
import { UserService } from '../services/userService';
import { UserController } from '../controllers/userController';
import { IUserService } from '../interfaces/IUser';

const userRouter = Router();

const userService: IUserService = new UserService;
const userController = new UserController(userService);

userRouter.route('/')
    .get(userController.getAllUsers)
    .post(userController.InsertUser)

userRouter.route('/:id')
    .get(userController.getUserById)
    .get(userController.updateUserById)
    .get(userController.deleteUserById)


export default userRouter;