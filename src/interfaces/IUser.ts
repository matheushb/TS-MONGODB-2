export interface User {
    name: string 
    email: string
    password: string
    age: number
    id?: string
}

export interface updateUserDTO {
    name?: string 
    password?: string
    age?: number
}

export interface IUserService {
    getAllUsers(): Promise<User[]>
    getUserById(id: string): Promise<User>
    insertUser(body: User): Promise<User>
    deleteUserById(id: string): Promise<void>
    updateUserById(id:string, body: updateUserDTO): Promise<void>
}
