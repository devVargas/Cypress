// Comandos relacionados à autenticação (login, logout, etc.)

/* Cria uma sessão do usuário
Cypress.Commands.add("login", () =>{
  const username = Cypress.env("username");
  const password = Cypress.env("password"); 
 
  cy.session([username, password], () => {
    cy.visit("/");
    cy.licenca();
    cy.get("input.app-input[name=\"username\"]").type(username);
    cy.get("input.app-input[name=\"password\"]").type(password, {log:false});
    cy.get("form > .flex > .shadow-material").should("be.visible").click();
  });
});
*/

// Faz login no ponto de controle protegendo os dados do sistema
Cypress.Commands.add("login", () =>{
  const user = Cypress.env("username");
  const password = Cypress.env("password");
    
  cy.visit("/");
  cy.licenca();
  cy.get("input.app-input[name=\"username\"]").type(user);
  cy.get("input.app-input[name=\"password\"]").type(password, {log:false});
  cy.get("form > .flex > .shadow-material").click();
  cy.get(".fas.fa-sign-out-alt").should("be.visible");
});
