import { veiculo } from "../../../support/helpers/points.js";

describe("Valida os botões de ação do menu 'Cadastros de motoristas'", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it("Botão de edição", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("a", "Cadastro")
        .click()
        .get("ul.submenu a[href=\"/cadastros/veiculos/\"]")
        .should("be.visible")
        .click()
        .get("button[title=\"editar veículo\"]")
        .eq(0)
        .click({force:true})
        .wait(1000)
        .get("input.el-input__inner")
        .eq(2)
        .clear()
        .type(`${veiculo.code}2`)
        .buttonSalva()
        .get("div[role='alert']")
        .should("be.visible")
        .url()
        .should("include", "/cadastros/veiculos");
    });

  it("Botão de exclusão", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("a", "Cadastro")
        .click()
        .get("ul.submenu a[href=\"/cadastros/veiculos/\"]")
        .should("be.visible")
        .click()
        .get("button[title=\"Excluir Veículo\"]")
        .eq(1)
        .click({force:true})
        .then(() =>{
          cy
            .contains("button", "Ok")
            .click({force:true})
            .get("div[role='alert']")
            .should("be.visible");
        });
    }); 
});

