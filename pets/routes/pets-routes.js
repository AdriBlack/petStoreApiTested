import express from 'express';

import { listPets } from '../controllers/pets-controllers.js'

const router = express.Router();

router.get('/', listPets)

export default router