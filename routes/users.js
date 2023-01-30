import express from 'express';
import {updateUser,deleteUser, getUser, getAllUser} from '../controllers/userController.js'
import { verifyAdmin, verifyToken, verifyUser } from '../utilities/verifyToken.js';

const userRouter = express.Router()

// userRouter.get('/chekauth', verifyToken, (req, res, next) => {
//     res.send('user logged in')
// })

//UPDATE
userRouter.put('/:id', verifyUser, updateUser);

//DELETE
userRouter.delete('/:id', verifyUser, deleteUser);

//GET
userRouter.get('/:id', verifyUser, getUser);

//GET ALL
userRouter.get('/', verifyAdmin, getAllUser);

export default userRouter;