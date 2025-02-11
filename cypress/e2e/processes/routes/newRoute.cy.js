const { rota, pontoPort, pontoBal } = require("../../../support/helpers/points.js");

describe("Cria uma rota padrão de entrada/saida com uma portaria e uma balança", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it("Cria a rota", 
    () => {
      cy
        .wait(1000)
        .fechaLicenca();
      cy
        .get("a[href=\"/processos/\"]")
        .should("be.visible")
        .click()
        .url()
        .should("include", "/processos/?tab=controlpoints")
        .get("#tab-routes")
        .click()
        .url()
        .should("include", "/processos/?tab=routes")
        .get("#pane-routes")
        .within(() => {
          cy
            .get("button.el-button.el-button--primary.is-round")
            .contains("Novo")
            .should("be.visible")
            .click()
            .url()
            .should("include", "/rotas/novo");
        });
      cy
        .get("input[placeholder=\"Código da rota\"]")
        .type(rota.code)
        .get("input[placeholder=\"Nome da rota\"]")
        .type(rota.nome)
        .get("input[placeholder=\"Selecione\"]")
        .click()
        .selecionaNaLista(rota.form)
        .get("textarea[name=\"routeDescription\"]")
        .type(rota.obs);
      cy
        .contains("button", "Próximo")
        .click()
        .get("input[placeholder=\"Adicionar Ponto de Controle a rota\"]")
        .click()
        .selecionaNaLista(pontoPort.nome)
        .get("input[placeholder=\"Adicionar Ponto de Controle a rota\"]")
        .click()
        .selecionaNaLista(pontoBal.nome)
        .get("input[placeholder=\"Adicionar Ponto de Controle a rota\"]")
        .click()
        .selecionaNaLista(pontoBal.nome)
        .get("input[placeholder=\"Adicionar Ponto de Controle a rota\"]")
        .click()
        .selecionaNaLista(pontoPort.nome);
      cy
        .contains("button", "Próximo")
        .click();
      cy
        .contains("button", "Salvar")
        .click();
      cy
        .contains("h1", "Rota criada com sucesso!")
        .should("be.visible");
    });
});