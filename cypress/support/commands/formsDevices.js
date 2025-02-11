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