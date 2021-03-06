 const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o app
const app = express();

//iniciando o db
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
requireDir('./src/models');

const Product = mongoose.model('Product');

//primeira rota
app.get('/', (req, res) => {
    Product.create({
        title: 'Projeto de Banco de Dados',
        description: 'Aplicação DevOps',
        url: 'http://github.com/'
    })

    return res.send('Hello Fatec');
});

app.listen(27107);