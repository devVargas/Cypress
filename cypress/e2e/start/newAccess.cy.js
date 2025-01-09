import { motorista, rota, veiculo, produto, botaoConferencia, tag } from "../../support/helpers/points.js";

describe("Cria um acesso através do botão contido no menu 'Acessos'", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it("Faz a validação da criação do acesso através do botão 'Novo acessos' dentro do menu 'Acessos'", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("h3", "Novo acesso")
        .click();
      cy
        .url()
        .should("include", "/acessos/novo")
        .get("input[placeholder=\"Template da rota.\"]")
        .click()
        .selecionaNaLista(rota)
        .get(".el-button--success")  // Melhorar a ação de avançar -> O que muda do botão da segunda tela para primeira é apenas a tag pai que ele se encontra primeira tela não possui a mt8 na tag pai, verificar maneira de colocar esse botão dentro do buttonAvancar()
        .contains("button", "Avançar")
        .click()
        .gerenciaPlaca(veiculo.placa)
        .gerenciaMotorista(motorista)
        .get("input[placeholder=\"Tag\"]")
        .type(tag)
        .buttonAvancar()
        .gerenciaProduto(produto)
        .buttonAvancar()
        .gerenciaConferencia(botaoConferencia.modulo1)
        .buttonAvancar()
        .get("div[role='alert']")
        .should("be.visible")
        .then((alert) => {
          const alertClass = alert.attr("class");
          const alertMessage = alert.find("p.el-message__content").text();

          if(alertClass.includes("el-message--success")) {
            cy
              .url()
              .should("include", "/acessos/");
            expect(alertMessage).to.equal("Acesso criado com sucesso");
          } 
          if (alertClass.includes("el-message--error")) {
            if(alertMessage.includes("PLACA já possui outro acesso aberto")){
              cy.log("Placa ja possui outro acesso aberto");
            } 
            if (alertMessage.includes("TAG já possui outro acesso aberto.")) {
              cy.log("Tag já possui outro acesso aberto");
            }
          }
        });
    });
});