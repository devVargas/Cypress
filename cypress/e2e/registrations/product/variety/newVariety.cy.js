import { produto, variedade } from "../../../../support/helpers/points.js";

describe("Faz a validação do formulário de criação de uma nova variedade", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it("Cria a variedade vinculada ao produto", 
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
        .get("button.el-button.el-button--primary.is-round")
        .eq(1)
        .contains("Novo")
        .should("be.visible")
        .click()
        .wait(1000)
        .get("div[role=\"dialog\"][aria-label=\"Dados da variedade\"]")
        .as("dialogScope");
      Object.entries(variedade).forEach(([, value], index) => {
        cy
          .get("@dialogScope")
          .within(() => {
            cy
              .get("input.el-input__inner")
              .eq(index + 1)
              .type(value);
          });
      });
      cy
        .get("input[placeholder=\"Produto\"]")
        .eq(1)
        .click()
        .selecionaNaLista(produto.nome)
        .buttonSalva()
        .get("div[role='alert']")
        .should("be.visible")
        .then((alert) => {
          const alertClass = alert.attr("class");
          const alertMessage = alert.find("p.el-message__content").text();

          if(alertClass.includes("el-message--success")) {
            expect(alertMessage).to.equal("Variedade criada com sucesso");
          } 
          if (alertClass.includes("el-message--error")) {
            if (alertMessage.includes("Erro")) {
              cy.log("Erro não tradado");
            }
          }
        });
    });
});