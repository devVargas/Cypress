import { pontoBal } from "../../../support/helpers/points";
import { pontoPort } from "../../../support/helpers/points";

describe("Cria rota de Entrada/Saida", () => {
  beforeEach(() =>{
    cy.login();
  });
  
  it("Ent/Sai", () => {
  
    // Cria ponto de controle
    cy.acessaRota();
    cy.criaRota();

    // Define código e nome da rota  - Tela 1 do processo de criação da Rota
    cy.codName("R01", "Entrada/Saida");
    cy.selectForm("Pesagem");

    // Monta os steps da rotas - Tela 2 do processo de criação da Rota
    cy.selectStep(pontoPort);
    cy.selectStep(pontoBal);
    cy.selectStep(pontoBal);
    cy.selectStep(pontoPort);
    cy.proxSalv();
  });
});