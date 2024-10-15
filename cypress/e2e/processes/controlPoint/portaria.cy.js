describe("Cria ponto de controle Portaria ENT/SAI", () => {
  beforeEach(() =>{
    cy.entra();
  });

  it("Portaria", () => {

    // Cria ponto de controle
    cy.criaPonto();

    // Define tipo e nome do ponto - Tela 1 do processo de criação do ponto
    cy.selectMenu("internal", "Portaria ENT/SAI");

    // Cria o grupo e seleciona qual ponto será criado - Tela 2 do processo de criação do ponto
    cy.addGrupo("Portaria");
    cy.dispList("Portaria Integrada");

    // Define Ips e portas do dispostivos que serão usados no ponto - Tela 3 do processo de criação do ponto
    cy.cancela("127.0.0.1", "30010");
    cy.setLadoPortaria("A", "127.0.0.1", "30050");
    cy.aplicaSalva();
  });

});