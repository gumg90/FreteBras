import * as mainPage from "../support/pages/mainPage"
import * as searchItem from "../support/pages/searchItem"

describe('Evaluation of automation tests', () => {
    before(() => {
        cy.visit("https://www.olx.com.br/")
        cy.on('uncaught:exception', () => {return false});
        searchItem.searchItem()
    })

    it('display only five ads with name and values', () => {
        mainPage.displayOnlyFiveItens()
    })

    it('print first ads', () => {
        mainPage.printFirstItemPage()
    })
});
