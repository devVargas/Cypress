describe("Acessa o supervisório da balança através do botão 'Abrir Supervisório' no menu iniciar", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it("Faz a validação do do botão 'Abrir Supervisório' dentro do menu 'Iniciar'", 
    () => {
      cy
        .licenca();
      cy
        .contains("h3", "Balança")
        .parent()
        .get("a[href=\"/apps/weight-link/scale/1\"]")
        .invoke("removeAttr", "target")
        .click();
      cy
        .url()
        .should("include", "/apps/weight-link/scale");
    });
});