import { parceiros } from "../../../support/helpers/points.js";

describe("Valida os botões de ação do menu 'Cadastros de parceiros'", () => {
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
        .get("ul.submenu a[href=\"/cadastros/parceiros/\"]")
        .should("be.visible")
        .click()
        .get("button[title=\"editar parceiro\"]")
        .eq(0)
        .click({force:true})
        .wait(1000)
        .get("input.el-input__inner")
        .eq(0)
        .clear()
        .type(`${parceiros.nomeFantasia}2`)
        .buttonSalva()
        .get("div[role='alert']")
        .should("be.visible")
        .url()
        .should("include", "/cadastros/parceiros");
    });

  it("Botão de exclusão", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("a", "Cadastro")
        .click()
        .get("ul.submenu a[href=\"/cadastros/parceiros/\"]")
        .should("be.visible")
        .click()
        .get("button[title=\"Excluir parceiro\"]")
        .eq(0)
        .click({force:true})
        .then(() =>{
          cy
            .contains("button", "Ok")
            .click({force:true});
        });
      cy
        .get("div[role='alert']")
        .should("be.visible");
    }); 
});