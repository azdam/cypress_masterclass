let webpage
before(() => {
    cy.fixture('elements').then((elements) => {
        webpage = elements
    })
})
Cypress.Commands.add('ClickAnElement', (element) => {
    cy.get(element).click()
})
Cypress.Commands.add('typeAtext', (text_field, text) => {
    cy.get(text_field).should('be.visible').fill(text)
})

Cypress.Commands.add('FillSignUpDetails', () => {
    cy.typeAtext(webpage.fullNameField, webpage.fullName)
    cy.typeAtext(webpage.businessNameField, webpage.businessName)
    cy.typeAtext(webpage.businessEmailField, webpage.businessEmail)
    cy.typeAtext(webpage.phoneNumberField, webpage.phoneNumber)
    cy.typeAtext(webpage.businessRegField, webpage.businessRegNo)
})


Cypress.Commands.add('FillSignUpDetailsNext', () => {
    cy.typeAtext(webpage.websiteField, webpage.website)
    cy.typeAtext(webpage.hearAboutUsField, webpage.hearAboutUs)
    cy.get(webpage.hearAboutUsField).click()
    cy.get(webpage.hearAboutUsSearch).click()
    cy.typeAtext(webpage.passwordField, webpage.password)
    cy.get(webpage.SignUp).click()

})


