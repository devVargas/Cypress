import { motorista } from "../../../support/helpers/points.js";

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
        .get("ul.submenu a[href=\"/cadastros/motoristas/\"]")
        .should("be.visible")
        .click()
        .get("button[title=\"editar motorista\"]")
        .eq(1)
        .click()
        .wait(1000)
        .get("input.el-input__inner")
        .eq(0)
        .clear()
        .type(`${motorista.nome}2`)
        .buttonSalva()
        .get("div[role='alert']")
        .should("be.visible")
        .url()
        .should("include", "/cadastros/motoristas");
    });

  it("Botão de exclusão", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("a", "Cadastro")
        .click()
        .get("ul.submenu a[href=\"/cadastros/motoristas/\"]")
        .should("be.visible")
        .click()
        .get("button[title=\"Excluir motorista\"]")
        .eq(1)
        .click()
        .then(() =>{
          cy
            .contains("button", "Ok")
            .click({force:true});
        });
    }); 
});