import * as dotenv from 'dotenv'; 
import express from "express";
import userRouter from './routers/userRouter';
import db from './database/DBConnect';

dotenv.config()
const app = express();

db.on('error',err => {console.log('error', err)})
db.once('open',() => {console.log('MongoDB running')})

app.use(express.json())
app.use('/users', userRouter)

const port = process.env.PORT || 8080
app.listen(port, () => {console.log(`server running on http://localhost:${port}/users`)})