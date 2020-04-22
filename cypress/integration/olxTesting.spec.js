describe('Evaluation of automation tests', () => {
    before(() => {
        Cypress.on('uncaught:exception', () =>{return false});
        cy.visit('https://www.olx.com.br/');
        cy.get("#q").type("carros");
        cy.get(".submitBtn").click();
      })
      
    it.only('display only five ads with name and amount', () => {
        cy.removeAds();
        cy.removeItens();
        cy.get('.sc-1fcmfeb-2').getAttributes();
        cy.get('.sc-1fcmfeb-2').should($visible => {
            expect($visible).to.have.length(5)
        })
    });

    it('print first ads', () => {
        cy.get(":nth-child(2) > .sc-1m4ygug-3").click()
        cy.removeAds();
        cy.get(":nth-child(1) > .fnmrjs-0").screenshot()
    });
});
