//Biblioteca
const request = require('supertest');
const {expect}=require('chai');


//Testes

describe('Transfer', () => {
    describe('POST / transfer', () => {
        it ('Quando informo remetente e destinatário inexistente recebo 400', async () => {
            const resposta = await request('http://localhost:3000')
                .post('/transfer')
                .send({
                    from:"Andreia",
                    to:"Arthur",
                    amount:100
                });

            expect(resposta.status).to.equal(400);
            console.log(resposta.body);
            expect(resposta.body).to.have.property('error','Usuário não encontrado.')
        });
    });
});


//Realizar transferências
describe('Transfer Controller', () => {
    describe('POST / transfer', () => {
        it ('Quando informo remetente e destinatário inexistente recebo 400', async () => {
            const resposta = await request('http://localhost:3000')
                .post('/transfer')
                .send({
                    from:"Andreia",
                    to:"Arthur",
                    amount:100
                });

            expect(resposta.status).to.equal(400);
            console.log(resposta.body);
            expect(resposta.body).to.have.property('error','Usuário não encontrado.')
        });
    });
});