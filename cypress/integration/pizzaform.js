describe('pizza form tests', function () {

    beforeEach(function () {
        cy.visit('http://localhost:3000/pizza')
    })

    it('Evaluates whether text can be added to boxes', function () {
        cy.get('#name-input').type('test name input').should('exist');
        cy.get('#special-text').type('special request test').should('exist');
    })

    it('Evaluates if multiple toppings can be selected', function () {
        cy.get('[type="checkbox"').check().should('be.checked')
    })

    it('Should be able to submit', function() {
        cy.get('#name-input').type('test name input')
        cy.get('#special-text').type('special request test')
        cy.get('[type="checkbox"').check()
        cy.get('#order-button').click()
        cy.get('#root > :nth-child(5) > :nth-child(1)').should('exist')
    })
})