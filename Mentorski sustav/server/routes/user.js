import express from "express";
const router = express.Router();

import { signin, signup } from "../controllers/user.js";
import { createUpis,getAllUpisi,getUpisi} from "../controllers/upisi.js";

router.post("/signin", signin);
router.post("/signup", signup);


router.post("/predmet/:id_p/:id_u",createUpis);

router.get('/predmet/Upisi/:id', getUpisi);
router.get('/predmet/Upisi', getAllUpisi);


export default router;