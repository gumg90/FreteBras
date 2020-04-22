describe('Evaluation of automation tests', () => {
    before(() => {
        Cypress.on('uncaught:exception', () =>{return false});
        cy.visit('https://www.olx.com.br/');
        cy.get("#q").type("computador");
        cy.get(".submitBtn").click();
      })
      
    it('display only five ads with name and amount', () => {
        cy.removeAds();
        cy.removeItens();
        cy.get('.sc-1fcmfeb-2').getAttributes();
    });

    it.only('print first ads', () => {
        cy.get(":nth-child(2) > .sc-1m4ygug-3").click()
        cy.removeAds();
        cy.get(":nth-child(1) > .fnmrjs-0").screenshot()
    });
});
