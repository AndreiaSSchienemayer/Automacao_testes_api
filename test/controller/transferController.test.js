//Biblioteca
const request = require('supertest');
const sinon = require('sinon');
const {expect}=require('chai');

//Aplicação
const app = require('../../app');

//Mock
const transferService=require('../../service/transferService');

//Testes
describe('Transfer Controller', () => {
    describe('POST / transfer', () => {
        it ('Quando informo remetente e destinatário inexistente recebo 400', async () => {
            const resposta = await request(app)
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

         it ('Usando Mocks: Quando informo remetente e destinatário inexistente recebo 400', async () => {
            // Mocando a função transferValue do Service
            const transferServiceMock = sinon.stub(transferService, 'transferValue');
            transferServiceMock.returns({ error: 'Usuário não encontrado.' });

        const resposta = await request(app)
            .post('/transfer')
            .send({
            from:"Andreia",
                to:"Arthur",
                amount:100
            });

        expect(resposta.status).to.equal(400);
        expect(resposta.body).to.have.property('error', 'Usuário não encontrado.');

    // Reseta o Mock para não impactar outros testes
    sinon.restore();
    });
    });
    
    describe('GET / transfer', () => {
        //Its ficam aqui

    });
    
});
