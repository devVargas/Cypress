import { transportadora } from "../../../support/helpers/points.js";

describe("Valida os botões de ação do menu 'Cadastros de transportadoras'", () => {
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
        .get("ul.submenu a[href=\"/cadastros/transportadoras/\"]")
        .should("be.visible")
        .click()
        .get("button[title=\"editar transportadora\"]")
        .eq(0)
        .click({force:true})
        .wait(1000)
        .get("input.el-input__inner")
        .eq(0)
        .clear()
        .type(`${transportadora.nome}2`)
        .buttonSalva()
        .get("div[role='alert']")
        .should("be.visible")
        .url()
        .should("include", "/cadastros/transportadoras");
    });

  it("Botão de exclusão", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("a", "Cadastro")
        .click()
        .get("ul.submenu a[href=\"/cadastros/transportadoras/\"]")
        .should("be.visible")
        .click()
        .get("button[title=\"Excluir transportadora\"]")
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