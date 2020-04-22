// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add(
    'removeAds',
    () => {
        cy.get('.yap-gemini-pub-item').then(() => {
            Cypress.$(".yap-gemini-pub-item").parent().remove()
        })
        cy.get("[id^=listing-native-list-item]").then(() => {
            Cypress.$("[id^=listing-native-list-item]").parent().remove()
        })
        cy.get("#adsense-slot").then(() => {
            Cypress.$("#adsense-slot").remove()
        })
        cy.get("#module-olx-shopping").then(() => {
            Cypress.$("#module-olx-shopping").parent().remove()
        })
        cy.get("#listing-gallery-ads").then(() => {
            Cypress.$("#listing-gallery-ads").remove()
        })
    });

    Cypress.Commands.add(
        'removeItens', () =>{
            cy.get(".fnmrjs-0 > .fnmrjs-1 > .fnmrjs-2").invoke('attr', 'style', 'display: none')
            cy.get(".fnmrjs-0 > .fnmrjs-1 > .fnmrjs-7 > .fnmrjs-9 > .fnmrjs-18").invoke('attr', 'style', 'display: none')
            cy.get(".fnmrjs-0 > .fnmrjs-1 > .fnmrjs-7 > .fnmrjs-20").invoke('attr', 'style', 'display: none')
            cy.get(".fnmrjs-0 > .fnmrjs-1 > .fnmrjs-7 > .fnmrjs-9 > .fnmrjs-8 > div").invoke('attr', 'style', 'display: none')

        });

Cypress.Commands.add(
    'getAttributes',
    {
      prevSubject: true,
    },
    (subject) => {
      cy.get(subject).each(($element, index) => {
          if(index > 4)
          cy.get($element).invoke('attr', 'style', 'display: none')
      });
    }
  );



