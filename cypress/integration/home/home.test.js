/// <reference types="cypress" />

describe('Home Page', () => {
  it('Should display the home page', () => {
    cy.visit("http://localhost:4200/");
    cy.contains("HelloAlex Johnson");
    cy.url().should('include', '/localhost')
    cy.pause()
    cy.get('.action-email').type('fake@email.com')
    .should('have.value', 'fake@email.com')
    // expect(true).to.equal(true);
  });
});
