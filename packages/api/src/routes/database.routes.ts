import express from 'express';
import { DatabaseController } from '../controllers/database.controller';

const router = express.Router();

router.get('/', DatabaseController.getAllDatabases);
router.get('/:id', DatabaseController.getDatabaseById);
router.post('/', DatabaseController.createDatabase);

export default router;