describe("Valida filtro do botão 'Acessos Concluídos' contido no menu iniciar", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it("Faz a validação do do botão 'Acessos Concluídos' dentro do menu 'Iniciar'", 
    () => {
      cy
        .fechaLicenca();
      cy
        .contains("h3", "Acessos concluídos")
        .parent()
        .find("a[href=\"/acessos/\"]")
        .click();
      cy
        .url()
        .should("include", "/?interval=,&status=complete");
    });
});