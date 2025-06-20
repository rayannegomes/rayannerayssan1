
const express = require('express');
const router = express.Router();
const Atendimento = require('../models/Atendimento');

// --- Rotas de Atendimentos ---

router.get('/', async (req, res) => {
    try {
        const atendimentos = await Atendimento.findAll();
        res.render('dados', { title: 'Atendimentos Cadastrados', atendimentos: atendimentos });
    } catch (error) {
        console.error('Erro ao buscar atendimentos:', error);
        res.render('dados', { title: 'Atendimentos Cadastrados', atendimentos: [], error: 'Erro ao carregar dados.' });
    }
});

router.get('/cadastro', (req, res) => {
    res.render('form', { title: 'Novo Atendimento', atendimento: null });
});

router.get('/editar/:id', async (req, res) => {
    const atendimentoId = req.params.id;
    try {
        const atendimento = await Atendimento.findByPk(atendimentoId);
        if (!atendimento) {
            return res.redirect('/atendimentos?error=Atendimento não encontrado.');
        }
        res.render('form', { title: 'Editar Atendimento', atendimento: atendimento });
    } catch (error) {
        console.error('Erro ao buscar atendimento para edição:', error);
        res.redirect('/atendimentos?error=Erro ao carregar atendimento para edição.');
    }
});

router.post('/salvar', async (req, res) => {
    const { id, nome, email, telefone, dataAtendimento, horaAtendimento, descricao } = req.body;

    try {
        if (id) {
            const atendimento = await Atendimento.findByPk(id);
            if (atendimento) {
                atendimento.nome = nome;
                atendimento.email = email;
                atendimento.telefone = telefone;
                atendimento.dataAtendimento = dataAtendimento;
                atendimento.horaAtendimento = horaAtendimento;
                atendimento.descricao = descricao;
                await atendimento.save();
            }
        } else {
            await Atendimento.create({ nome, email, telefone, dataAtendimento, horaAtendimento, descricao });
        }
        res.redirect('/atendimentos');
    } catch (error) {
        console.error('Erro ao salvar atendimento:', error);
        res.redirect('/atendimentos?error=Erro ao salvar o atendimento.');
    }
});

router.post('/excluir/:id', async (req, res) => {
    const atendimentoId = req.params.id;
    try {
        await Atendimento.destroy({ where: { id: atendimentoId } });
        res.redirect('/atendimentos');
    } catch (error) {
        console.error('Erro ao excluir atendimento:', error);
        res.redirect('/atendimentos?error=Erro ao excluir o atendimento.');
    }
});

module.exports = router;