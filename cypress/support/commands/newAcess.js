const { botaoConferencia } = require("../helpers/points");

Cypress.Commands.add("gerenciaPlaca", (placa) => {
  cy
    .get("input[placeholder=\"Veículo\"]")
    .click()
    .get("ul > li")
    .then(($li) => {
      const placaExiste = $li.map((_, el) => Cypress.$(el).text().trim()).get();
      if(placaExiste.includes(placa)){
        cy
          .get("ul > li")
          .each(($li) => {
            const texto = $li.text().trim(); 
            if (texto == placa) {
              cy.wrap($li).click(); 
            } 
          }); 
      } else {
        cy
          .log("Placa não encontrada")
          .get("button[title=\"Cadastrar Veículo\"]")
          .click()
          .get(".is-required > .el-form-item__content > .el-input > .el-input__inner")
          .type(placa)
          .buttonSalva();
      }
    });
});

Cypress.Commands.add("gerenciaMotorista", (motorista) => {
  cy
    .get("input[placeholder=\"Motorista\"]")
    .click()
    .get("ul > li")
    .then(($li) => {
      const motoristaExiste = $li.map((_, el) => Cypress.$(el).text().trim()).get();
      if(motoristaExiste.includes(motorista)){
        cy
          .get("ul > li")
          .each(($li) => {
            const texto = $li.text().trim(); 
            if (texto ==  motorista) {
              cy.wrap($li).click(); 
            } 
          }); 
      } else {
        cy
          .log("Motorista não encontrada")
          .get("button[title=\"Cadastrar Motorista\"]")
          .click()
          .get(".is-required > .el-form-item__content > .el-input > .el-input__inner")
          .type(motorista)
          .buttonSalva();
      }
    });
});

Cypress.Commands.add("gerenciaProduto", (produto) => {
  cy
    .get("input[placeholder=\"Produto\"]")
    .click()
    .get("ul > li")
    .then(($li) => {
      const produtoExiste = $li.map((_, el) => Cypress.$(el).text().trim()).get();
      if(produtoExiste.includes(produto)){
        cy
          .get("ul > li")
          .each(($li) => {
            const texto = $li.text().trim(); 
            if (texto ==  produto) {
              cy.wrap($li).click();   
            } 
          }); 
      } else {
        cy
          .log("Produto não encontrada")
          .get("button[title=\"Cadastrar Produto\"]")
          .click()
          .get(".is-required > .el-form-item__content > .el-input > .el-input__inner")
          .type(produto)
          .get("button > span")
          .contains("Criar")
          .click(); 
      }
    });
});

Cypress.Commands.add("gerenciaConf  erencia", (conferecia) => {
  if(conferecia === botaoConferencia.modulo1){
    cy.log("ok");
  }else {
    cy
      .get("div[role=\"radiogroup\"] label")
      .contains(conferecia)
      .click();

    const campos = [
      { titulo: "Carregamento Desejado", valor: "74000" },
      { titulo: "Carregamento Mínimo", valor: "73800" },  
      { titulo: "Carregamento Máximo", valor: "74100" },
    ];

    campos.forEach((campo) => {
      cy
        .get(`div[title="${campo.titulo}"]`)
        .find("input[type=\"number\"]")
        .type(campo.valor);
    });
      
    // .get("div[title=\"Carregamento Desejado\"]")
    // .find("input[type=\"number\"]")
    // .type("74000")
    // .get("div[title=\"Carregamento Mínimo\"]")
    // .find("input[type=\"number\"]")
    // .type("73800")
    // .get("div[title=\"Carregamento Máximo\"]")
    // .find("input[type=\"number\"]")
    // .type("74100")
  }
});