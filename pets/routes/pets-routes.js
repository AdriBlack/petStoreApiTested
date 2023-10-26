import express from 'express';

import { listPets, getPet } from '../controllers/pets-controllers.js'

const router = express.Router();

router.get('/', listPets)

router.get('/:id', getPet)

export default router