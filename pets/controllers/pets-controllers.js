import { listItems, getItem, addItem, editItem } from '../models/pets-models.js'

export const listPets = (req, res) => {
    try {
        const response = listItems()
        res.status(200).json(response)
    } catch(err) {
        console.log('listPet controller error', err)
        res.status(500).send(err)
    }
}

export const getPet = (req, res) => {
    try {
        const response = getItem(parseInt(req.params.id))
        res.status(200).json(response)
    } catch (err) {
        console.log('getPet controller error', err)
        res.status(500).send(err)
    }
}

export const addPet = (req, res) => {
    console.log('request body', req.body)
    try {
        const response = addItem(req.body)
        res.status(200).json(response)
    }catch (err) {
        console.log('addPet controller error', err)
        res.status(500).send(err)
    }

}

export const editPet = ( req, res) => {
    console.log('request body', req.body)
    console.log('request body ID', parseInt(req.params.id))
    try {
        const response = editItem(parseInt(req.params.id), req.body)
        res.status(200).json(response)

    } catch(err) {
        console.log('editPet controller error', err)
        res.status(500).send(err)
    }
}