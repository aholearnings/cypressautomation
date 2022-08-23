///<reference types = "cypress"/>

describe("Try login to application with valid credentials", ()=> {

    it("Login Credentials", ()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
          .url().should("include", "login")

        cy.get(".oxd-input").eq(0).type("Admin")
        cy.get("[type='password']").type("admin123")
        cy.get("button[type='submit']").click()
    });


    it("Verify user landed in the home screen", () => {
        cy.get(".oxd-topbar-body-nav-tab").eq(2).contains("Add Employee")

    });

        

        
    

});