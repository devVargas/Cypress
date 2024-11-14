// Função principal para definir se deve criar uma nova placa ou usar uma existente
Cypress.Commands.add("gerenciaPlaca", (placa) => {
  cy
    .get("input[placeholder=\"Veículo\"]")
    .get("li")
    .contains(placa)
    .then(($placa) => {
      if ($placa.length) {
        cy
          .get("input[placeholder=\"Veículo\"]")
          .get("li")
          .contains(placa)
          .click();
      } else {
        // Se a placa não existe, execute outra ação
        cy.log("Placa não encontrada");
        // Coloque aqui o código que você quer executar se a placa não existir
      }
    });

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