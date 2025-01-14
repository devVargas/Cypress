import { produto } from "../../../support/helpers/points.js";

describe("Faz a validação do formulário de criação de um novo produto", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it("Cria o produto", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("a", "Cadastro")
        .click()
        .get("ul.submenu a[href=\"/cadastros/produtos/\"]")
        .should("be.visible")
        .click()
        .get("button.el-button.el-button--primary.is-round")
        .contains("Novo")
        .should("be.visible")
        .click()
        .url()
        .should("include", "/cadastros/produtos/novo")
        .wait(1000);
      Object.entries(produto).forEach(([, value], index) => {
        cy
          .get("input.el-input__inner")
          .eq(index)
          .type(value);
      });
      cy
        .buttonSalva()
        .get("div[role='alert']")
        .should("be.visible")
        .then((alert) => {
          const alertClass = alert.attr("class");
          const alertMessage = alert.find("p.el-message__content").text();

          if(alertClass.includes("el-message--success")) {
            cy
              .url()
              .should("include", "/produtos/");
            expect(alertMessage).to.equal("Produto criado com sucesso");
          } 
          if (alertClass.includes("el-message--error")) {
            if (alertMessage.includes("Erro ao criar produto")) {
              cy.log("Produto já existe");
            }
          }
        });
    });
});