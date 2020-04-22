import * as pageElements from "../locator/pageElements"


export function fiveItems(){
    cy.removeAds()
    cy.removeItens()
    cy.get(pageElements.itens).getAttributes();
    cy.get(pageElements.itens).should($visible => {
        expect($visible).to.have.length(5)
    })
}