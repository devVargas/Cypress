import { rota } from "../../support/helpers/points";
import { placa } from "../../support/helpers/points";

describe("Cria um acesso através do botão contido no menu iniciar", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it("Faz a validação da criação do acesso através do botão 'Novo Acesso' dentro do menu 'Iniciar'  ", 
    () => {
      cy
        .licenca();
      cy
        .contains("h3", "Novo acesso")
        .click();
      cy
        .url()
        .should("include", "/acessos/novo")
        .get("input[placeholder=\"Template da rota.\"]")
        .click()
        .get("li")
        .contains(rota)
        .click()
        .get("button")
        .contains("Avançar")
        .wait(1000)
        .click();
      cy
        .gerenciaPlaca(placa);
      // cy
      //   .contains("ENT/SAI").then(($el) => {
      //     // Loga o nome da tag
      //     cy.log("Tag encontrada:", $el.prop("tagName"));
      //   });
    });
});