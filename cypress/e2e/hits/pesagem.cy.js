describe("Abre o supervisório da balança para verificar a pesagem", () => {
  beforeEach(() =>{
    cy.entra();
  });
  
  it("Faz a pesagem", () => {
    cy.acessaSupervisorio("1");
  });
});