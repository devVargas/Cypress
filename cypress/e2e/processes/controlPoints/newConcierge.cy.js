import { pontoPort } from "../../../support/helpers/points";

Cypress.on("uncaught:exception", (err) => {
  if (err.message.includes("scrollTo")) {
    return false;
  }
  throw err;
});

describe("Cria o ponto de controle Portaria. Será criado uma portaria", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it("Cria o ponto de controle Portaria", 
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
        .get("button.el-button.el-button--primary.is-round")
        .contains("Novo")
        .should("be.visible")
        .click()
        .url()
        .should("include", "/pontos-de-controle/novo")
        .get("input[placeholder=\"Selecione\"]")
        .eq(0)
        .click()
        .selecionaNaLista(pontoPort.tipo)
        .get("input.el-input__inner")
        .eq(2)
        .type(pontoPort.nome)
        .buttonSalva()
        .get("button.el-button--medium")
        .click()
        .get("div[role=\"dialog\"][aria-label=\"Grupo de Integrações\"]")
        .should("be.visible")
        .within(() => {
          cy
            .get("input.el-input__inner")
            .eq(0)
            .type(pontoPort.nome)
            .get("button > span")
            .contains("Aplicar")
            .click();
        });
      cy
        .get("button.el-button > i.el-icon-plus")
        .click()
        .selecionaNaLista(pontoPort.naLista)
        .get("[aria-controls=\"pane-shared\"]")
        .click()
        .fillAddressPort(0, pontoPort.ipCanc, pontoPort.portCanc)
        .get("[aria-controls=\"pane-A\"]")
        .click()
        .get("#pane-A")
        .within(() => {
          cy
            .clickSwitch(0)
            .fillAddressPort(0, pontoPort.ipRfid, pontoPort.portRfid);
        });
      cy
        .get("button > span")
        .contains("Aplicar")
        .click()
        .get("div.justify-end > button.el-button--success > span")
        .click()
        .get("div[role='alert']")
        .should("be.visible")
        .then((alert) => {
          const alertClass = alert.attr("class");
          const alertMessage = alert.find("p.el-message__content").text();

          if(alertClass.includes("el-message--success")) {
            expect(alertMessage).to.equal("Ponto de Controle salvo com sucesso");
          }    
        });
    });
});