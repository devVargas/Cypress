import { filial } from "../../../support/helpers/points.js";

describe("Valida os filtros do menu 'Cadastro de filial'", () => {
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
        .get("ul.submenu a[href=\"/cadastros/empresas/\"]")
        .should("be.visible")
        .click()
        .get("input[placeholder=\"Código\"]")
        .type(filial.code)
        .wait(1000)
        .get("table.el-table__body")
        .contains(filial.code)
        .should("be.visible");
    });

  it("Filtro Nome", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("a", "Cadastro")
        .click()
        .get("ul.submenu a[href=\"/cadastros/empresas/\"]")
        .should("be.visible")
        .click()
        .get("input[placeholder=\"Nome\"]")
        .type(filial.nome)
        .wait(1000)
        .get("table.el-table__body")
        .contains(filial.nome)
        .should("be.visible");
    });
});