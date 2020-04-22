import * as pageElements from "../locator/pageElements"


export function searchItem(){
    cy.get(pageElements.searchBar).type(pageElements.searchedItem)
    cy.get(pageElements.btnSearch).click()
}