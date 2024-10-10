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