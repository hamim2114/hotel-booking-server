import mongoose from 'mongoose';
import UserSchema from '../models/UserSchema.js';

const UserModel =  mongoose.model('User', UserSchema)

export const updateUser = async (req, res, next) => {
    try {
        const updateUser = await UserModel.findByIdAndUpdate(
            req.params.id, { $set: req.body}, {new: true});
        res.status(200).json(updateUser)
    } catch (error) {
        next(error)
    }
};

export const deleteUser = async (req, res, next) => {
    try {
        await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).json('user deleted!')
    } catch (error) {
        next(error)
    }
};

export const getUser = async (req, res, next) => {
    try {
        const user = await UserModel.findById(req.params.id);
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
};

export const getAllUser = async (req, res, next) => {
    try {
        const user = await UserModel.find();
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
};
