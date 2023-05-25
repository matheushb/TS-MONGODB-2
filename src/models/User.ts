import { Schema, model } from 'mongoose';
import { User } from '../interfaces/IUser';

const userSchema = new Schema<User>
(
    {
        id: String,
        name: {
            type: String,
            require: true,
            trim: true
        },
        email: {
            type: String,
            require: true,
            lowercase: true,
            trim: true,
        },
        age: {
            type: Number,
            require: true
        },
        password: {
            type: String,
            require: true,

        }
    },
    {
        versionKey: false
    }
)

const users = model<User>('Users', userSchema)

export default users