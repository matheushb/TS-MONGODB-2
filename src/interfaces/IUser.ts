export interface User {
    name: string 
    email: string
    password: string
    age: number
    id?: string
}

//dto para esconder a senha, ou campos que nao quero retornar