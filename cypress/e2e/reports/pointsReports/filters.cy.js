describe("Valida os filtros do menu 'Relatório de Pontos'", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Filtro Status", () => {
    cy
      .fechaLicenca();
    cy   
      .contains("li", "Relatórios")
      .click()
      .get("[href='/relatorios/acessos-ponto-de-controle/']")
      .should("be.visible")
      .click()
      .get("input[placeholder=\"Tipo\"]")
      .click({force:true})
      .get(".el-select-dropdown__item")
      .contains("span", "Automático")
      .click();
  });

  it("Filtro Veículo", () => {
    cy
      .fechaLicenca();
  
    cy
      .contains("li", "Relatórios")
      .click()
      .get("[href='/relatorios/acessos-ponto-de-controle/']")
      .should("be.visible")
      .click()
      .get("input[placeholder = \"Veículo\"]")
      .get(".el-select-dropdown__item")
      .contains("span", "AAA1111")
      .click({force:true});
  }); 

  it("Filtro Usuário", () => {
    cy
      .fechaLicenca();
  
    cy
      .contains("li", "Relatórios")
      .click()
      .get("[href='/relatorios/acessos-ponto-de-controle/']")
      .should("be.visible")
      .click()
      .get("input[placeholder = \"Usuário\"]")
      .get(".el-select-dropdown__item")
      .contains("span", "[1] Manutenção")
      .click({force:true});
  }); 

  it("Filtro Ponto de Controle", () => {
    cy
      .fechaLicenca();
  
    cy
      .contains("li", "Relatórios")
      .click()
      .get("[href='/relatorios/acessos-ponto-de-controle/']")
      .should("be.visible")
      .click()
      .get(".el-select-dropdown__item")
      .get("input[placeholder = \"Ponto de Controle\"]")
      .get(".el-select-dropdown__item")
      .contains("span", "Balança")
      .click({force:true});
  }); 
});