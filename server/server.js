const express = require('express');
const bodyParser = require('body-parser');
const { OAuth2Client } = require('google-auth-library');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const clientId = "690018789854-ikfstfb61b3oke5pp8lnm34bl3lk8899.apps.googleusercontent.com";
const app = express();
const port = 8000;

// Configuração do cliente OAuth2
const client = new OAuth2Client(clientId);

// Caminho para o arquivo JSON de usuários
const usersFilePath = 'users.json';

// Middleware para analisar o corpo da requisição
app.use(bodyParser.json());

// Middleware do CORS
app.use(cors());

// Função para carregar os dados do arquivo JSON
function loadUserData() {
    try {
        const data = fs.readFileSync(usersFilePath);
        return JSON.parse(data);
    } catch (error) {
        console.error('Erro ao carregar os dados do arquivo JSON:', error);
        return [];
    }
}

// Função para salvar os dados no arquivo JSON
function saveUserData(data) {
    try {
        fs.writeFileSync(usersFilePath, JSON.stringify(data));
    } catch (error) {
        console.error('Erro ao salvar os dados no arquivo JSON:', error);
    }
}

// Rota para autenticação com o Google
app.post('/login', async (req, res) => {
    const { token } = req.body;
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: clientId,
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];

        // Verifica se o usuário já está cadastrado
        let users = loadUserData();
        let user = users.find((u) => u.email === payload.email);

        if (!user) {
            user = { id: userid, name: payload.name, email: payload.email };
            users.push(user);
            saveUserData(users);
        }

        res.status(200).json({ success: true, user });
    } catch (error) {
        res.status(401).json({ success: false, message: 'Falha na autenticação' });
    }
});

// Rota para listar todos os usuários cadastrados
app.get('/users', (req, res) => {
    const users = loadUserData();
    res.json(users);
});


app.listen(port, () => {
    console.log(`Servidor Express em execução na porta ${port}`);
});