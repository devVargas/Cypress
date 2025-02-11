Cypress.Commands.add("fillAddressPort", (index, ip, port) => {
  cy
    .get("div.input-host.el-input > input[placeholder='Endereço']")
    .eq(index)
    .clear()
    .type(ip)
    .get("div.input-port.el-input > input[placeholder='Porta']")
    .eq(index)
    .clear()
    .type(port);
});

Cypress.Commands.add("clickSwitch", (index) => {
  cy.get("div[role=\"switch\"]")
    .eq(index)
    .click();
});
       
// // Deleta ponto de controle
// Cypress.Commands.add("deletePontoDeControleById", (id) => {
//   // Constrói o href usando o ID passado como parâmetro
//   const href = `/pontos-de-controle/${id}`;

//   // Procura a linha que contém o link correspondente
//   cy.get(`a[href="${href}"]`).closest("tr").first().then(($tr) => {
//     // Log para verificar se o <tr> foi encontrado
//     cy.log("TR encontrado:", $tr.length);

//     if ($tr.length) {
//       // Se o <tr> foi encontrado, encapsula o código dentro do contexto do <tr>
//       cy.wrap($tr).within(() => {
//         // Log para verificar se estamos dentro do contexto correto
//         cy.log("Dentro do <tr>:" + href);

//         // Clica no botão de exclusão na linha correspondente
//         cy.get("button[title='excluir ponto de controle']").click({ force: true });
//       });

//       cy.wait(1000);

//       cy.get("div.el-popconfirm__action").first().within(() => {
//         cy.contains("button", "Ok").click({ force: true });
//       });
//     }
//   });
// });