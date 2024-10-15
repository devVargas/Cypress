describe("Faz a consulta dos acessos", () => {
  beforeEach(() =>{
    cy.entra();
  });
  
  it("Gera um novo acesso", () => {
    cy.get(".flex-1 > :nth-child(2) > .item-menu > .sidenav-item").click();
    cy.licenca();

  });
});