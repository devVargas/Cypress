import { transportadora } from "../../../support/helpers/points.js";

describe("Valida os filtros do menu 'Cadastros de transportadoras'", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it("Filtro Código", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("a", "Cadastro")
        .click()
        .get("ul.submenu a[href=\"/cadastros/transportadoras/\"]")
        .should("be.visible")
        .click()
        .get("input[placeholder=\"Código\"]")
        .type(transportadora.code)
        .wait(1000)
        .get("table.el-table__body")
        .contains(transportadora.code)
        .should("be.visible");
    });

  it("Filtro Nome", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("a", "Cadastro")
        .click()
        .get("ul.submenu a[href=\"/cadastros/transportadoras/\"]")
        .should("be.visible")
        .click()
        .get("input[placeholder=\"Nome\"]")
        .type(transportadora.nome)
        .wait(1000)
        .get("table.el-table__body")
        .contains(transportadora.nome)
        .should("be.visible");
    });

  it("Filtro CNPJ", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("a", "Cadastro")
        .click()
        .get("ul.submenu a[href=\"/cadastros/transportadoras/\"]")
        .should("be.visible")
        .click()
        .get("input[placeholder=\"CNPJ\"]")
        .type(transportadora.cnpj)
        .wait(1000)
        .get("table.el-table__body")
        .contains(transportadora.cnpj)
        .should("be.visible");
    });
});