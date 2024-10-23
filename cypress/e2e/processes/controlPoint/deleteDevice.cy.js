describe("Deleta um ponto de controle", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Faz a exclusão do ponto de controle", () => {

    cy.processo();
    cy.deletePontoDeControleById(30);
  });
});