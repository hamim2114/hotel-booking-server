import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
app.use(cors())
dotenv.config();
mongoose.set('strictQuery', false);

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on('disconnected', ()=>{
    console.log('mongoDB disconnected!')
})
mongoose.connection.on('connected', ()=>{
    console.log('mongoDB connected!')
})

app.get('/', (req, res) =>{
    res.send('hellow')
})

//middlewares
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)

app.listen(5000, ()=> {
    connect()
    console.log('server running..')
})