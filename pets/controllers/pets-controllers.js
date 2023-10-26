import { listItems } from '../models/pets-models.js'

export const listPets = (req, res) => {
    try {
        const response = listItems()
        res.status(200).json(response)
    } catch(err) {
        res.status(500).send(err)
    }
}