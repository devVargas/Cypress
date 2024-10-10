// Comandos para produtos (criação, edição, exclusão, etc.)

// Cadastro do Tipo do ponto de controle e definir nome do mesmo
Cypress.Commands.add("selectMenu", (selectMenu, nome) => { 
  cy.get("select.app-select").select(selectMenu);
  cy.get("input.app-input[name=\"controlPointName\"]").type(nome);
  cy.get(".justify-end > .shadow-material").click();
});
   
// Cadastro do Grupo
Cypress.Commands.add("addGrupo", (nomeGp) => { 
  cy.get(".flex > .el-button").click();
  cy.get(".el-form-item__content > .el-input > .el-input__inner").type(nomeGp);
  cy.get(".-b-2 > .flex-1 > .el-dialog__wrapper > .el-dialog > .el-dialog__footer > .dialog-footer > .el-button--primary").click();
});
   
// Seleciona o dispositivo dentro da lista
Cypress.Commands.add("dispList", (dispLista) => { 
  cy.get(".el-dropdown > .el-button").click();
  cy.contains("li", dispLista).click();
});
   
// Seta os IPs e Portas da balança
Cypress.Commands.add("indicador", (ipInd, portInd) =>{
  cy.get("#tab-weighing").click();
  cy.get("#pane-weighing > :nth-child(2) > :nth-child(1) > .flex > :nth-child(2) > .el-form-item__content > .input-host > .el-input__inner").type(ipInd);
  cy.get("#pane-weighing > :nth-child(2) > :nth-child(1) > .flex > :nth-child(3) > .el-form-item__content > .input-port > .el-input__inner").clear().type(portInd);
});
   
// Seta os IPs e Portas da camera
Cypress.Commands.add("camIntelbras", (ipCam1, portCam1, ipCam2, portCam2) =>{
  const userCam = Cypress.env("usernameCam");
  const passwordCam = Cypress.env("passwordCam");
  // Camera 1
  cy.get("#pane-weighing > :nth-child(3) > .relative > .el-divider > .el-divider__text > .el-switch > .el-switch__core").click();
  cy.get("#pane-weighing > :nth-child(3) > :nth-child(2) > :nth-child(1) > .flex > :nth-child(2) > .el-form-item__content > .input-host > .el-input__inner").type(ipCam1);
  cy.get("#pane-weighing > :nth-child(3) > :nth-child(2) > :nth-child(1) > .flex > :nth-child(3) > .el-form-item__content > .input-port > .el-input__inner").clear().type(portCam1);
  cy.get(":nth-child(3) > :nth-child(3) > .mr-1 > .el-form-item__content > .el-input > .el-input__inner").type(userCam);
  cy.get(":nth-child(3) > :nth-child(3) > .ml-1 > .el-form-item__content > .el-input > .el-input__inner").type(passwordCam);
  // Camera 2
  cy.get("#pane-weighing > :nth-child(4) > .relative > .el-divider > .el-divider__text > .el-switch > .el-switch__core").click();
  cy.get("#pane-weighing > :nth-child(4) > :nth-child(2) > :nth-child(1) > .flex > :nth-child(2) > .el-form-item__content > .input-host > .el-input__inner").type(ipCam2);
  cy.get("#pane-weighing > :nth-child(4) > :nth-child(2) > :nth-child(1) > .flex > :nth-child(3) > .el-form-item__content > .input-port > .el-input__inner").clear().type(portCam2);
  cy.get(":nth-child(4) > :nth-child(3) > .mr-1 > .el-form-item__content > .el-input > .el-input__inner").type(userCam);
  cy.get(":nth-child(4) > :nth-child(3) > .ml-1 > .el-form-item__content > .el-input > .el-input__inner").type(passwordCam);
});
   
// Seta os IPs e Portas dos lados A e B, defina o lado na váriavel "lado" ***Balança***
Cypress.Commands.add("setLadoBalanca", (lado, ipRfid, portRfid, ipCanc, portCanc) => {
  cy.get(`#tab-${lado}`).click();  // Usa o lado dinamicamente (A ou B)
  
  // RFID
  cy.get(`#pane-${lado} > :nth-child(1) > .el-divider__text > .el-switch > .el-switch__core`).click();
  cy.get(`#pane-${lado} > :nth-child(2) > :nth-child(1) > .flex > :nth-child(2) > .el-form-item__content > .input-host > .el-input__inner`).type(ipRfid);
  cy.get(`#pane-${lado} > :nth-child(2) > :nth-child(1) > .flex > :nth-child(3) > .el-form-item__content > .input-port > .el-input__inner`).clear().type(portRfid);
   
  // Cancela
  cy.get(`#pane-${lado} > :nth-child(3) > .el-divider__text > .el-switch > .el-switch__core`).click();
  cy.get(`#pane-${lado} > :nth-child(4) > :nth-child(1) > .flex > :nth-child(2) > .el-form-item__content > .input-host > .el-input__inner`).type(ipCanc);
  cy.get(`#pane-${lado} > :nth-child(4) > :nth-child(1) > .flex > :nth-child(3) > .el-form-item__content > .input-port > .el-input__inner`).clear().type(portCanc);
});
   
// Aplica e salva as config dos dispositivos
Cypress.Commands.add("aplicaSalva", () => {
  cy.get(":nth-child(1) > :nth-child(2) > :nth-child(1) > .el-dialog__wrapper > .el-dialog > .el-dialog__footer > .dialog-footer > .el-button--primary").click();
  cy.get(".flex-col > .flex > .bg-primary").click();
});
  
Cypress.Commands.add("cancela", (ip, porta) => {
  cy.get("#tab-shared").click();
  cy.get(":nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > .flex > :nth-child(2) > .el-form-item__content > .input-host > .el-input__inner").type(ip);
  cy.get(":nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > .flex > :nth-child(3) > .el-form-item__content > .input-port > .el-input__inner").clear().type(porta);
});
  
// Seta os IPs e Portas dos lados A e B, defina o lado na váriavel "lado" ***Portaria***
Cypress.Commands.add("setLadoPortaria", (lado, ipRfidPortaria, portRfidPortaria) => {
  cy.get(`#tab-${lado}`).click();  // Usa o lado dinamicamente (A ou B)
  
  if(lado == "A"){
    cy.get(":nth-child(3) > :nth-child(1) > .relative > .el-divider > .el-divider__text > .-ml-4 > :nth-child(2) > .el-switch > .el-switch__core").click();
    cy.get(":nth-child(3) > :nth-child(1) > :nth-child(2) > :nth-child(1) > .flex > :nth-child(2) > .el-form-item__content > .input-host > .el-input__inner").type(ipRfidPortaria);
    cy.get(":nth-child(3) > :nth-child(1) > :nth-child(2) > :nth-child(1) > .flex > :nth-child(3) > .el-form-item__content > .input-port > .el-input__inner").clear().type(portRfidPortaria);
  } else if (lado == "B"){
    cy.get(":nth-child(4) > :nth-child(1) > .relative > .el-divider > .el-divider__text > .-ml-4 > :nth-child(2) > .el-switch > .el-switch__core").click();
    cy.get(":nth-child(4) > :nth-child(1) > :nth-child(2) > :nth-child(1) > .flex > :nth-child(2) > .el-form-item__content > .input-host > .el-input__inner").type(ipRfidPortaria);
    cy.get(":nth-child(4) > :nth-child(1) > :nth-child(2) > :nth-child(1) > .flex > :nth-child(3) > .el-form-item__content > .input-port > .el-input__inner").clear().type(portRfidPortaria);
  } else {
    throw new Error("Lado Inválido");  
  }
});