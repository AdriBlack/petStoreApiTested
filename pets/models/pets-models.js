import db from '../../db/db.js'

export const listItems = () => {
    try {
        return db?.pets
    } catch(err) {
        console.log('Error', err)
    }
}