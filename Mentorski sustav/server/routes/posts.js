import express from 'express';

import { getPosts, getUser, createPost, updatePost, likePost, deletePost, getPredmeti, createPredmet, updatePredmet, deletePredmet, likePredmet } from '../controllers/posts.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/', getPosts);
router.post('/',auth,  createPost);
router.get('/user', getUser);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);
router.get('/predmet', getPredmeti);
router.post('/predmet',auth,  createPredmet);
router.patch('/predmet/:id', updatePredmet);
router.delete('/predmet/:id', auth, deletePredmet);
router.patch('/predmet:id/likePost', auth, likePredmet);

export default router;