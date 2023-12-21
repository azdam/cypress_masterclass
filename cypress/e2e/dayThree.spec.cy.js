describe('Test Mima SignUp Journey', () => {

  it.only('Click SignUp', () => {

    cy.ClickAnElement('[class="sc-imWYAI dLIPIJ"]')
    cy.FillSignUpDetails()
  })

  it('Click Login', () => {

    cy.ClickAnElement('[class="sc-imWYAI hgdAmX"]')
  })
})