/// <reference types = "cypress"/>

describe("Expect Assertion", ()=> {

    it("Launch amazon application", () => {
        cy.visit("https://www.amazon.in/")



        cy.get("#glow-ingress-line2").should("be.visible")
        //   .should('have.text','Select your address')


        cy.get("#glow-ingress-line2").then($getText=>{

            cy.log($getText.text())

            expect($getText.text().trim()).to.be.eq("Select your address")
            expect($getText.text()).contain("address")
            expect($getText.text()).to.be.not.be.empty
        
        });

    });

});