#!/usr/bin/env node
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'src/public/')));

//app.get('/', (req, res) => {

//    res.sendFile(path.join(__dirname, 'src/public/index.html'));

//});


app.listen(7000, () => console.log('Servidor corriendo en el puerto 7000'));
