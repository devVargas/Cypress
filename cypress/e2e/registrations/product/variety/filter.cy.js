import { produto, variedade } from "../../../../support/helpers/points.js";

describe("Valida os filtros do menu 'Cadastro de variedades'", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it.only("Filtro Código", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("a", "Cadastro")
        .click()
        .get("ul.submenu a[href=\"/cadastros/produtos/\"]")
        .should("be.visible")
        .click()
        .get("#tab-varieties")
        .click()
        .get("input[placeholder='Código']")
        .eq(1)
        .type(variedade.code)
        .wait(1000)
        .get("#pane-varieties")
        .within(() => {
          cy
            .get("table.el-table__body")
            .contains(variedade.code)
            .should("be.visible");
        });
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