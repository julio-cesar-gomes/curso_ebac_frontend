/// <reference types="cypress" />

describe("Incluir contato novo na agenda", ()=>{
    beforeEach(()=>{
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it("Adicionando contato", ()=>{
        cy.get('input[placeholder=Nome]').type('Julio Gomes')
        cy.get('input[placeholder=E-mail]').type('julio.gomes@test.com')
        cy.get('input[placeholder=Telefone]').type('11983144887')
        cy.get('.adicionar').click()
    })
})