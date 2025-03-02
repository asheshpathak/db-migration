import express from 'express';
import { SchemaController } from '../controllers/schema.controller';

const router = express.Router();

router.get('/database/:databaseId', SchemaController.getSchemaByDatabaseId);

export default router;