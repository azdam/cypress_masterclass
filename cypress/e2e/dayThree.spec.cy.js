let webpage
describe('Test Mima SignUp Journey', () => {
  before(() => {
    cy.fixture('elements').then((elements) => {
      webpage = elements
    })
    cy.visit('/')
  })

  it('Click SignUp Button', () => {
    cy.ClickAnElement(webpage.SignUpButton)
    cy.FillSignUpDetails()
    cy.wait(500).ClickAnElement(webpage.NextButton)
    cy.FillSignUpDetailsNext()
    cy.ClickAnElement(webpage.SignUp)
  })
})