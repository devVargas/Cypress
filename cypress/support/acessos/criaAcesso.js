// Inicia o processo de acesso
Cypress.Commands.add("criaAcesso", () => { 
  cy.get(".flex-1 > :nth-child(2) > .item-menu > .sidenav-item").click();
  cy.licenca();
  cy.get(".self-end > .el-button--primary").click();
  cy.url().should("include", "/acessos/novo");
});

// Seleciona a rota
Cypress.Commands.add("selectRota", (route) => { 
  cy.get("input[placeholder=\"Template da rota.\"]").click();
  cy.contains("li", route).click();
  cy.get(".el-button--success").click();
});

// Função principal para definir se deve criar uma nova placa ou usar uma existente
Cypress.Commands.add("gerenciarPlaca", (placa) => { 
  cy.get("button[title=\"Cadastrar Veículo\"]").click();
    
  // Tenta criar a nova placa
  cy.get(".is-required > .el-form-item__content > .el-input > .el-input__inner").type(placa);
  cy.get(".action-buttons > .el-button").click();
  
  // Verifica se a mensagem de erro aparece
  cy.get("body").then(($body) => {
    if ($body.text().includes("Erro ao salvar Veículo")) {
      // Se a placa já existe, usa a placa existente
      cy.log("Placa já existe, usando placa existente");
      cy.get("[aria-label=\"Cadastrar Veículo\"] > :nth-child(1) > .el-dialog__headerbtn > .el-dialog__close").click();
      cy.get("[title=\"Placa do veículo.\"] > .el-form-item__content > .vehicle-select > .el-select > .el-input > .el-input__inner").click();
      cy.contains("li", placa).click();
    } else {
      cy.log("Placa criada com sucesso");
    }
  });
});

Cypress.Commands.add("preencheTag", (tag) => { 
  cy.get(".tag-input > .el-input > .el-input__inner").type(tag);
  cy.avanca();
});

// Função principal para definir se deve criar um novo produto ou usar uma existente
Cypress.Commands.add("gerenciarProduto", (produto) => {
  cy.get("[title=\"Nome do produto.\"] > .el-form-item__content > .vehicle-select > .el-button").click();
    
  // Tenta criar o novo produto
  cy.get(".is-required > .el-form-item__content > .el-input > .el-input__inner").type(produto);
  cy.get(".el-dialog__footer > div > .self-end").click();
  cy.avanca();

  // Verifica se a mensagem de erro aparece
  cy.get("body").then(($body) => {
    if ($body.text().includes("Falha ao criar produto")) {
      // Se o produto já existe, usa a placa existente
      cy.log("Placa já existe, usando placa existente");
      cy.get("[style=\"z-index: 2008;\"] > .el-dialog > .el-dialog__header > .el-dialog__headerbtn > .el-dialog__close").click();
      cy.get("[title=\"Nome do produto.\"] > .el-form-item__content > .vehicle-select > .el-select > .el-input > .el-input__inner").click();
      cy.contains("li", produto).click();
      cy.avanca();
    } else {
      cy.log("Placa criada com sucesso");
    }
  });    
});

Cypress.Commands.add("avanca", () => { 
  cy.get(".mt-8 > .el-button--success").click();
});