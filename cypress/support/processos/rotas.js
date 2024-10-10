// Define o código e nome da rota
Cypress.Commands.add("codName", (codRota, nameRota) => { 
  cy.get("input[name=\"routeCode\"]").type(codRota);
  cy.get("input[name=\"routeName\"]").type(nameRota);
});

// Define o formulário  
Cypress.Commands.add("selectForm", (form) => { 
  cy.get(".rule-select > .el-select > .el-input > .el-input__inner").click();
  cy.contains("li", form).click();
  cy.get(".justify-end > .shadow-material").click();
});

// Define a rota 
Cypress.Commands.add("selectStep", (step) => { 
  cy.get("input.el-input__inner[placeholder=\"Adicionar Ponto de Controle a rota\"]").click();
  cy.contains("li", step).click();
});

// Próximo ou Salvar
Cypress.Commands.add("proxSalv", () => { 
  cy.get(".justify-end > .bg-primary").click();
  cy.contains("button", "Salvar").click();
});

