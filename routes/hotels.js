import express from 'express'
import{
    creatHotel,
    updateHotels,
    deleteHotels,
    getHotel,
    getAllHotels,
    countByCity,
    countByType
} from '../controllers/hotelController.js'
import { verifyAdmin } from '../utilities/verifyToken.js';


const hotelRouter = express.Router();

//CREAT
hotelRouter.post('/', verifyAdmin, creatHotel);

//UPDATE
hotelRouter.put('/:id', verifyAdmin, updateHotels);

//DELETE
hotelRouter.delete('/:id', verifyAdmin, deleteHotels);

//GET
hotelRouter.get('/find/:id', getHotel);

//GET ALL
hotelRouter.get('/', getAllHotels);

hotelRouter.get('/countByCity', countByCity);
hotelRouter.get('/countByType', countByType);

export default hotelRouter;