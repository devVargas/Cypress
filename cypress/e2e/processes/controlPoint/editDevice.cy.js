describe("Faz a edição do ponto de controle", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Edita e salva o novo ponto de controle", () => {

    cy.processo();
    cy.contains("td", "Balança").closest("tr").within(() => {
      cy.get("button[title=\"editar rota\"]").click({ force: true });
    });
    cy.get("input.app-input[name=\"controlPointName\"]").type("ALTERADO");
    cy.get(".shadow-material").click();
    cy.get(".shadow-material").should("be.visible");
  });
});
