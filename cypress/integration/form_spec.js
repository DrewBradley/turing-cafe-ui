describe('Reservation Form', () => {
  it('Should contain field for "name"', () => {
    cy.visit('http://localhost:3000')
      cy.get('form').find('input').should('have.attr', 'name', 'name')
  });

  it('Should be able to add text to "name"', () => {
    cy.visit('http://localhost:3000')
      cy.get('input[name=name]').type('Scott')
  });

  it('Should be able to add text to "date"', () => {
    cy.visit('http://localhost:3000')
      cy.get('input[name=date]').type('02/14')
  });

  it('Should be able to add text to "time"', () => {
    cy.visit('http://localhost:3000')
      cy.get('input[name=time]').type('12:00')
  });

  it('Should be able to select a number for "number of guests"', () => {
    cy.visit('http://localhost:3000')
      cy.get('input[name=number]').type(1)
  });

  it('Should be able to submit a reservation', () => {
    cy.visit('http://localhost:3000')
      cy.get('input[name=name]').type('Scott')
      cy.get('input[name=date]').type('02/14')
      cy.get('input[name=time]').type('12:00')
      cy.get('input[name=number]').type(1)
      cy.get('button[class=submit-button]').click()
  });

  it('Should display new reservation after it is submitted', () => {
    cy.visit('http://localhost:3000')
      cy.get('div[class=resy-container').find('article').should('have.length', 9)
      cy.get('input[name=name]').type('Leta')
      cy.get('input[name=date]').type('03/15')
      cy.get('input[name=time]').type('3:00')
      cy.get('input[name=number]').type(5)
      cy.get('button[class=submit-button]').click()
      cy.get('div[class=resy-container').find('article').should('have.length', 10)
  });
});