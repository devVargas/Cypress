// Funções auxiliares para lidar com as rotas
  
// Inicia o processo de cadastrar uma nova rota
Cypress.Commands.add("acessaRota", () => { 
  cy.get(":nth-child(5) > .item-menu > .sidenav-item").click();
  cy.licenca();
  cy.get("#tab-routes").click();
  cy.url().should("include", "/processos/?tab=routes");
});

Cypress.Commands.add("criaRota", () => { 
  cy.get("#pane-routes > .h-full > .w-full > .self-end > .el-button--primary").click();
  cy.url().should("include", "/rotas/novo");
});

// Define o código e nome da rota
Cypress.Commands.add("codName", (codRota, nameRota) => { 
  cy.get("input[name=\"routeCode\"]").type(codRota);
  cy.get("input[name=\"routeName\"]").type(nameRota);
});
  
// Define o formulário  
Cypress.Commands.add("selectForm", (form) => { 
  cy.get(".rule-select > .el-select > .el-input > .el-input__inner").click();
  cy.contains("li", form).click();
  cy.get(".justify-end > .shadow-material").click();
});
  
// Define a rota 
Cypress.Commands.add("selectStep", (step) => { 
  cy.get("input.el-input__inner[placeholder=\"Adicionar Ponto de Controle a rota\"]").click();
  cy.contains("li", step).click();
});
  
// Próximo ou Salvar
Cypress.Commands.add("proxSalv", () => { 
  cy.contains("button", "Próximo").click({force:true});
  cy.contains("button", "Salvar").click({force:true});
  cy.get(".step-wrapper > .bg-primary").should("be.visible");
});
  
// Valida os checkBox da tela de criação de rota 
// name=complement name=emitirTicket name=manyRoute name=writeTag
Cypress.Commands.add("checkBox", (id) => { 
  cy.get(`"#${id}"`).uncheck();
});

Cypress.Commands.add("deleteRouteById", (id) => {
  const href = `/rotas/${id}`;

  // Procura a linha que contém o link correspondente
  cy.get(`a[href="${href}"]`).closest("tr").first().then(($tr) => {
    
    cy.log("TR encontrado:", $tr.length);

    if ($tr.length) {
      
      cy.wrap($tr).within(() => {
        
        cy.log("Dentro do <tr>:" + href);
        cy.get("button[title='excluir rota']").click({ force: true });
      });
      
      cy.contains("button", "Ok").click({force: true});
    }
  });
});