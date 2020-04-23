import * as pageTwo from './pageTwo'
import * as pageElements from "../locator/pageElements"


export function printItemPage(){
    pageTwo.navigatePageTwo()
    if(Cypress.$(pageElements.firstItem).is(":visible")){
        cy.get(pageElements.firstItem).screenshot()
    }
}