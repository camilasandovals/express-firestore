import express from 'express'
import cors from 'cors'


const PORT = 3000

const app = express()
app.use(cors())
app.use(express.json()) // this tells express that our posts will be json


app.get('/animals', getAllAnimals)
app.post('/animals', addNewAnimal)


app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})