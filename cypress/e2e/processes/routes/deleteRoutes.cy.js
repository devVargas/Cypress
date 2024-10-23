describe("Deleta uma rota", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Faz a exclusão da rota", () => {

    cy.acessaRota();
    cy.deleteRouteById("9");
  });
});