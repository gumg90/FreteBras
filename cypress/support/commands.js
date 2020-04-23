import * as pageElements from "./locator/pageElements"


Cypress.Commands.add(
    'removeAds',
    () => {

        cy.get(pageElements.adsGoogle).then(() => {
            Cypress.$(pageElements.adsGoogle).parent().remove()
        })
        cy.get(pageElements.adsPublicity).then(() => {
            Cypress.$(pageElements.adsPublicity).parent().remove()
        })
        cy.get(pageElements.gallery).then(() => {
            Cypress.$(pageElements.gallery).remove()
        })
        cy.get(pageElements.adsGoogleBotton).then(() => {
            Cypress.$(pageElements.adsGoogleBotton).parent().remove()
        })
        cy.get(pageElements.adsLinks).then(() => {
            Cypress.$(pageElements.adsLinks).remove()
        })

    }
);

Cypress.Commands.add(
    'removeElementIten', () =>{
        cy.get(pageElements.image).invoke('attr', 'style', 'display: none')
        cy.get(pageElements.location).invoke('attr', 'style', 'display: none')
        cy.get(pageElements.times).invoke('attr', 'style', 'display: none')
        cy.get(pageElements.advertiser).invoke('attr', 'style', 'display: none')
        if(Cypress.$(pageElements.description).is(":visible")){
            cy.get(pageElements.description).invoke('attr', 'style', 'display: none')
        }

    }
);

Cypress.Commands.add(
    'removeItens',
    {
      prevSubject: true,
    },
    (subject) => {
      cy.get(subject).each(($element, index) => {
          if(index > 4)
          cy.get($element).then(() => {
            Cypress.$($element).remove()
        })
      });
    }
  );



