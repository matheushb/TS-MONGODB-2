import { IUserService, User, updateUserDTO } from "../interfaces/IUser";
import users from "../models/User"

export class UserService implements IUserService {

    getAllUsers(): Promise<User[]> 
    {
        try{
            const user = users.find()
            if(!user){
                throw new Error('Error um getting users!')
            }else{
                return user
            }
        }catch(err: any){
            return err.message;
           }
    }

    insertUser(body: User): Promise<User>
    {
        try{
            return users.create(body) //atribuir isso a um objeto, junto c um status e retorna-lo, caso esteja errado, retornar ex: status 404 e msg de erro
        }catch(err: any){
            return err.message
        }
    }

    async getUserById(id: string): Promise<User> 
    {
        try{
            const user = await users.findById({id})
            console.log(user)
            if(!user){
                throw new Error('No user found in DB!')
            }else{
                return user;
            }
        }catch(err: any){
            return err.message
        }
    }

    updateUserById(id: string, body: updateUserDTO): Promise<void>
    {
        
    }

    deleteUserById(id:string): Promise<void>
    {

    }
}
