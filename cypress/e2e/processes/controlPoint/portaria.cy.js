describe("Cria ponto de controle Balanaça S3", () => {
  beforeEach(() =>{
    cy.login();
  });

  it("Inicia o processo de criação do ponto", () => {

    cy.criaPonto();
    cy.selectTypeName("internal", "Portaria ENT/SAI");
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