///<reference types = "cypress"/>

describe.skip("login to the orange-HRM application", ()=> {

    it("Launch url", ()=> {

        cy.visit("https://demo.guru99.com/test/newtours/index.php")
        // cy.get("[name='userName']").should("be.visible")
          .log("User in the login screen")
        // cy.url().should("include","login")
    });

    it("Enter valid credentials for login", () => {
        cy.get("[name='userName']").clear()
        cy.get("[name='userName']").type("admin")
        cy.get("[name='password']").clear()
        cy.get("[name='password']").type("admin123")
        cy.get("[type='submit']").click()
    });

    it("User should be navigated to Application home screen", () => {
        // cy.get("table h3").contains("Login Successfully")
        cy.get("table a").contains("SIGN-OFF")
          .log("User landed in Application Home Screen")

    });

});


describe.skip("Try login to application with invalid credentials", ()=> {

    it("Neagtive test case", ()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
          .url().should("include", "login")

        cy.get(".oxd-input").eq(0).type("Admin")
        cy.get("[type='password']").type("sdhgfdshg")
        cy.get("button[type='submit']").click()
        cy.get("div[class='oxd-alert-content oxd-alert-content--error'] p").contains("Invalid credentials")
    });

});

    

