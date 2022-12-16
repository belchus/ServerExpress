
const express = require ('express')
const {response}= require('express')
const app = express()
const Contenedor = require('../desafio/app')

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`servidor http escuchando en puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Error:${error}`))
//Codigo que funciona y muestra los productos
const productos = new Contenedor('productos.txt')



//Codigo para mostrar el error de productoRandom (linea 40)
/*
const productos = new Contenedor('productossss.txt')
*/

app.get('/productos', async (req, res) => {
    const productsList = await productos.getAll()
    res.send(productsList)
})

//Codigo Anterior

/*app.get('/productoRandom', async (req, res) => {
    const productsList = await productos.getAll()
    const randomProduct = Math.floor(Math.random() * productsList.length)  
    res.send(productsList[randomProduct])
    
})
*/


//Codigo arreglado
app.get('/productoRandom', async (req, res) => {
    try {
     const productsList = await productos.getAll()
     const randomProduct = Math.floor(Math.random() * productsList.length)
     res.send(productsList[randomProduct])
    }catch(error) {
     res.send("Producto no disponible")
    }
  })