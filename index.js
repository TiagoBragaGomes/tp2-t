const databaseConnect = require("./models/databaseConnect");
const {router, app} = require("./routes/router");
const cors = require('cors')
const express = require('express')

databaseConnect('mongodb://localhost:27017/banco')
 .then(()=>{
    console.log('banco conectado');
    app.use(express.json())
    app.use(cors())


    app.use(router)
    app.listen(3000, ()=>{
       console.log(`servidor rodando na porta ${3000}`);
    }) 
 })