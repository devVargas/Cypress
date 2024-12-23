describe("Faz a validação de logout do sistema", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it("Abre o QR Code e valida se ele está correto", () => {
    cy
      .fechaLicenca();
    cy
      .get("[title='Sair'")
      .find(".fas.fa-sign-out-alt.cursor-pointer") 
      .click()
      .wait(1000)
      .fechaLicenca();
    cy
      .get("img.h-full")
      .should("be.visible")
      .and("have.attr", "src", "/img/logo.3b081f5a.png");   
  });
});