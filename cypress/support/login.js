// Faz login no ponto de controle protegendo os dados do sistema
Cypress.Commands.add("login", () => { 
  const user = Cypress.env("username");
  const password = Cypress.env("password");

  cy.licenca();
  cy.get("input.app-input[name=\"username\"]").type(user);
  cy.get("input.app-input[name=\"password\"]").type(password);
  cy.get("form > .flex > .shadow-material").click();
});
 
// Força a mensagem de licença a fechar
Cypress.Commands.add("licenca", () => { 
  cy.contains("button", "Continuar sem Licença").click({force: true});
});