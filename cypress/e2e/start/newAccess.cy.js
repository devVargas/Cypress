import { motorista, rota, placa, produto, botaoConferencia } from "../../support/helpers/points.js";

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

        .get(".el-button--success")    // Melhorar a ação de avançar
        .contains("button", "Avançar")
        .click()

        .gerenciaPlaca(placa)
        .gerenciaMotorista(motorista)
        .get("input[placeholder=\"Tag\"]")
        .type("123455")

        .get(".mt-8 > .el-button--success")  // Melhorar a ação de avançar
        .should("not.be.disabled")
        .contains("Avançar")
        .click()

        .gerenciaProduto(produto)
        
        .get(".mt-8 > .el-button--success")
        .should("not.be.disabled")
        .contains("Avançar")
        .click()

        .gerenciaConferencia(botaoConferencia.modulo2);
    });
});