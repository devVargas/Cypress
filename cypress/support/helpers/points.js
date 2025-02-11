export const tag = "123456";

export const rota = {
  code: "R01",
  nome: "Rota Padrão",
  obs: "Observação Rota",
  form: "Pesagem Padrão"
};

export const botaoConferencia = { 
  modulo1: "Não Conferir", 
  modulo2: "Peso Bruto (Caminhão + Carga)", 
  modulo3: "Peso Subtotal (Apenas Carga)" ,
  modulo4: "Peso Liquido (Carga - Descontos)"
};

// Ponto de Controle

export const pontoPort = {
  nome: "Portaria ENT/SAI",
  tipo: "Interno",
  naLista: "Portaria Integrada",
  ipCanc: "127.0.0.1",
  portCanc: "30011",
  ipRfid: "127.0.0.1",
  portRfid: "30051"
};

export const pontoBal = {
  nome: "Balança",
  tipo: "Balança",
  naLista: "Balança Integrada",
  ip: "127.0.0.1",
  port: "30000"
};

export const pontoTorreA = {
  ipRfid: "127.0.0.1",
  portRfid: "30050",
  ipCanc: "127.0.0.1",
  portCanc: "30010"
};

export const pontoTorreB = {
  ipRfid: "127.0.0.1",
  portRfid: "30060",
  ipCanc: "127.0.0.1",
  portCanc: "30020"
};

export const pontoCamera = {
  ip1: "192.168.130.239",
  port1: "80",
  ip2: "192.168.130.235",
  port2: "80"
};

// Cadastros

export const motorista = {
  nome: "João12",
  cpf: "00011122233",
  cnh: "00011122288",
  telefone: "99999999999",
  obs: "Observação Motorista",
  code: "0001",
  tag: "crachá 1234"
};

export const safra = {
  codigo: "0001",
  nome: "Safra 2025/01"
};

export const veiculo = {
  placa: "ABC1214",
  modelo: {
    modeloPadrao: "Caminhão",
    pesoBruto: "74000",
    descricao: "Bitrem"
  },
  code: "0001",
  obs: "Observação Veiculo"	,
  ano: "2022",
  eixos: "9"
};

export const produto = {
  nome: "Milho",
  code: "0101",
  obs: "Observação Produto"
};

export const variedade = {
  nome: "Milho Variety",
  code: "0001"
};

export const operacao = {
  code: "0001",
  obs: "Observação Operação"
};

export const lavoura = {
  code: "0001",
  obs: "Observação Lavoura"
};

export const campo = {
  code: "0001",
  nome: "Talhão 01/1"
};

export const filial = {
  code: "0001",
  nome: "Empresa de Teste"
};

export const transportadora = {
  nome: "Transportadora Teste",
  code: "0001",
  cnpj: "03.299.514/0001-88",
  obs: "Observação Transportadora"
};

export const parceiros = {
  nomeFantasia: "Parceiro Teste",
  razaoSocial: "PRC Teste",
  cnpj: "32.791.502/0001-74",
  inscricaoEstadual: "555757038527",
  endereco: "Av. Antônio Frederico Ozanam, 217",
  cidade: "Canoas",
  estado: "RS",
  code: "0001",
  obs: "Observação Parceiros"
};