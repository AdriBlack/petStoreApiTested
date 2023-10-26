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