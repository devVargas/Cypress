describe("Acessa o QR Code de sincronização do Ponto de Controle", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it("Abre o QR Code e valida se ele está correto", () => {
    cy
      .fechaLicenca();
    cy
      .get(".fa-qrcode")
      .click();
    cy
      .get("img.qrcode-screenimage")
      .should("be.visible")
      .and("have.attr", "src", "/api/v2/app/qrcode.png");     
  });
});