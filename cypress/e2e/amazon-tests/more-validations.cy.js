/// <reference types = "cypress"/>

describe.skip("more validations", ()=> {

    it("Launch amazon application", () => {
        cy.visit("https://www.amazon.in/")

        // first()
        cy.get('#nav-xshop a:visible').first().click({force:true})

        //eq()
        cy.get('#nav-xshop a:visible').eq(2).click()

        //last()
        cy.get('#nav-xshop a:visible').last().click()
    });

});

describe("more validations", ()=> {

    it("more validations", () => {
        cy.visit("https://www.amazon.in/")

        /*
        Identify DOM Elements by ID, Class, 
        Any attribute, Parent-Child-sub-child, 
        Parent-Sub-child

        first-child
        last-child
        nth-child()
        nth-last-child()
        */

        cy.get("#searchDropdownBox option:first-child").then($firstdropDownText => {
            cy.log("first child value is :",$firstdropDownText.text())
        });

        cy.get("#searchDropdownBox option:last-child").then($lastdropDownText => {
            cy.log("last child value is :"+$lastdropDownText.text())
        });

        cy.get("#searchDropdownBox option:nth-child(4)").then($nthchilddropDownText => {
            cy.log("nth child value is :"+$nthchilddropDownText.text())
        });

        cy.get("#searchDropdownBox option:nth-last-child(4)").then($nthlastchilddropDownText => {
            cy.log("nth last child value is :"+$nthlastchilddropDownText.text())
        });





    });

});