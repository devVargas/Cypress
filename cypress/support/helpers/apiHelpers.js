// Funções auxiliares para chamadas de API (fazer requisições GET, POST, etc.)

Cypress.Commands.add("deleteRouteById", (routeId) => {
  // Obtém os dados do env.json diretamente
  const token = Cypress.env("authorization"); // Pega o Bearer Token diretamente

  // Faz a requisição DELETE à API usando o token
  cy.request({
    method: "DELETE",
    url: `http://127.0.0.1:4000/api/v2/routes/${routeId}`,
    headers: {
      Authorization: token // Usando o Bearer Token
    }
  }).then((response) => {
    expect(response.status).to.eq(204); // Verifica se a rota foi deletada com sucesso
  });
});