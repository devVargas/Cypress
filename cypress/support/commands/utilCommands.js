Cypress.Commands.add("fechaLicenca", () => { 
  cy
    .wait(1000)
    .contains("button", "Continuar sem Licença")
    .click({force: true});
});

Cypress.Commands.add("login", () => {
  const user = Cypress.env("username");
  const password = Cypress.env("password");

  cy
    .visit("/")
    .fechaLicenca();
  cy
    .get("input.app-input[name=\"username\"]")
    .type(user)
    .get("input.app-input[name=\"password\"]")
    .type(password, { log: false })
    .get("form > .flex > .shadow-material")
    .click();
});

Cypress.Commands.add("selecionaNaLista", (itemLista) => {
  cy
    .get("ul > li") 
    .each(($li) => {
      const texto = $li.text().trim(); 
      if (texto === itemLista) {
        cy.wrap($li).click(); 
      } 
    });  
});

Cypress.Commands.add("buttonSalva", () => {
  cy
    .get("button > span")
    .contains("Salvar")
    .click(); 
});