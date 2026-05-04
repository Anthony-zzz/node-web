
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para ler dados do formulário
app.use(express.urlencoded({ extended: true }));

// Simulando banco de dados
const storedUsers = [];

// Rota inicial (opcional)
app.get('/', (req, res) => {
    res.render('index');
});

// Rota para exibir formulário
app.get('/formulario', (req, res) => {
    res.render('form');
});

// Rota POST (recebe dados do formulário)
app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    console.log(username, password);

    // Salvando no "banco"
    storedUsers.push({ username, password });

    // Redirecionamento
    res.redirect('/usuarios');
});

// Rota para listar usuários
app.get('/usuarios', (req, res) => {
    res.render('users', { users: storedUsers });
});

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});