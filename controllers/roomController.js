import RoomSchema from "../models/RoomSchema.js";
import Hotel from "../models/HotelSchema.js";
import mongoose from "mongoose";

const Room = mongoose.model('Room', RoomSchema);

export const creatRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);
    try {
        const savedRoom = await newRoom.save();
        //save room id in hotel model
        try {
            await Hotel.findByIdAndUpdate(hotelId, {$push: { rooms: savedRoom._id} });
        } catch (error) {
            next(error)
        }
        res.status(200).json(savedRoom);
    } catch (error) {
        next(error);
    }
};

export const updateRoom = async (req, res, next) => {
    try {
        const updateRoom = await Room.findByIdAndUpdate(
            req.params.id, { $set: req.body}, {new: true});
        res.status(200).json(updateRoom)
    } catch (error) {
        next(error)
    }
};

export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    try {
        await Room.findByIdAndDelete(req.params.id);
        //delete room id in hotel model
        try {
            await Hotel.findByIdAndUpdate(hotelId, {$pull: {rooms: req.params.id} });
        } catch (error) {
            next(error)
        }
        res.status(200).json('Room deleted!')
    } catch (error) {
        next(error)
    }
};

export const getRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room)
    } catch (error) {
        next(error)
    }
};

export const getAllRoom = async (req, res, next) => {
    try {
        const room = await Room.find();
        res.status(200).json(room)
    } catch (error) {
        next(error)
    }
};