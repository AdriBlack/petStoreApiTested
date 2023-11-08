import express from 'express';

import { listPets, getPet, addPet, editPet } from '../controllers/pets-controllers.js'

const router = express.Router();

router.get('/', listPets)

router.get('/:id', getPet)

router.post('/', addPet)

router.put('/:id', editPet)

export default router