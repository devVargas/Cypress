describe("Cria um acesso através do botão contido no menu 'Acessos'", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it("Faz a validação do botão '+ Novo' dentro do menu 'Acessos'", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("li", "Acessos")
        .click()
        .get("button.el-button.el-button--primary.is-round")
        .contains("Novo")
        .click()
        .url()
        .should("include", "/acessos/novo");
        122132132132321321321231
    });
});