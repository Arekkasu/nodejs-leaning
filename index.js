#!/usr/bin/env node
const express = require('express');
const app = express();
const path = require('path');


//app.use(express.urlencoded({ extended: false }));

//app.use(require('./src/routes/index'));

app.use(express.static(path.join(__dirname, 'src/public')));


console.log(__dirname, 'src/public/formulario_test.html')
app.get('/formulario_test', (req, res) => {

    res.sendFile(path.join(__dirname, '/src/public/index.html'));

});


app.listen(7000, () => console.log('Servidor corriendo en el puerto 7000'));
