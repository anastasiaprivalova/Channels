describe('Channels', () => {
  beforeEach(() => {
    cy.visit('https://anastasiaprivalova.github.io/Channels/')
  })

  it('Check main flow', () => {
    // Check initial state
    cy.get('[test-id="cancel-btn"]')
      .should('not.exist')
    cy.get('[test-id="apply-btn"]')
      .should('not.exist')
    cy.get('.list-group>li')
      .should('not.exist')

    // Select existing option
    cy.get('[test-id="add-input"]')
      .type('v')
    cy.get('[test-id="add-options"]>li')
      .first()
      .click()

    // Check appearing control buttons
    cy.get('[test-id="cancel-btn"]')
      .should('be.visible')
    cy.get('[test-id="apply-btn"]')
      .should('be.visible')

    // Check if channel was added
    cy.get('.list-group li')
      .its('length')
      .should('be.eq', 1)

    // Rollback
    cy.get('[test-id="cancel-btn"]')
      .first()
      .click()

    // Check if rollback to the initial state
    cy.get('[test-id="cancel-btn"]')
      .should('not.exist')
    cy.get('[test-id="apply-btn"]')
      .should('not.exist')
    cy.get('.list-group>li')
      .should('not.exist')

    // Select non-existing option
    cy.get('[test-id="add-input"]')
      .type('Instagram{enter}')

    // Check appearing control buttons
    cy.get('[test-id="cancel-btn"]')
      .should('be.visible')
    cy.get('[test-id="apply-btn"]')
      .should('be.visible')

    // Check if new channel with icon was added
    cy.get('.list-group li .bg-galaxy-100 svg')
      .its('length')
      .should('be.eq', 1)

    // Apply
    cy.get('[test-id="apply-btn"]')
      .first()
      .click()

    // Select another option
    cy.get('[test-id="add-input"]')
      .type('t')
    cy.get('[test-id="add-options"]>li')
      .first()
      .click()

    // Check if channel was added
    cy.get('.list-group li')
      .its('length')
      .should('be.eq', 2)

    // Delete first option
    cy.get('.list-group li:first-of-type button')
      .first()
      .click()

    // Check if first option was deleted
    cy.get('.list-group li:first-of-type .bg-galaxy-100 + span')
      .should('not.have.text', 'Instagram')

    // Rollback
    cy.get('[test-id="cancel-btn"]')
      .first()
      .click()

    // Check if applied channel still exists
    cy.get('.list-group li:first-of-type .bg-galaxy-100 + span')
      .should('have.text', 'Instagram')
  })
})