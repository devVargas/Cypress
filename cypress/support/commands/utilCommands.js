// Fecha msg de licença
Cypress.Commands.add("licenca", () => { 
  cy
    .wait(1000)
    .contains("button", "Continuar sem Licença")
    .click({force: true});
});

// Cypress.Commands.add("avanca", () => { 
//   cy.get(".mt-8 > .el-button--success").click();
// });

// Faz login da página
Cypress.Commands.add("login", () => {
  const user = Cypress.env("username");
  const password = Cypress.env("password");

  cy
    .visit("/")
    .licenca();
  cy
    .get("input.app-input[name=\"username\"]")
    .type(user)
    .get("input.app-input[name=\"password\"]")
    .type(password, { log: false })
    .get("form > .flex > .shadow-material").click();
});