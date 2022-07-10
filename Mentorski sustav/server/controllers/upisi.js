import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';
import postPredmet from '../models/postPredmet.js';
import UserModal from "../models/user.js";
import Upisi from '../models/upisi.js';



const router = express.Router();


export const createUpis = async (req, res) => {
    const { id_u, id_p } = req.params;

    Upisi.findOne({ _id: id_u }, function (err, count) {
        if (count) {
            //document exists 
            Upisi.find({ "_id": id_u, "predmet_id": id_p }, async (err, predmet) => {
                // user is a single document which may be null for no results
                if (predmet.length == 0) {
                    const updatedUpis = await Upisi.findByIdAndUpdate(id_u, { $addToSet: { predmet_id: id_p } }, { new: true });
                    console.log("ADD")
                    res.status(200).json(updatedUpis);

                }
                else {
                    const updatedUpis = await Upisi.findByIdAndUpdate(id_u, { $pull: { predmet_id: id_p } }, { new: true });
                    console.log("DELETE")
                    res.status(200).json(updatedUpis);

                }
            });
        }
        else {
            const newUpis = new Upisi({ _id: id_u, predmet_id: [id_p] })
            try {
                newUpis.save();
                res.status(200).json(newUpis);
            } catch (error) {
                res.status(404).json({ message: error.message });
            }

        }


    });




}



export const getUpisi = async (req, res) => {

    const { id } = req.params;

    try {
        const postMessages = await Upisi.findById(id);


        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getAllUpisi = async (req, res) => { 
    try {
        const postMessages = await Upisi.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

