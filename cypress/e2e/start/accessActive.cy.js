describe("Valida filtro do botão 'Acessos ativos' contido no menu iniciar", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it("Faz a validação do do botão 'Acessos ativos' dentro do menu 'Iniciar'", 
    () => {
      cy
        .licenca();
      cy
        .contains("h3", "Acessos ativos")
        .parent()
        .find("a[href=\"/acessos/\"]")
        .click();
      cy
        .url()
        .should("include", "/?interval=,&status=open");
    });
});