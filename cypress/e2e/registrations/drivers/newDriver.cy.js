import { motorista } from "../../../support/helpers/points.js";

describe("Faz a validação do formulário de criação de um novo motorista", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it("Cria o motorista", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("a", "Cadastro")
        .click()
        .get("ul.submenu a[href=\"/cadastros/motoristas/\"]")
        .should("be.visible")
        .click()
        .get("button.el-button.el-button--primary.is-round")
        .contains("Novo")
        .should("be.visible")
        .click()
        .url()
        .should("include", "/cadastros/motoristas/novo")
        .wait(1000);
      Object.entries(motorista).forEach(([, value], index) => {
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
              .should("include", "/cadastros/motoristas");
            expect(alertMessage).to.equal("Motorista criado com sucesso");
          } 
          if(alertClass.includes("el-message--error")) {
            alertMessage.includes("Erro: Motorista já cadastrado.");
            cy.log("Motorista ja cadastrado");
          }
        });
    });
});