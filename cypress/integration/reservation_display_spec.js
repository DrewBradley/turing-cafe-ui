describe('Reservation Display', () => {
  it('Should display all existing reservations on page load', () => {
    cy.visit('http://localhost:3000')
      cy.get('div[class=resy-container').find('article').should('have.length', 9)
  });
});

describe('Reservation', () => {
  it('Should name of reservation', () => {
    cy.visit('http://localhost:3000')
      cy.get('article[class=res-card').find('h1').should('have.class', 'res-name')
  });
  it('Should date and time of reservation', () => {
    cy.visit('http://localhost:3000')
      cy.get('article[class=res-card').find('p[class=res-date]').contains('/')
      cy.get('article[class=res-card').find('p[class=res-time]').contains('pm')
  });

  it('Should number of guests in the reservation', () => {
    cy.visit('http://localhost:3000')
      cy.get('article[class=res-card').find('p[class=res-count]').contains('Number of guests')
  });

  it('Should be able to cancel reservation with button', () => {
    cy.visit('http://localhost:3000')
      cy.get('article[class=res-card').find('button').contains('Cancel')
      cy.get('button[class=cancel-btn').click({multiple: true})
      cy.get('div[class=resy-container').find('article').should('have.length', 0)
  });
});