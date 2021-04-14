/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://automationintesting.online/#/admin');
  });

  it('logs in with correct credentials', () => {
    cy.get('#username').type('admin');
    cy.get('#password').type('password');
    cy.get('#doLogin').click();
    cy.get('#createRoom').should('be.visible');
  });
});
