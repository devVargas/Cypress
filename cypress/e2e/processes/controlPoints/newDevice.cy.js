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
        
        .get("ul.submenu a[href=\"/processos/\"]")
        .should("be.visible")
        .click();
    });
});