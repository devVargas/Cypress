import { motorista } from "../../../support/helpers/points.js";

describe("Valida os filtros do menu 'Cadastros de motoristas'", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it("Filtro nome", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("a", "Cadastro")
        .click()
        .get("ul.submenu a[href=\"/cadastros/motoristas/\"]")
        .should("be.visible")
        .click()
        .get("input[placeholder='Nome']")
        .type(motorista.nome)
        .get("table.el-table__body")
        .find("td.el-table_1_column_3")
        .contains(motorista.nome)
        .should("be.visible");
    });
  it("Filtro CPF", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("a", "Cadastro")
        .click()
        .get("ul.submenu a[href=\"/cadastros/motoristas/\"]")
        .should("be.visible")
        .click()
        .get("input[placeholder='CPF']")
        .type(motorista.cpf)
        .get("table.el-table__body")
        .find("td.el-table_1_column_4")
        .contains(motorista.cpf)
        .should("be.visible");
    });
});