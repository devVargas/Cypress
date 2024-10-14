describe("Cria ponto de controle Balanaça S3", () => {
  beforeEach(() =>{
    cy.entra();
  });

  it("Balança", () => {

    // Cria ponto de controle
    cy.criaPonto();

    // Define tipo e nome do ponto - Tela 1 do processo de criação do ponto
    cy.selectMenu("ssWeight", "Balança");

    // Cria o grupo e seleciona qual ponto será criado - Tela 2 do processo de criação do ponto
    cy.addGrupo("Balança");
    cy.dispList("Balança Integrada");
    
    // Define Ips e portas do dispostivos que serão usados no ponto - Tela 3 do processo de criação do ponto
    cy.indicador("127.0.0.1", "30000");
    cy.camIntelbras("192.168.130.200", "80", "192.168.130.239", "80");
    cy.setLadoBalanca("A", "127.0.0.1", "30051", "127.0.0.1", "30011"); //lado, ipRfid, portRfid, ipCanc, portCanc
    cy.setLadoBalanca("B", "127.0.0.1", "30061", "127.0.0.1", "30021"); //lado, ipRfid, portRfid, ipCanc, portCanc
    cy.aplicaSalva();
  });

});