import { veiculo } from "../../../support/helpers/points.js";

describe("Valida os filtros do menu 'Cadastros de motoristas'", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it("Filtro placa", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("a", "Cadastro")
        .click()
        .get("ul.submenu a[href=\"/cadastros/veiculos/\"]")
        .should("be.visible")
        .click()
        .get("input[placeholder='Placa']")
        .type(veiculo.placa)
        .get("table.el-table__body")
        .wait(1000)
        .get("table.el-table__body")
        .contains(veiculo.placa)
        .should("be.visible");
    });
});