// Funções auxiliares para lidar com os pontos de controle

// Acessa o menu de processo
Cypress.Commands.add("processo", () => {
  cy.get(":nth-child(5) > .item-menu > .sidenav-item").click();
  cy.licenca();
  cy.location("pathname").should("equal", "/processos/");
});

// Inicia o processo de criação do ponto de controle
Cypress.Commands.add("criaPonto", () => {
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
  if (nomeGp === "Balança") {
    cy.get(".el-dropdown > .el-button").click();
    cy.contains("li", "Balança Integrada").click();
    cy.get(":nth-child(1) > :nth-child(2) > :nth-child(1) > .el-dialog__wrapper > .el-dialog > .el-dialog__header > .el-dialog__title").should("be.visible");
  } else if (nomeGp === "Portaria") {
    cy.get(".el-dropdown > .el-button").click();
    cy.contains("li", "Portaria Integrada").click();
    cy.get(":nth-child(1) > :nth-child(2) > :nth-child(1) > .el-dialog__wrapper > .el-dialog > .el-dialog__header > .el-dialog__title").should("be.visible");
  };
});

// Aplica e salva as config dos dispositivos
Cypress.Commands.add("aplicaSalva", () => {
  cy.get(":nth-child(1) > :nth-child(2) > :nth-child(1) > .el-dialog__wrapper > .el-dialog > .el-dialog__footer > .dialog-footer > .el-button--primary").click();
  cy.get(".flex-col > .flex > .bg-primary").click();
  cy.get(".step-wrapper > .bg-primary").should("be.visible");
});

// Deleta ponto de controle
Cypress.Commands.add("deletePontoDeControleById", (id) => {
  // Constrói o href usando o ID passado como parâmetro
  const href = `/pontos-de-controle/${id}`;

  // Procura a linha que contém o link correspondente
  cy.get(`a[href="${href}"]`).closest("tr").first().then(($tr) => {
    // Log para verificar se o <tr> foi encontrado
    cy.log("TR encontrado:", $tr.length);

    if ($tr.length) {
      // Se o <tr> foi encontrado, encapsula o código dentro do contexto do <tr>
      cy.wrap($tr).within(() => {
        // Log para verificar se estamos dentro do contexto correto
        cy.log("Dentro do <tr>:" + href);

        // Clica no botão de exclusão na linha correspondente
        cy.get("button[title='excluir ponto de controle']").click({ force: true });
      });

      cy.wait(1000);

      cy.get("div.el-popconfirm__action").first().within(() => {
        cy.contains("button", "Ok").click({ force: true });
      });
    }
  });
});