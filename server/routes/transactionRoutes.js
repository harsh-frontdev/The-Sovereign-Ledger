import express from 'express';

const router = express.Router();
import { addTransaction, getTransaction } from '../controllers/transactionController.js';

router.post('/', addTransaction);
router.get('/', getTransaction);

router.route("/")
    .post(addTransaction)
    .get((req, res) => res.send("GET request received! Route is working."));

export default router;