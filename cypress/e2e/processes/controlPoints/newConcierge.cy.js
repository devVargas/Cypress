import { pontoPort } from "../../../support/helpers/points";

describe("Cria o ponto de controle Portaria. Será criado uma portaria", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it("Cria o ponto de controle Portaria", 
    () => {
      cy
        .fechaLicenca();
      cy
        .get("a[href=\"/processos/\"]")
        .should("be.visible")
        .click()
        .get("button.el-button.el-button--primary.is-round")
        .contains("Novo")
        .should("be.visible")
        .click()
        .url()
        .should("include", "/pontos-de-controle/novo")
        .get("input[placeholder=\"Selecione\"]")
        .eq(0)
        .click()
        .selecionaNaLista(pontoPort.tipo)
        .get("input.el-input__inner")
        .eq(2)
        .type(pontoPort.nome)
        .buttonSalva();
    });
});