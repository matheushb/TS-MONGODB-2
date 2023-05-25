import { Router } from 'express';
import { UserService } from '../services/userService';
import { UserController } from '../controllers/userController';

const userRouter = Router();

const userService = new UserService;
const userController = new UserController(userService);


userRouter.route('/users')
    .get(userController.getAllUsers)
    .post(userController.InsertUser)

userRouter.route('/users/:id')
    .get(userController.getUserById)
    .get(userController.updateUserById)
    .get(userController.deleteUserById)


export default userRouter;