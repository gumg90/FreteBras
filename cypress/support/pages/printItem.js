import * as pageTwo from './pageTwo'
import * as pageElements from "../locator/pageElements"


export function printItemPage(){
    pageTwo.navigatePageTwo()
    cy.get(pageElements.firstItem).screenshot()
}