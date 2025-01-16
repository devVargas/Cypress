import { produto } from "../../../support/helpers/points.js";

describe("Valida os filtros do menu 'Cadastros de produtos'", () => {
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
        .get("ul.submenu a[href=\"/cadastros/produtos/\"]")
        .should("be.visible")
        .click()
        .get("input[placeholder='Código']")
        .type(produto.code)
        .wait(1000)
        .get("table.el-table__body")
        .contains(produto.code)
        .should("be.visible");
    });

  it("Filtro Produto", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("a", "Cadastro")
        .click()
        .get("ul.submenu a[href=\"/cadastros/produtos/\"]")
        .should("be.visible")
        .click()
        .get("input[placeholder='Produto']")
        .type(produto.nome)
        .wait(1000)
        .get("table.el-table__body")
        .contains(produto.nome)
        .should("be.visible");
    });
});