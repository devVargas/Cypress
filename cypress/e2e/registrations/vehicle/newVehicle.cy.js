import { veiculo } from "../../../support/helpers/points.js";

describe("Faz a validação do formulário de criação de um novo veículo", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it("Cria o veículo", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("a", "Cadastro")
        .click()
        .get("ul.submenu a[href=\"/cadastros/veiculos/\"]")
        .should("be.visible")
        .click()
        .get("button.el-button.el-button--primary.is-round")
        .contains("Novo")
        .should("be.visible")
        .click()
        .url()
        .should("include", "/cadastros/veiculos/novo")
        .wait(1000);
      cy
        .get("button[title=\"Cadastrar Modelo\"]")
        .click()
        .get("form.el-form--label-top")
        .eq(1)
        .should("be.visible")
        .within(() => {
          Object.entries(veiculo.modelo).forEach(([, value], index) => {
            cy
              .get("input.el-input__inner")
              .eq(index)
              .type(value);
          });
          cy
            .buttonSalva();
        });
      Object.entries(veiculo).forEach(([key, value], index) => {
        if (typeof value === "object") {
          cy.log(`Campo ${key} é um objeto, tratado separadamente.`);
        } else if (key === "ano") {
          cy
            .log("Ano")
            .get("input[placeholder=\"Selecione o ano\"]")
            .click()
            .get("ul > li")
            .contains("span", veiculo.ano)
            .click(); 
        } else {
          cy
            .get("input.el-input__inner")
            .eq(index)
            .type(value);
        }
      });
      cy
        .buttonSalva()
        .get("div[role='alert']")
        .eq(1)
        .should("be.visible")
        .then((alert) => {
          const alertClass = alert.attr("class");
          const alertMessage = alert.find("p.el-message__content").text();
                        
          if(alertClass.includes("el-message--success")) {
            cy
              .url()
              .should("include", "/cadastros/veiculos");
            expect(alertMessage).to.equal("Veículo salvo com sucesso");
          }        
        });
    });
});