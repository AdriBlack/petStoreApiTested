import db from '../../db/db.js'

export const listItems = () => {
    try {
        return db?.pets
    } catch(err) {
        console.log('ModelError: listItems', err)
    }
}

export const getItem = (id) => {
    try {
        const pet = db?.pets?.filter(pet => pet?.id === id)
        return pet
    } catch (err) {
        console.log('ModelError: getItem', err)
    }
}

export const addItem = (item) => {
    try {
        const newPet = {id: db?.pets.length + 1, ...item}
       db?.pets.push(newPet)
        return newPet
    } catch(err) {
        console.log(' ModelError: addItem ', err)
    }
}

export const editItem = (id, item) => {

    try {
        const indexOfUpdatedPet = db?.pets.findIndex(pet => pet.id === id)
        if (indexOfUpdatedPet === -1) {
            throw new Error ('Pet not found')
        } else {
            db.pets[indexOfUpdatedPet] = item
        }
    } catch (err) {
        console.log(' ModelError: editItem ', err)
    }
}