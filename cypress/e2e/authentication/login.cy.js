describe("Valida o login do sistema", () => {
  it("Login", () => {
    const user = Cypress.env("username");
    const password = Cypress.env("password");
    
    cy.visit("/");
    cy.licenca();
    cy.get("input.app-input[name=\"username\"]").type(user);
    cy.get("input.app-input[name=\"password\"]").type(password, {log:false});
    cy.get("form > .flex > .shadow-material").should("be.visible").click();
    cy.get(".fas.fa-sign-out-alt").should("be.visible");
  });
});