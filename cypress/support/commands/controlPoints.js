// Funções auxiliares para lidar com os pontos de controle

// Inicia o processo de cadastrar um novo ponto de controle
Cypress.Commands.add("criaPonto", () => { 
  cy.get(":nth-child(5) > .item-menu > .sidenav-item").click();
  cy.licenca();
  cy.get("#pane-controlpoints > .h-full > .w-full > .self-end > .el-button--primary").click();
  cy.url().should("include", "/pontos-de-controle/novo");
});

// Cadastra tipo e nome do ponto de controle
Cypress.Commands.add("selectTypeName", (selectMenu, nome) => {
  // internal=Interno - ssWeight=Balança - classification=Classificação - barcode=Autorização por Cod de barras - autocheck=AutoCheck - checkIn=Check-in - loader=Smart Loader - cargoCheck=Conferencia de Cargas
  cy.get("select.app-select").select(selectMenu);
  cy.get("input.app-input[name=\"controlPointName\"]").type(nome);
  cy.get(".justify-end > .shadow-material").click();
});

// Cadastro do Grupo
Cypress.Commands.add("addGrupo", (nomeGp) => { 
  cy.get(".flex > .el-button").click();
  cy.get(".el-form-item__content > .el-input > .el-input__inner").type(nomeGp);
  cy.get(".-b-2 > .flex-1 > .el-dialog__wrapper > .el-dialog > .el-dialog__footer > .dialog-footer > .el-button--primary").click();

  // Vai selecionar o dispositivo dentro da lista baseado no nome do Grupo. 
  if(nomeGp === "Balança") {
    cy.get(".el-dropdown > .el-button").click();
    cy.contains("li", "Balança Integrada").click();
  };
});

// Aplica e salva as config dos dispositivos
Cypress.Commands.add("aplicaSalva", () => {
  cy.get(":nth-child(1) > :nth-child(2) > :nth-child(1) > .el-dialog__wrapper > .el-dialog > .el-dialog__footer > .dialog-footer > .el-button--primary").click();
  cy.get(".flex-col > .flex > .bg-primary").click();
});

