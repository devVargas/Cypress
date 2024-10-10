describe("Faz a consulta dos acessos", () => {
  beforeEach(() =>{
    cy.visit("/");
    cy.login({log: false});
  });
  
  it("Gera um novo acesso", () => {
    cy.get(".flex-1 > :nth-child(2) > .item-menu > .sidenav-item").click();
    cy.licenca();

  });
});