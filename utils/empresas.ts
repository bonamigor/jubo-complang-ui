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
    attribute: 'comercial-lima',
    displayName: 'Comercial Lima',
    nome: 'CL ALIMENTOS LTDA',
    cnpj: '35.137.005/0001-45',
    endereco: 'R DAS ORQUIDEAS, 1008, QUADRA122 LOTE 02, PRQ OESTE INDUSTRIAL, 74.375-210',
    cidade: 'Goiânia',
    estado: 'Goiás'
  },
  {
    id: 2,
    attribute: 'cooperago',
    displayName: 'COOPERAGO',
    nome: 'COOPERAGO',
    cnpj: '55.487.408/0001-21',
    endereco: 'R RIO CLARO, CHACARA 21, S/N, LOTE 17, CAMPO DOURADO, 75.330-000',
    cidade: 'Aragoiânia',
    estado: 'Goiás'
  },
  {
    id: 3,
    attribute: 'complang',
    displayName: 'COMPLANG',
    nome: 'COMPLANG',
    cnpj: '63.901.913/0001-07',
    endereco: 'R NATAL BOLENTINO PC - 2356, S/N, QUADRA4 LOTE 11, NOSSA SENHORA DO CARMO, 75.470-000',
    cidade: 'Nova Veneza',
    estado: 'Goiás'
  },
  {
    id: 4,
    attribute: 'cooper-br',
    displayName: 'COOPER-BR',
    nome: 'COOPER-BR',
    cnpj: '63.744.054/0001-81',
    endereco: 'AV CARLOS DE PINA, S/N, QUADRA 17 LOTE 02, SETOR CENTRAL, 75.165-000',
    cidade: 'Ouro Verde de Goiás',
    estado: 'Goiás'
  },
  {
    id: 5,
    attribute: 'coopassen',
    displayName: 'COOPASSEN',
    nome: 'COOPASSEN',
    cnpj: '36.070.538/0001-10',
    endereco: 'R. Padre Alcides Spolidoro, S/N, Q. I4 L. 11/12, Dist Ind Santa Edwiges',
    cidade: 'Senador Canedo',
    estado: 'Goiás'
  },
  {
    id: 6,
    attribute: 'compaf',
    displayName: 'COMPAF',
    nome: 'COMPAF',
    cnpj: '29.119.413/0001-71',
    endereco: 'ROD GO-320 KM 10.5 n 100, LT. 11 QD. 03, RES BOA ESPERANCA',
    cidade: 'Goiatuba',
    estado: 'Goiás'
  },
]