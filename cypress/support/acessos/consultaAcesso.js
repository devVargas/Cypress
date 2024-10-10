// Inicia o processo de acesso
Cypress.Commands.add("criaAcesso", () => { 
  cy.get(".flex-1 > :nth-child(2) > .item-menu > .sidenav-item").click();
  cy.licenca();
  cy.get(".self-end > .el-button--primary").click();
  cy.url().should("include", "/acessos/novo");
});

