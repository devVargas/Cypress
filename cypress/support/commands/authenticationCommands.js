// Comandos relacionados à autenticação (login, logout, etc.)

// Faz login no ponto de controle protegendo os dados do sistema
Cypress.Commands.add("login", () =>{
  const username = Cypress.env("username");
  const password = Cypress.env("password"); 
 
  cy.session([username, password], () => {
    cy.visit("127.0.0.1:4000");
    cy.get("input.app-input[name=\"username\"]").type(username);
    cy.get("input.app-input[name=\"password\"]").type(password, {log:false});
    cy.get("form > .flex > .shadow-material").should("be.visible").click();
  });
});