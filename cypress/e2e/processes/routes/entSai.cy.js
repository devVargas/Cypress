describe("Cria rota de Entrada/Saida", () => {
  beforeEach(() =>{
    cy.login();
  });
  
  it("Ent/Sai", () => {
  
    // Cria ponto de controle
    cy.acessaRota();
    cy.criaRota();

    // Define código e nome da rota  - Tela 1 do processo de criação da Rota
    cy.codName("R02", "ENT/SAI2");
    cy.selectForm("Pesagem");

    // Monta os steps da rotas - Tela 2 do processo de criação da Rota
    cy.selectStep("PortariaL ENT/SAI");
    cy.selectStep("BalançaP");
    cy.selectStep("BalançaP");
    cy.selectStep("PortariaL ENT/SAI");
    cy.proxSalv();
  });
});