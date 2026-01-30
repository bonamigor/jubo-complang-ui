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