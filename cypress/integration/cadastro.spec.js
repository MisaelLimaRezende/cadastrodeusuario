/// <reference types="cypress" />

// Mocha test Runner
// Describe, context, it
var Chance = require('chance')
var chance = new Chance()


describe('Cadastro', () => {
    it('Quando informar os dados email validos então o email sera cadastro com sucesso', () => {
        cy.visit("http://automationpractice.com")

        cy.get('a[title="Log in to your customer account"]').click()
        cy.get('input[id="email_create"]').type(chance.email())
        cy.get('button[id="SubmitCreate"]').click()
       
        cy.get('#id_gender1').type('Mrs')
        cy.wait(6000)
        
        cy.get('input[name="customer_firstname"]').type(chance.first())
        cy.get('input[name="customer_lastname"]').type(chance.last())
        
        cy.get('input[id="passwd"]').type('duda@126')

        cy.get('select#days').select('18', {force: true})
        cy.get('select#months').select('April', {force: true})
        cy.get('select#years').select('2022', {force: true})
       
        cy.get('input[name="newsletter"]').check()
        cy.get('input[name="optin"]').check()

        cy.get('input[id="company"]').type('Thunders')
        cy.get('input[id="address1"]').type('Ocean Blvd')

        cy.get('input[id="address2"]').type('Rua 3 Quadra 233 lote 2')
        cy.get('input[id="city"]').type('Boca Ratton')
        cy.get('select#id_state').select('Florida', {force: true})
        cy.get('input[id="postcode"]').type('28396')
        cy.get('select#id_country').select('United States', {force: true})
        cy.get('textarea[id="other"]').type('Sem Complemento')
        cy.get('input[id="phone"]').type('61 981998723')
        cy.get('input[id="phone_mobile"]').type('61 984529559')
        cy.get('input[id="alias"]').type('Miame')
        cy.get('button[id="submitAccount"]').click()

        
        // eu espero que minha aplicação seja direcionada para a pagina de index.php?control=my-account
        // url
        // deve conter index

        cy.url().should('contain','index')
       
        
        
    });
});