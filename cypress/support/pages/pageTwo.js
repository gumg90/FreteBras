import * as pageElements from "../locator/pageElements"


export function navigatePageTwo(){
    cy.get(pageElements.navigatePageTwo).click()
}