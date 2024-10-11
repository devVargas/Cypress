describe("Validar todas as informações do menu motorista", () =>{
  beforeEach(() =>{
    const user = Cypress.env("username");
    const password = Cypress.env("password");
    
    cy.visit("127.0.0.1:4000");
    cy.licenca();
    cy.get("input.app-input[name=\"username\"]").type(user);
    cy.get("input.app-input[name=\"password\"]").type(password, {log:false});
    cy.get("form > .flex > .shadow-material").should("be.visible").click();
    cy.get(".fas.fa-sign-out-alt").should("be.visible");
  });

  context("Fazer a verificação se as informações que foram marcadas como obrigatório e ativos, estão sendo executadas corretamente", () => {
    it("Valida o redirencionamento", () =>{
      cy.visit('/cadastros/motoristas');
      cy.url().should('eq', 'http://127.0.0.1:4000/cadastros/motoristas');
    });
    it("Cadastro", () =>{
      cy.get('.self-end > .el-button--primary').click();
    })
  });
});