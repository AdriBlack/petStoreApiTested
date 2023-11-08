import express from 'express';

import { listPets, getPet, addPet, editPet, deletePet } from '../controllers/pets-controllers.js'

const router = express.Router();

router.get('/', listPets)

router.get('/:id', getPet)

router.post('/', addPet)

router.put('/:id', editPet)

router.delete('/:id', deletePet)

export default router