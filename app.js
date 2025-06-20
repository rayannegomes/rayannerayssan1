
const express = require('express');
const app = express();
const path = require('path');
const sequelize = require('./config/database');
const Atendimento = require('./models/Atendimento');
require('dotenv').config();
const atendimentoRoutes = require('./routes/atendimentoRoutes');

sequelize.sync({ force: false })
    .then(() => {
        console.log('Banco de dados sincronizado!');
    })
    .catch(err => {
        console.error('Erro ao sincronizar o banco de dados:', err);
    });

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
    res.render('index', { title: 'Bem-vindo ao Sistema de Atendimento' });
});

app.use('/atendimentos', atendimentoRoutes);

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});