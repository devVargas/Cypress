describe("Valida os filtros do menu Acessos", () => {
  beforeEach(() =>{
    cy
      .login();
  });

  it("Faz a validação do do botão 'Acessos ativos' dentro do menu 'Iniciar'", 
    () => {
      cy
        .licenca();
      cy
        .contains("li", "Acessos")
        .click()
        .get("input[placeholder='Acesso']")
        .type("6")
        .get("a[href='/acessos/6']")
        .should("be.visible")
        .wait(1000)
        
    });
});