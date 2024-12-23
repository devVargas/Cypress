describe("Acessa a funcionalidade abertura manual do Ponto de Controle", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it("Abre o processo de abertura manual e valida se ele está correto", 
    () => {
      cy
        .fechaLicenca();
      cy
        .get(".color-icon-close")
        .click()
        .get(".iconclose")
        .should("be.visible");
    });
});