import { safra } from "../../../support/helpers/points.js";

describe("Faz a validação do formulário de criação de um nova Safra", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it("Cria a Safra", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("a", "Cadastro")
        .click()
        .get("ul.submenu a[href=\"/cadastros/safras/\"]")
        .should("be.visible")
        .click()
        .get("button.el-button.el-button--primary.is-round")
        .contains("Novo")
        .should("be.visible")
        .click()
        .url()
        .should("include", "/cadastros/safras/novo")
        .wait(1000);
      Object.entries(safra).forEach(([, value], index) => {
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
          const alertMessage = alert.find("p.el-message__content").text();
          cy
            .url()
            .should("include", "/cadastros/safras/");
          expect(alertMessage).to.equal("Safra criada com sucesso");
        });
    });
});