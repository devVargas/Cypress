import dayjs from "dayjs";  // eslint-disable-line no-unused-vars

describe("Valida os filtros do menu 'Acessos'", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it("Filtro Acesso", 
    () => {
      cy
        .licenca();
      cy
        .contains("li", "Acessos")
        .click()
        .get("input[placeholder='Acesso']")
        .type("2")
        .get("a[href='/acessos/2']")
        .should("be.visible")
        .wait(1000)
        .get(".flex.mr-2 > :nth-child(1) > .el-input__suffix > .el-input__suffix-inner > .el-input__icon")
        .click();
    });
  it("Filtro Data", () => {
    cy
      .licenca();
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
        //cy.log("Data capturada", formateDate);
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
});