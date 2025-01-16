import { transportadora } from "../../../support/helpers/points.js";

describe("Faz a validação do formulário de criação de uma nova transportadora", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it("Cria a Transportadora", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("a", "Cadastro")
        .click()
        .get("ul.submenu a[href=\"/cadastros/transportadoras/\"]")
        .should("be.visible")
        .click()
        .get("button.el-button.el-button--primary.is-round")
        .contains("Novo")
        .should("be.visible")
        .click()
        .url()
        .should("include", "/cadastros/transportadoras/novo")
        .wait(1000);
      Object.entries(transportadora).forEach(([, value], index) => {
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
              .should("include", "/cadastros/transportadoras");
            expect(alertMessage).to.equal("Transportadora criada com sucesso");
          }
        });
    });
});