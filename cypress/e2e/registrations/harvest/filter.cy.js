import { safra } from "../../../support/helpers/points.js";

describe("Valida os filtros do menu 'Cadastros de safras'", () => {
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
        .get("ul.submenu a[href=\"/cadastros/safras/\"]")
        .should("be.visible")
        .click()
        .get("input[placeholder='Código']")
        .type(safra.codigo)
        .wait(1000)
        .get("table.el-table__body")
        .contains(safra.codigo)
        .should("be.visible");
    });

  it("Filtro Descrição", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("a", "Cadastro")
        .click()
        .get("ul.submenu a[href=\"/cadastros/safras/\"]")
        .should("be.visible")
        .click()
        .get("input[placeholder='Descrição']")
        .type(safra.nome)
        .wait(1000)
        .get("table.el-table__body")
        .contains(safra.nome)
        .should("be.visible");
    });
});