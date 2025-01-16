import { parceiros } from "../../../support/helpers/points.js";

describe("Valida os filtros do menu 'Cadastros de Parceiros'", () => {
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
        .get("ul.submenu a[href=\"/cadastros/parceiros/\"]")
        .should("be.visible")
        .click()
        .get("input[placeholder=\"Código\"]")
        .type(parceiros.code)
        .get("table.el-table__body")
        .wait(1000)
        .get("table.el-table__body")
        .contains(parceiros.code)
        .should("be.visible");
    });
  it("Filtro Razão Social", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("a", "Cadastro")
        .click()
        .get("ul.submenu a[href=\"/cadastros/parceiros/\"]")
        .should("be.visible")
        .click()
        .get("input[placeholder=\"Razão Social\"]")
        .type(parceiros.razaoSocial)
        .get("table.el-table__body")
        .wait(1000)
        .get("table.el-table__body")
        .contains(parceiros.razaoSocial)
        .should("be.visible");
    });
  it("Filtro Nome Fantasia", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("a", "Cadastro")
        .click()
        .get("ul.submenu a[href=\"/cadastros/parceiros/\"]")
        .should("be.visible")
        .click()
        .get("input[placeholder=\"Nome Fantasia\"]")
        .type(parceiros.nomeFantasia)
        .get("table.el-table__body")
        .wait(1000)
        .get("table.el-table__body")
        .contains(parceiros.nomeFantasia)
        .should("be.visible");
    });
  it.only("Filtro CNPJ", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("a", "Cadastro")
        .click()
        .get("ul.submenu a[href=\"/cadastros/parceiros/\"]")
        .should("be.visible")
        .click()
        .get("input[placeholder=\"CNPJ\"]")
        .type(parceiros.cnpj)
        .get("table.el-table__body")
        .wait(1000)
        .get("table.el-table__body")
        .contains(parceiros.cnpj)
        .should("be.visible");
    });
});