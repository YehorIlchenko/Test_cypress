describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://cliniccards.com')
    cy.contains("Вхід").click()
    cy.get ('button[type="submit"]').click()
  })
})