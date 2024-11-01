describe("Deleta uma rota", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Faz a exclusão da rota", () => {

    cy.acessaRota();
    cy
      .contains("tr", "[R02] - ENT/SAI2")
      .find(".el-icon-delete")
      .parent()
      .click({force:true})
      .then(() =>{
        cy
          .wait(1000)
          .contains("div", "Deseja realmente excluir esta rota?")
          .contains("button", "Ok")
          .click({force:true});
      });
  });
});