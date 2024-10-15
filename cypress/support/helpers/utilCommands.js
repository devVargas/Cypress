// Comandos utilitários que são amplamente usados

// Força a mensagem de licença a fechar
Cypress.Commands.add("licenca", () => { 
  cy.contains("button", "Continuar sem Licença").click({force: true});
});

Cypress.Commands.add("avanca", () => { 
  cy.get(".mt-8 > .el-button--success").click();
});