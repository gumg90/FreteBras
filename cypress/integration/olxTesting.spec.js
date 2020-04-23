import * as mainPage from "../support/pages/mainPage"
import * as searchItem from "../support/pages/searchItem"

describe('Evaluation of automation tests', () => {
    before(() => {
        Cypress.on('uncaught:exception', () =>{return false});
        cy.visit("https://www.olx.com.br/")
        searchItem.searchItem()
    })
    it('display only five ads with name and values', () => {
        mainPage.displayOnlyFiveItens()
    })

    it('print first ads', () => {
        mainPage.printFirstItemPage()
    })
});
