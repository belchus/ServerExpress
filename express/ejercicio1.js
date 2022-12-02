
const express = require ('express')
const app = express()
const Contenedor = require('../desafio/app')

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`servidor http escuchando en puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Error en servidor, ${error}`))

const productos = new Contenedor('productos.txt')

app.get('/productos', async (req, res) => {
    const productsList = await productos.getAll()
    res.send(productsList)
})

app.get('/productosRandom', async (req, res) => {
    const productsList = await productos.getAll()
    const randomProduct = Math.floor(Math.random() * productsList.length)
    res.send(productsList[randomProduct])
})
