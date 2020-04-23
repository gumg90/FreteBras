import * as mainPage from "../support/pages/mainPage"
import * as searchItem from "../support/pages/searchItem"
import * as pageElements from "../support/locator/pageElements"




describe('Evaluation of automation tests', () => {
    before(() => {
        Cypress.on('uncaught:exception', () =>{return false});
        cy.visit(pageElements.url)
        searchItem.searchItem()
    })
    it('display only five ads with name and amount', () => {
        mainPage.displayOnlyFiveItens()
    })

    it('print first ads', () => {
        mainPage.printFirstItemPage()
    })
});
