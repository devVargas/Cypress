describe("Cria um acesso Simples", () => {
  beforeEach(() =>{
    cy.entra();
  });
  
  it("Gera um novo acesso", () => {
        
    cy.criaAcesso();
    cy.selectRota("ENT");
    cy.gerenciarPlaca("ABC1214");
    cy.preencheTag("889790670001600000720878");
    cy.gerenciarProduto("MILHO");
    cy.avanca();
  });
});