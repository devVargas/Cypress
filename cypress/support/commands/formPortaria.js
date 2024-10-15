Cypress.Commands.add("cancela", ({ip, port}) => {
  cy.get("#tab-shared").click();
  cy.get(":nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > .flex > :nth-child(2) > .el-form-item__content > .input-host > .el-input__inner").type(ip);
  cy.get(":nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > .flex > :nth-child(3) > .el-form-item__content > .input-port > .el-input__inner").clear().type(port);
});
    
// Seta os IPs e Portas dos lados A e B, defina o lado na váriavel "lado" ***Portaria***
Cypress.Commands.add("setLadoPortaria", ({lado, ip, port}) => {
  cy.get(`#tab-${lado}`).click();  // Usa o lado dinamicamente (A ou B)
    
  if(lado == "A"){
    cy.get(":nth-child(3) > :nth-child(1) > .relative > .el-divider > .el-divider__text > .-ml-4 > :nth-child(2) > .el-switch > .el-switch__core").click();
    cy.get(":nth-child(3) > :nth-child(1) > :nth-child(2) > :nth-child(1) > .flex > :nth-child(2) > .el-form-item__content > .input-host > .el-input__inner").type(ip);
    cy.get(":nth-child(3) > :nth-child(1) > :nth-child(2) > :nth-child(1) > .flex > :nth-child(3) > .el-form-item__content > .input-port > .el-input__inner").clear().type(port);
  } else if (lado == "B"){
    cy.get(":nth-child(4) > :nth-child(1) > .relative > .el-divider > .el-divider__text > .-ml-4 > :nth-child(2) > .el-switch > .el-switch__core").click();
    cy.get(":nth-child(4) > :nth-child(1) > :nth-child(2) > :nth-child(1) > .flex > :nth-child(2) > .el-form-item__content > .input-host > .el-input__inner").type(ip);
    cy.get(":nth-child(4) > :nth-child(1) > :nth-child(2) > :nth-child(1) > .flex > :nth-child(3) > .el-form-item__content > .input-port > .el-input__inner").clear().type(port);
  } else {
    throw new Error("Lado Inválido");  
  }
});