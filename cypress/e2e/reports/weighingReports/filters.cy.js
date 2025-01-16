describe("Valida os filtros do menu 'Relatório de Pesagem'", () => {
  beforeEach(() => {
    cy.login(); 
  });
  it("Filtro Acesso", () => {
    cy
      .fechaLicenca();    
    cy
      .contains("li", "Relatórios")
      .click()
      .get("[href='/relatorios/pesagens/']")
      .should("be.visible")
      .click()
      .get("input[placeholder=\"Acesso\"]")
      .type("2", { force: true });
  });
  
  it("Filtro Status", () => {
    cy
      .fechaLicenca();
    cy   
      .contains("li", "Relatórios")
      .click()
      .get("[href='/relatorios/pesagens/']")
      .should("be.visible")
      .click()
      .get("input[placeholder=\"Selecione\"]")
      .click({force:true})
      .get(".el-select-dropdown__item")
      .contains("span", "Concluídos")
      .should("be.visible")
      .click();
  });

  it("Filtro Processo", () => {
    cy
      .fechaLicenca();

    cy
      .contains("li", "Relatórios")
      .click()
      .get("[href='/relatorios/pesagens/']")
      .should("be.visible")
      .click()
      .get("input[placeholder = \"Processo\"]")
      .click({force:true})
      .get(".el-select-dropdown__item")
      .contains("span", "[R05] Pesagem Padrão")
      .should("be.visible")
      .click();
  });

  it("Filtro Processo", () => {
    cy
      .fechaLicenca();

    cy
      .contains("li", "Relatórios")
      .click()
      .get("[href='/relatorios/pesagens/']")
      .should("be.visible")
      .click()
      .get("input[placeholder = \"Produto\"]")
      .click({force:true})
      .get(".el-select-dropdown__item")
      .contains("span", "PRODUTO1")
      .should("be.visible")
      .click();
  });

  it("Filtro Placa", () => {
    cy
      .fechaLicenca();
    
    cy
      .contains("li", "Relatórios")
      .click()
      .get("[href='/relatorios/pesagens/']")
      .should("be.visible")
      .click()
      .get("input[placeholder = \"Placa\"]")
      .type("HIK3542", {force:true});
  }); 

  it.only("Filtro Data", () => {
    cy
      .fechaLicenca();
    cy
      .contains("li", "Relatórios")
      .click()
      .get("[href='/relatorios/pesagens/']")
      .should("be.visible")
      .click()
      .get("span[data-v-a411b0f2]")
      .first()
      .invoke("text")
      .then((capturaData) => {
        const dividiDataEmPartes = capturaData.trim().split(" ")[0];
        const [dia, mes, ano] = dividiDataEmPartes.split("/");
        const dataFormatada = `${ano}-${mes}-${dia}`;
        cy
          .get("input[placeholder=\"Data de Início\"]")
          .type(`${dataFormatada}{enter}`)
          .get("input[placeholder=\"Data de Fim\"]")
          .type(`${dataFormatada}{enter}`);
      });     
  }); 
});