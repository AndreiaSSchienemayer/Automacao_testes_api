//Biblioteca
const request = require('supertest');
const sinon = require('sinon');
const {expect}=require('chai');

//Aplicação
const app = require('../../app');

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
    });



    describe('POST / transfer', () => {
        it ('Usando Mocks: Quando informo valores válidos eu tenho sucesso com 201 Created', async () => {
            // Mock do service
            const transferService = require('../../service/transferService');
            const transferServiceMock = sinon.stub(transferService, 'transferValue');
            transferServiceMock.returns({
                transfer: {
                    from: "Andreia",
                    to: "Arthur",
                    amount: 100,
                    date: new Date()
                }
            });

            const resposta = await request(app)
                .post('/transfer')
                .send({
                    from: "Andreia",
                    to: "Arthur",
                    amount: 100
                });

            expect(resposta.status).to.equal(201);

            // Validação com Fixture
            const respostaEsperada = require('../fixture/respostas/quandoInformoValoresValidosEuTenhoSucesso201Created.json');
            delete resposta.body.date;
            delete respostaEsperada.date;
            expect(resposta.body).to.deep.equal(respostaEsperada);

            transferServiceMock.restore();
        });
    });
    
    describe('GET / transfer', () => {
        //Its ficam aqui

    });
    
});
