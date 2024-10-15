// Seta os IPs e Portas da balança
Cypress.Commands.add("indicador", (ipInd, portInd) =>{
  cy.get("#tab-weighing").click();
  cy.get("#pane-weighing > :nth-child(2) > :nth-child(1) > .flex > :nth-child(2) > .el-form-item__content > .input-host > .el-input__inner").type(ipInd);
  cy.get("#pane-weighing > :nth-child(2) > :nth-child(1) > .flex > :nth-child(3) > .el-form-item__content > .input-port > .el-input__inner").clear().type(portInd);
});

// Seta os IPs e Portas da camera
Cypress.Commands.add("camIntelbras", (camConfigs) => {
  const userCam = Cypress.env("usernameCam");
  const passwordCam = Cypress.env("passwordCam");

  const baseSelector = 3; // A câmera 1 começa no 3, então usamos esse valor como base.

  // array    função  elemento  index do forEach
  camConfigs.forEach((config, index) => {
    const camIndex = baseSelector + index; // Ajuste dinâmico com base no index
    
    // Ativar a câmera
    cy.get(`#pane-weighing > :nth-child(${camIndex}) > .relative > .el-divider > .el-divider__text > .el-switch > .el-switch__core`).click();

    // Definir IP e Porta
    cy.get(`#pane-weighing > :nth-child(${camIndex}) > :nth-child(2) > :nth-child(1) > .flex > :nth-child(2) > .el-form-item__content > .input-host > .el-input__inner`).type(config.ip);
    cy.get(`#pane-weighing > :nth-child(${camIndex}) > :nth-child(2) > :nth-child(1) > .flex > :nth-child(3) > .el-form-item__content > .input-port > .el-input__inner`).clear().type(config.port);
    
    // Inserir usuário e senha
    cy.get(`:nth-child(${camIndex}) > :nth-child(3) > .mr-1 > .el-form-item__content > .el-input > .el-input__inner`).type(userCam);
    cy.get(`:nth-child(${camIndex}) > :nth-child(3) > .ml-1 > .el-form-item__content > .el-input > .el-input__inner`).type(passwordCam);
  });
});
     
// Seta os IPs e Portas dos lados A e B, defina o lado na váriavel "lado" ***Balança***
Cypress.Commands.add("setLadoBalanca", (configs) => {
  // Itera sobre o array de configurações
  configs.forEach(({ lado, ipRfid, portRfid, ipCanc, portCanc }) => {
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
});