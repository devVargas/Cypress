import dayjs from "dayjs";  // eslint-disable-line no-unused-vars

describe("Valida os filtros do menu 'Acessos'", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it("Filtro Acesso", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("li", "Acessos")
        .click()
        .get("input[placeholder='Acesso']")
        .type("2")
        .get("a[href='/acessos/2']")
        .should("be.visible");
    });
  it("Filtro Data", () => {
    cy
      .fechaLicenca();
    cy
      .contains("li", "Acessos")
      .click()
      .get("span[data-v-5fa41251]")
      .first()
      .invoke("text")
      .then((capturaData) => {
        const dividiDataEmPartes = capturaData.trim().split(" ")[0];
        const [dia, mes, ano] = dividiDataEmPartes.split("/");
        const dataFormatada = `${ano}-${mes}-${dia}`;
        cy
          .get("input[placeholder=\"Início\"]")
          .type(`${dataFormatada}{enter}`)
          .get("input[placeholder=\"Fim\"]")
          .type(`${dataFormatada}{enter}`)
          .wait(1000)
          .url()
          .should("include", `interval=${dataFormatada}`);
      });     
  }); 
  it("Filtro Processo", () => {
    cy
      .fechaLicenca();
    cy
      .contains("li", "Acessos")
      .click()
      .get("input[placeholder=\"Processo\"]")
      .click()
      .get(".el-select-dropdown__item")
      .contains("span", "[r01] entrada") 
      .click()
      .then(($el) => {
        const textoCompleto = $el.text();
        const textoProcessado = textoCompleto.replace(/\[.*?\]\s*/, "");
        cy
          .get("td .cell")
          .should("contain.text", textoProcessado);
      });
  });
  it("Filtro TAG", () => {
    cy
      .fechaLicenca();
    cy
      .contains("li", "Acessos")
      .click()
      .get(".el-table__body-wrapper > .el-table__body > tbody > .el-table__row > .el-table_1_column_4 > .cell > div")
      .invoke("text")
      .then((text) => {
        cy
          .get("input[placeholder=\"TAG\"]")
          .type(text)
          .get("td .cell")
          .should("contain.text", text);
      });
  });
  it("Filtro Placa", () => {
    cy
      .fechaLicenca();
    cy
      .contains("li", "Acessos")
      .click()
      .get("td.el-table_1_column_5")
      .children("div.cell")
      .eq(1)
      .invoke("text")
      .then((text) => {
        cy
          .get("input[placeholder=\"Placa\"]")
          .type(text)
          .get("td .cell")
          .should("contain.text", text);
      });
  });
  it("Filtro Status", () => {
    cy
      .fechaLicenca();
    cy
      .contains("li", "Acessos")
      .click()
      .get("input[placeholder=\"Selecione\"]")
      .click();
    cy
      .selecionaNaLista("Abertos")
      .get("td.el-table_1_column_6")
      .children("div.cell")
      .eq(1)
      .invoke("text")
      .then((text) => {
        cy
          .get("td .cell")
          .should("contain.text", text);
      });
  });
});