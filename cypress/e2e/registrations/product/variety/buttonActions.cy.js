import { variedade } from "../../../../support/helpers/points.js";

describe("Valida os botões de ação do menu 'Cadastro de variedade'", () => {
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
        .get("ul.submenu a[href=\"/cadastros/produtos/\"]")
        .should("be.visible")
        .click()
        .get("#tab-varieties")
        .click()
        .get("button[title=\"editar variedade\"]")      
        .eq(0)
        .click({force:true})
        .wait(1000)
        .get("div[role=\"dialog\"][aria-label=\"Dados da variedade\"]")
        .within(() => {
          cy
            .get("input.el-input__inner")
            .eq(1)
            .clear()
            .type(`${variedade.nome}1`)
            .buttonSalva();
        });
      cy
        .get("div[role='alert']")
        .should("be.visible")
        .url()
        .should("include", "/cadastros/produtos");
    });

  it("Botão de exclusão", 
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
        .get("#pane-varieties")
        .within(() => {
          cy
            .get("button[title=\"Excluir variedade\"]")
            .eq(0)
            .click({force:true})
            .then(() =>{
              cy
                .contains("button", "Ok")
                .click({force:true});
            });   
        });
      cy
        .get("div[role='alert']")
        .should("be.visible");
    }); 
});