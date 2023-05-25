import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

const dbConnect = <string>process.env.DBCONNECT

mongoose.connect(dbConnect)
    .catch(err => {console.log(err.message)})

const db = mongoose.connection

export default db