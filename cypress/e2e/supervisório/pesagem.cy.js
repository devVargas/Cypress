describe("Abre o supervisório da balança para verificar a pesagem", () => {
  beforeEach(() =>{
    cy.visit("/");
    cy.login();
  });
  
  it("Faz a pesagem", () => {
    cy.acessaSupervisorio("1");
  });
});