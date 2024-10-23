describe("Cria ponto de controle Portaria ENT/SAI", () => {
  beforeEach(() =>{
    cy.login();
  });

  it("Inicia o processo de criação do ponto", () => {

    cy.processo();
    cy.criaPonto();
    cy.selectTypeName("internal", "PortariaL ENT/SAI");
    cy.addGrupo("Portaria");
    cy.cancela({
      ip: "127.0.0.1",
      port: "30010"
    });
    cy.setLadoPortaria({
      lado: "A",
      ip: "127.0.0.1",
      port: "30050"
    });
    cy.aplicaSalva();
    
  });
});