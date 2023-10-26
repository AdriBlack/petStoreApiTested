import express from 'express'

import petRoutes from './pets/routes/pets-routes.js'

const app = express()
const port = 3000

// Global Middleware
//parse incoming JSON data from HTTP requests
app.use(express.json())

app.use('/pets', petRoutes)

//Server Set up

if(process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`⚡️[server]: Server is running at https://localhost:${port}`))
}

export default app