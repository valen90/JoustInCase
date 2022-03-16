/* eslint-disable no-undef */
// https://docs.cypress.io/api/table-of-contents

describe('Open Dialog', () => {
  it('Saves a new Jouster', () => {
    cy.visit('http://localhost:8081')
    cy.get('#createJouster').click()
    cy.get('#textArea').type('Sir Lancelot')
    cy.get('#saveButton').click()
    cy.reload()
    cy.get('#jousterTable').get('.md-table-row').get('.md-table-cell').eq(25).contains('Sir Lancelot')
  })
})
