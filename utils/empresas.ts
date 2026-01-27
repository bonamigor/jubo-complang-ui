export interface EmpresaProps {
  id: number;
  attribute: string;
  displayName: string;
  nome: string;
  cnpj: string;
  endereco: string;
  cidade: string;
  estado: string;
}

export const empresas: Array<EmpresaProps> = [
  {
    id: 1,
    attribute: 'kidelicia',
    displayName: 'Kidelicia',
    nome: 'Panificadora e Lanchonete Kidelicia',
    cnpj: '02.895.623/0001-03',
    endereco: 'Rua Pinheiro Chagas, 171, Setor Sudoeste, 74303-035',
    cidade: 'Goiânia',
    estado: 'Goiás'
  },
  // {
  //   attribute: 'coperal',
  //   displayName: 'COPERAL',
  //   nome: 'COPERAL',
  //   cnpj: '46.258.870/0001-66',
  //   endereco: 'Rua 26 de setembro, nº 21, lt. 23, Setor Estrela Dalva',
  //   cidade: 'Goiânia',
  //   estado: 'Goiás'
  // },
  {
    id: 2,
    attribute: 'coopassen',
    displayName: 'COOPASSEN',
    nome: 'COOPASSEN',
    cnpj: '36.070.538/0001-10',
    endereco: 'R. Padre Alcides Spolidoro, S/N, Q. I4 L. 11/12, Dist Ind Santa Edwiges',
    cidade: 'Senador Canedo',
    estado: 'Goiás'
  },
  {
    id: 3,
    attribute: 'coopaco',
    displayName: 'COOPACO',
    nome: 'COOPACO',
    cnpj: '33.507.873/0001-44',
    endereco: 'Rua 03, QD. 07, LT. 13, Sala 03, Recanto das Emboabas',
    cidade: 'Aparecida de Goiânia',
    estado: 'Goiás'
  },
  {
    id: 4,
    attribute: 'compaf',
    displayName: 'COMPAF',
    nome: 'COMPAF',
    cnpj: '29.119.413/0001-71',
    endereco: 'ROD GO-320 KM 10.5 n 100, LT. 11 QD. 03, RES BOA ESPERANCA',
    cidade: 'Goiatuba',
    estado: 'Goiás'
  },
  {
    id: 5,
    attribute: 'coopanira',
    displayName: 'COOPANIRA',
    nome: 'COOPANIRA',
    cnpj: '50.702.609/0001-80',
    endereco: 'Rua José Caitano Leal, Quadra 17, Lote 33, Setor Sul',
    cidade: 'Goianira',
    estado: 'Goiás'
  },
  {
    id: 6,
    attribute: 'magno',
    displayName: 'MAGNO',
    nome: 'MAGNO COMERCIO DE ALIMENTOS LTDA',
    cnpj: '52.308.366/0001-26',
    endereco: 'Rua Pinheiro Chagas, Número 16, Vl. Nova Canaã',
    cidade: 'Goiânia',
    estado: 'Goiás'
  },
  {
    id: 7,
    attribute: 'belo-horizonte',
    displayName: 'Belo Horizonte',
    nome: 'COMERCIAL BELO HORIZONTE LTDA',
    cnpj: '30.291.399/0001-78',
    endereco: 'Av. Peru, S/N, Qd. 08, Lt. 11, Sala 01, Jd. Belo Horizonte',
    cidade: 'Aparecida de Goiânia',
    estado: 'Goiás'
  },
  {
    id: 8,
    attribute: 'mse-almeida',
    displayName: 'MSE ALMEIDA',
    nome: 'M S E DE ALMEIDA COMERCIO DE ALIMENTOS LTDA',
    cnpj: '09.376.170/0001-40',
    endereco: 'RUA  GB2, nº 19, QD 09 LT 01, Jd GUANABARA II, CEP: 74.680-600',
    cidade: 'Goiânia',
    estado: 'Goiás'
  },
  {
    id: 9,
    attribute: 'comercial-lima',
    displayName: 'Comercial Lima',
    nome: 'CL ALIMENTOS LTDA',
    cnpj: '35.137.005/0001-45',
    endereco: 'R DAS ORQUIDEAS, 1008, QUADRA122 LOTE 02, PRQ OESTE INDUSTRIAL, 74.375-210',
    cidade: 'Goiânia',
    estado: 'Goiás'
  },
  {
    id: 10,
    attribute: 'cooperago',
    displayName: 'COOPERAGO',
    nome: 'COOPERATIVA MISTA DOS AGRICULTORES FAMILIARES E ASSENTADOS DE ARAGOIANIA E REGIOES',
    cnpj: '55.487.408/0001-21',
    endereco: 'R RIO CLARO, CHACARA 21, S/N, LOTE 17, CAMPO DOURADO, 75.330-000',
    cidade: 'Aragoiânia',
    estado: 'Goiás'
  },
  {
    id: 11,
    attribute: 'complang',
    displayName: 'COMPLANG',
    nome: 'COOPERATIVA MISTA DOS AGRICULTORES FAMILIARES PLANTIO DE GOIAS',
    cnpj: '63.901.913/0001-07',
    endereco: 'R NATAL BOLENTINO PC - 2356, S/N, QUADRA4 LOTE 11, NOSSA SENHORA DO CARMO, 75.470-000',
    cidade: 'Nova Veneza',
    estado: 'Goiás'
  },
  {
    id: 12,
    attribute: 'cooper-br',
    displayName: 'COOPER-BR',
    nome: 'COOPERATIVA MISTA DOS AGRICULTORES FAMILIARES BRASILEIROS',
    cnpj: '63.744.054/0001-81',
    endereco: 'AV CARLOS DE PINA, S/N, QUADRA 17 LOTE 02, SETOR CENTRAL, 75.165-000',
    cidade: 'Ouro Verde de Goiás',
    estado: 'Goiás'
  }
]