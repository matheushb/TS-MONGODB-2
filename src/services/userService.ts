import users from "../models/User"
export class UserService {

     getAllUsers() {
        try{
            return users.find()
        }catch(err: any){
            return err.message;
        }
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
