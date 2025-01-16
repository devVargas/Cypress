import { produto } from "../../../support/helpers/points.js";

describe("Faz a validação do formulário de criação de uma nova operação/produto", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it("Cria uma nova operação/produto", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("a", "Cadastro")
        .click()
        .get("ul.submenu a[href=\"/cadastros/operacoes/\"]")
        .should("be.visible")
        .click()
        .get("button[title=\"editar produto\"]")      
        .eq(0)
        .click({force:true})
        .get("#tab-products")
        .click()
        .get("button.el-button.el-button--primary.is-round")
        .contains("Novo")
        .should("be.visible")
        .click()
        .get("input[placeholder=\"Produto\"]")
        .click()
        .selecionaNaLista(produto.nome)
        .get("button.el-button--success")
        .should("be.visible")
        .eq(1)
        .click({force:true}); 
    });
});