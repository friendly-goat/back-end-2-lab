const express = require('express')
const cors = require('cors')
const {
    getHouses,
    deleteHouse,
    createHouse,
    updateHouse
} = require('./controller')
const app = express()
app.use(express.json())
app.use(cors())

//endpoints
// const getAllHouses = () => axios.get(baseURL).then(housesCallback).catch(errCallback
app.get('/api/houses',getHouses)
// const deleteHouse = id => axios.delete(`${baseURL}/${id}`).then(housesCallback).catch(errCallback)
app.delete('/api/houses/:id',deleteHouse)
// const createHouse = body => axios.post(baseURL, body).then(housesCallback).catch(errCallback)
app.post('/api/houses',createHouse)
// const updateHouse = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(housesCallback).catch(errCallback)
app.put('/api/houses/:id',updateHouse)

app.listen(4004, () => console.log('Server listening on 4004'))