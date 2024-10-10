// Inicia o processo de cadastrar um novo ponto de controle
Cypress.Commands.add("criaPonto", () => { 
  cy.get(":nth-child(5) > .item-menu > .sidenav-item").click();
  cy.licenca();
  cy.get("#pane-controlpoints > .h-full > .w-full > .self-end > .el-button--primary").click();
  cy.url().should("include", "/pontos-de-controle/novo");
});

// Inicia o processo de cadastrar uma nova rota
Cypress.Commands.add("criaRota", () => { 
  cy.get(":nth-child(5) > .item-menu > .sidenav-item").click();
  cy.licenca();
  cy.get("#tab-routes").click();
  cy.get("#pane-routes > .h-full > .w-full > .self-end > .el-button--primary").click();
  cy.url().should("include", "/rotas/novo");
});