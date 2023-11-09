import supertest from "supertest";
import server from '../../app';
import app from "../../app";

const requestWithSupertest = supertest(server)

describe('GET /', () => {
    test('GET / returns all pets', async () => {
        const res = await requestWithSupertest.get('/pets')
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual([
            {
                id: 1,
                name: 'Rex',
                type: 'dog',
                age: 3,
                breed: 'labrador',
            },
            {
                id: 2,
                name: 'Fido',
                type: 'dog',
                age: 1,
                breed: 'poodle',
            },
            {
                id: 3,
                name: 'Mittens',
                type: 'cat',
                age: 2,
                breed: 'tabby',
            },
        ])
    })
})

describe('GET /:id', () => {
    test('GET /:id returns object with id', async () => {
        const response = await requestWithSupertest.get('/pets/1')
        expect(response.status).toEqual(200)
        expect(response.type).toEqual(expect.stringContaining('json'))
        expect(response.body).toEqual([{
            id: 1,
            name: 'Rex',
            type: 'dog',
            age: 3,
            breed: 'labrador',
        }])
    })
})

describe('PUT /:id', () => {
    test('PUT /:id updates pet', async() => {
        const response = await requestWithSupertest.put('/pets/3').send({
            id: 3,
            name: 'Mittens Flopsy',
            type: 'cat',
            age: 2,
            breed: 'tabby',
        })
        expect(response.status).toEqual(200)
        expect(response.type).toEqual(expect.stringContaining('json'))
        expect(response.body).toEqual({
            id: 3,
            name: 'Mittens Flopsy',
            type: 'cat',
            age: 2,
            breed: 'tabby',
        })

    })
})

describe('DELETE /:id', () => {
    test('DELETE /:id removes the item with ID in param', async () => {
        const response =  await requestWithSupertest.delete('/pets/3')

        expect(response.status).toEqual(200)
        expect(response.type).toEqual(expect.stringContaining('json'))
        expect(response.body).toEqual([
            {
                id: 1,
                name: 'Rex',
                type: 'dog',
                age: 3,
                breed: 'labrador',
            },
            {
                id: 2,
                name: 'Fido',
                type: 'dog',
                age: 1,
                breed: 'poodle',
            }
        ])
    })
})