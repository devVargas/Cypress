import { operacao } from "../../../support/helpers/points.js";

describe("Valida os filtros do menu 'Cadastros de operações'", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it("Filtro da pagina de operações", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("a", "Cadastro")
        .click()
        .get("ul.submenu a[href=\"/cadastros/operacoes/\"]")
        .should("be.visible")
        .click()
        .get("#pane-operations")
        .within(() => {
          cy
            .get("input.el-input__inner")
            .type(operacao.obs)
            .wait(1000)
            .get("table.el-table__body")
            .contains(operacao.obs)
            .should("be.visible");
        });
    });
});