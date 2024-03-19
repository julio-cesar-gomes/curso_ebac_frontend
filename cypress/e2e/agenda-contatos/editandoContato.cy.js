/// <reference types="cypress" />

describe('Editando um contato', ()=>{
    beforeEach(()=>{
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Testando a edicao de um contato', ()=>{
        cy.get('.edit').first().click()
        cy.get('input[placeholder=Nome]').clear()
        cy.get('input[placeholder=Nome]').type('Professor Gian Souza')
        cy.get('.alterar').click()
    })
})