// Comandos relacionados à autenticação (login, logout, etc.)

// Faz login no ponto de controle protegendo os dados do sistema
Cypress.Commands.add("login", () => { 
    const user = Cypress.env("username");
    const password = Cypress.env("password");
  
    cy.licenca();
    cy.get("input.app-input[name=\"username\"]").type(user);
    cy.get("input.app-input[name=\"password\"]").type(password);
    cy.get("form > .flex > .shadow-material").click();
  });