import { operacao } from "../../../support/helpers/points.js";

describe("Faz a validação do formulário de criação de uma nova operação", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it("Cria uma nova operação", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("a", "Cadastro")
        .click()
        .get("ul.submenu a[href=\"/cadastros/operacoes/\"]")
        .should("be.visible")
        .click()
        .get("button.el-button.el-button--primary.is-round")
        .contains("Novo")
        .should("be.visible")
        .click()
        .url()
        .should("include", "/cadastros/operacoes/novo")
        .wait(1000);
      Object.entries(operacao).forEach(([, value], index) => {
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
              .should("include", "/cadastros/operacoes");
            expect(alertMessage).to.equal("Operação criada com sucesso");
          } 
        });
    });
});