///<reference types = "cypress"/>

describe("test mouse over", () => {
    it("Launch amazon application", () => {
        cy.visit("https://www.amazon.in/")
        cy.get("#nav-logo").should("be.visible")

        cy.get("#nav-tools a").eq(1).trigger("mouseover")

    });

});

describe.skip("Should Assertions", ()=> {

    it("Launch amazon application", () => {
        cy.visit("https://www.amazon.in/")
        cy.get("#nav-logo").should("be.visible")

        // cy.title().should('eq','amazon')

        //innertext validation
        cy.get("#nav-xshop a:visible").eq(1)
          .contains("Mobiles")

          //text validation
        cy.get("#nav-xshop a:visible").eq(1)
          .should('have.text', 'Mobiles')

        //visible
          cy.get("#nav-xshop a:visible").eq(1)
            .should('be.visible')

            // with class
            cy.get("#nav-xshop a:visible").eq(1)
            .should('have.class','nav-a')

            //with attr assertion
            cy.get("#nav-xshop a:visible").eq(1)
              .should('have.attr','href','/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles')

              cy.get("#nav-xshop a:visible").eq(1).click()
              cy.pause()   
              cy.go("back") 
              cy.go("forward")  

          


    });



});