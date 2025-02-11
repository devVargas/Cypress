// Funções auxiliares para chamadas de API (fazer requisições GET, POST, etc.)

Cypress.Commands.add("deleteRouteById", (routeId) => {
  // Obtém os dados do env.json diretamente
  const token = Cypress.env("authorization"); 

  cy.request({
    method: "DELETE",
    url: `http://127.0.0.1:4000/api/v2/routes/${routeId}`,
    headers: {
      Authorization: token 
    }
  }).then((response) => {
    expect(response.status).to.eq(204); // Verifica se a rota foi deletada com sucesso
  });
});