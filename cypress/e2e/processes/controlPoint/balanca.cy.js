describe("Cria ponto de controle Balanaça S3", () => {
  beforeEach(() =>{
    cy.login();
  });

  it("Inicia o processo de criação do ponto", () => {

    cy.criaPonto();
    cy.selectTypeName("ssWeight", "Balança");
    cy.addGrupo("Balança");
    cy.indicador("127.0.0.1", "30000");
    cy.camIntelbras([
      { 
        ip: "192.168.130.200", 
        port: "80" 
      },
      { 
        ip: "192.168.130.239", 
        port: "80" 
      }
    ]);
    cy.setLadoBalanca([
      { 
        lado: "A", 
        ipRfid: "127.0.0.1", 
        portRfid: "30051",
        ipCanc: "127.0.0.1", 
        portCanc: "30011"
      },
      { 
        lado: "B", 
        ipRfid: "127.0.0.1", 
        portRfid: "30061",
        ipCanc: "127.0.0.1", 
        portCanc: "30021"
      }
    ]);
    cy.aplicaSalva();
  });
});