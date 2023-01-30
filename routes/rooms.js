import express from 'express';
import { creatRoom, deleteRoom, getAllRoom, getRoom, updateRoom } from '../controllers/roomController.js';
import { verifyAdmin } from '../utilities/verifyToken.js';


const roomRouter = express.Router();

//CREAT
roomRouter.post('/:hotelid', verifyAdmin, creatRoom);

//UPDATE
roomRouter.put('/:id', verifyAdmin, updateRoom);

//DELETE
roomRouter.delete('/:id/:hotelid', verifyAdmin, deleteRoom);

//GET
roomRouter.get('/:id', getRoom);

//GET ALL
roomRouter.get('/', getAllRoom);

export default roomRouter;