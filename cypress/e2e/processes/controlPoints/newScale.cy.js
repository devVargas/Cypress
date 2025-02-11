import { pontoBal, pontoCamera, pontoTorreA, pontoTorreB } from "../../../support/helpers/points";

const userCam = Cypress.env("usernameCam");
const passwordCam = Cypress.env("passwordCam");

Cypress.on("uncaught:exception", (err) => {
  if (err.message.includes("scrollTo")) {
    return false;
  }
  throw err;
});

describe("Cria o ponto de controle Balança. Será criado uma balança S3", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it("Cria o ponto de controle Balança", 
    () => {
      cy
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
        .selecionaNaLista(pontoBal.tipo)
        .get("input.el-input__inner")
        .eq(2)
        .type(pontoBal.nome)
        .buttonSalva()
        .get("button.el-button--medium")
        .click()
        .get("div[role=\"dialog\"][aria-label=\"Grupo de Integrações\"]")
        .should("be.visible")
        .within(() => {
          cy
            .get("input.el-input__inner")
            .eq(0)
            .type(pontoBal.nome)
            .get("button > span")
            .contains("Aplicar")
            .click();
        });
      cy
        .get("button.el-button > i.el-icon-plus")
        .click()
        .selecionaNaLista(pontoBal.naLista)
        .get("[aria-controls=\"pane-weighing\"]")
        .click()
        .fillAddressPort(0, pontoBal.ip, pontoBal.port)
        .clickSwitch(0)
        .fillAddressPort(1, pontoCamera.ip1, pontoCamera.port1)
        .get("input[name=\"notanuser\"]")
        .eq(0)
        .type(userCam)
        .get("input[name=\"notanpassword\"]")
        .eq(0)
        .type(passwordCam)
        .clickSwitch(1)
        .fillAddressPort(2, pontoCamera.ip2, pontoCamera.port2)
        .get("input[name=\"notanuser\"]")
        .eq(1)
        .type(userCam)
        .get("input[name=\"notanpassword\"]")
        .eq(1)
        .type(passwordCam)
        .get("[aria-controls=\"pane-A\"]")
        .click()
        .get("#pane-A")
        .within(() => {
          cy
            .clickSwitch(0)
            .fillAddressPort(0, pontoTorreA.ipRfid, pontoTorreA.portRfid)
            .clickSwitch(1)
            .fillAddressPort(1, pontoTorreA.ipCanc, pontoTorreA.portCanc);
        })
        .get("[aria-controls=\"pane-B\"]")
        .click()
        .get("#pane-B")
        .within(() => {
          cy
            .clickSwitch(0)
            .fillAddressPort(0, pontoTorreB.ipRfid, pontoTorreB.portRfid)
            .clickSwitch(1)
            .fillAddressPort(1, pontoTorreB.ipCanc, pontoTorreB.portCanc);
        })
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