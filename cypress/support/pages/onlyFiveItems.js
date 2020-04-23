import * as pageElements from "../locator/pageElements"


export function fiveItems(){
    cy.removeAds()
    cy.removeElementIten()
    cy.get(pageElements.itens).removeItens();
    cy.get(pageElements.itens).should($visible => {
        expect($visible).to.have.length(5)
    })
}