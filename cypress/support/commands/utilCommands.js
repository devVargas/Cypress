// Comandos utilitários que são amplamente usados (ex: datas, formatações)

// Força a mensagem de licença a fechar
Cypress.Commands.add("licenca", () => { 
    cy.contains("button", "Continuar sem Licença").click({force: true});
  });

  // Inicia o processo de acesso
Cypress.Commands.add("acessaSupervisorio", (id) => { 
    const href = `/apps/weight-link/scale/${id}`;
      
    cy.get(`a[href="${href}"]`).click();
    cy.location("pathname").should("equal", "/scale");
  });
  
  // Inicia o processo de acesso
  Cypress.Commands.add("consultaPesagem", (id) => { 
    cy.intercpt("GET", `http://127.0.0.1:4000/api/v2/access/${id}/form`);
  });