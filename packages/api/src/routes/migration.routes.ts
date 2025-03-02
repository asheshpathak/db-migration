import express from 'express';
import { MigrationController } from '../controllers/migration.controller';

const router = express.Router();

router.get('/database/:databaseId', MigrationController.getMigrationsByDatabaseId);
router.post('/', MigrationController.createMigration);
router.post('/:id/execute', MigrationController.executeMigration);

export default router;