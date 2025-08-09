const request = require('supertest');
const { expect } = require('chai');
const app = require('../../app');

describe('User Controller', () => {
    describe('POST /users/register', () => {
        it('Deve registrar um novo usuário com sucesso', async () => {
            const resposta = await request(app)
                .post('/users/register')
                .send({
                    username: "NovoUsuario",
                    password: "senha123",
                    favored: true
                });

            expect(resposta.status).to.equal(201);
            expect(resposta.body).to.have.property('message', 'Usuário registrado com sucesso.');
        });

        it('Não deve permitir registro de usuário duplicado', async () => {
            await request(app)
                .post('/users/register')
                .send({
                    username: "Duplicado",
                    password: "senha123",
                    favored: false
                });

            const resposta = await request(app)
                .post('/users/register')
                .send({
                    username: "Duplicado",
                    password: "senha123",
                    favored: false
                });

            expect(resposta.status).to.equal(409);
            expect(resposta.body).to.have.property('error', 'Usuário já existe.');
        });
    });
});
