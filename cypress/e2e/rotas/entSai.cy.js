describe("Cria rota de Entrada/Saida", () => {
  beforeEach(() =>{
    cy.visit("/");
    cy.login();
  });
  
  it("Ent/Sai", () => {
  
    // Cria ponto de controle
    cy.criaRota();

    // Define código e nome da rota  - Tela 1 do processo de criação da Rota
    cy.codName("R01", "ENT/SAI");
    cy.selectForm("Pesagem");

    // Monta os steps da rotas - Tela 2 do processo de criação da Rota
    cy.selectStep("Portaria");
    cy.selectStep("Balança");
    cy.selectStep("Balança");
    cy.selectStep("Portaria");
    cy.proxSalv();
  });
});