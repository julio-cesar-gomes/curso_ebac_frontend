/// <reference types="cypress" />

describe('Editando um contato', ()=>{
    beforeEach(()=>{
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Testando a edicao de um contato', ()=>{
        cy.get('.delete').first().click()
    })
})