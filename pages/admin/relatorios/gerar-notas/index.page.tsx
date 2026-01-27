import { NextPage } from 'next';
import { Container, Content } from './gerarNotas';
import { useState } from 'react';
import { pedidoService } from '../../../../services/index';
import toast from 'react-hot-toast';
import Head from 'next/head';
import { EmpresaProps, empresas } from '../../../../utils/empresas';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import format from 'date-fns/format';

export interface PedidosProps {
  id: number;
  dataCriacao: number;
  dataEntrega: number;
  valorTotal: number;
  status: string;
  observacao: string;
  obsCancelamento: string;
  nome: string;
  endereco: string;
  cidade: string;
  estado: string;
  telefone: string;
  empresa?: number;
  isFinalizado: number;
}

interface ProductsProps {
  estanteId: string;
  itemPedidoId?: string;
  produtoId?: string;
  nome: string;
  unidade: string;
  unidades: string;
  quantidade: string;
  precoVenda: string;
  total: string;
}

const Pedidos: NextPage = () => {
  const [dadosNotas, setDadosNotas] = useState(''); 
  const [caminho, setCaminho] = useState(''); 
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const [pedido, setPedido] = useState<PedidosProps>({ id: 0, dataCriacao: 0, dataEntrega: 0, valorTotal: 0, status: '', observacao: '', obsCancelamento: '', nome: '', endereco: '', cidade: '', estado: '', telefone: '', isFinalizado: 0 })

  const generatePdf = ({ pedido, idEmpresa, products, caminho }: { pedido: PedidosProps, idEmpresa: number, products: Array<ProductsProps>, caminho: string }) => {
    const doc = new jsPDF('l')

    products.forEach(product => {
      product.unidades = ''
      delete product['produtoId'];
      delete product['itemPedidoId'];
    })

    const formatedPrices = products.map(produto => {
      produto.unidades = ''
      produto.quantidade = new Intl.NumberFormat('pt-BR', {
        style: 'decimal',
        minimumFractionDigits: 4
      }).format(Number(produto.quantidade))
      produto.precoVenda = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(Number(produto.precoVenda))
      produto.total = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(Number(produto.total))
      return { nome: produto.nome, unidade: produto.unidade, unidades: produto.unidades, quantidade: produto.quantidade, precoVenda: produto.precoVenda, total: produto.total }
    })

    const newProdutosArray = formatedPrices.map(produto => {
      return Object.values(produto)
    })

    let pageNumber = doc.internal.pages.length - 1

    const empresa: EmpresaProps = empresas.filter(empresa => empresa.id === idEmpresa)[0]

    doc.text(`${empresa.nome}`, 14, 15)
    doc.text(`${empresa.nome}`, 154, 15)

    doc.setFontSize(10)
    doc.text(`CNPJ: ${empresa.cnpj}`, 14, 20)
    doc.text(`CNPJ: ${empresa.cnpj}`, 154, 20)

    doc.text(`Endereço: ${empresa.endereco}`, 14, 25)
    doc.text(`Endereço: ${empresa.endereco}`, 154, 25)

    doc.text(`Cidade / Estado: ${empresa.cidade} / ${empresa.estado}`, 14, 30)
    doc.text(`Cidade / Estado: ${empresa.cidade} / ${empresa.estado}`, 154, 30)

    doc.text('____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________', 0, 32.5)

    doc.text(`Pedido ${pedido.id}`, 14, 40)
    doc.text(`Pedido ${pedido.id}`, 154, 40)

    doc.setFontSize(10)
    doc.text(`Cliente: ${pedido.nome}`, 14, 45)
    doc.text(`Cliente: ${pedido.nome}`, 154, 45)

    doc.text(`Endereço: ${pedido.endereco}`, 14, 50)
    doc.text(`Endereço: ${pedido.endereco}`, 154, 50)

    doc.text(`Cidade/Estado: ${pedido.cidade} / ${pedido.estado}`, 14, 55)
    doc.text(`Cidade/Estado: ${pedido.cidade} / ${pedido.estado}`, 154, 55)

    doc.text(`Telefone: ${pedido.telefone}`, 14, 60)
    doc.text(`Telefone: ${pedido.telefone}`, 154, 60)

    const dataEntrega: string = pedido.dataEntrega ? format(new Date(pedido.dataEntrega), 'dd/MM/yyyy') : 'Sem Data de Entrega'

    doc.text(`Data de Entrega: ${dataEntrega}`, 14, 65)
    doc.text(`Data de Entrega: ${dataEntrega}`, 154, 65)

    let columns = [
      { header: 'Nome', dataKey: 'nome' },
      { header: 'Med', dataKey: 'unidade' },
      { header: 'Und', dataKey: 'unidades' },
      { header: 'Qtde', dataKey: 'quantidade' },
      { header: 'Preço', dataKey: 'preco' },
      { header: 'Total', dataKey: 'total' }
    ]

    autoTable(doc, {
      head: [['Nome', 'Med', 'Und', 'Qtde', 'Preço', 'Total']],
      headStyles: { fillColor: [255, 255, 255], textColor: 'black ' },
      columns: columns,
      body: newProdutosArray,
      theme: 'grid',
      startY: 70,
      tableWidth: 130,
      bodyStyles: { lineColor: [0, 0, 0], lineWidth: 0.5 },
      margin: { right: 125, bottom: 15 },
      showHead: 'firstPage',
      styles: { overflow: 'visible', fontSize: 8 },
      columnStyles: { 
        'nome': { overflow: 'ellipsize', cellWidth: 'auto' },
        'quantidade': { halign: 'right' },
        'preco': { halign: 'right' },
        'total': { halign: 'right' }
      },
      pageBreak: 'auto'
    })

    // doc.setPage(pageNumber)

    autoTable(doc, {
      head: [['Nome', 'Med', 'Und', 'Qtde', 'Preço', 'Total']],
      headStyles: { fillColor: [255, 255, 255], textColor: 'black ' },
      columns: columns,
      body: newProdutosArray,
      theme: 'grid',
      startY: 70,
      tableWidth: 130,
      bodyStyles: { lineColor: [0, 0, 0], lineWidth: 0.5 },
      margin: { left: 153, bottom: 15 },
      showHead: 'firstPage',
      styles: { overflow: 'visible', fontSize: 8 },
      columnStyles: { 
        'nome': { overflow: 'ellipsize', cellWidth: 'auto' },
        'quantidade': { halign: 'right' },
        'preco': { halign: 'right' },
        'total': { halign: 'right' }
      },
      pageBreak: 'auto'
    })

    const numberOfPages = (doc as any).internal.getNumberOfPages();
    const pageSize = doc.internal.pageSize
    let pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight()
    let finalY = (doc as any).lastAutoTable.finalY;
    const valorTotalFormatado = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(Number(pedido.valorTotal))

    if (finalY <= 180) {
      doc.text(`Valor Total: `, 14, finalY + 5)
      doc.text(`${valorTotalFormatado}`, 125, finalY + 5)

      doc.text(`Valor Total: `, 154, finalY + 5)
      doc.text(`${valorTotalFormatado}`, 264, finalY + 5)

      doc.text('____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________', 0, finalY + 8)

      const linhas1: Array<string> = [];

      let obs: string;

      if (pedido.status === 'CANCELADO') {
        obs = `MOTIVO CANCELAMENTO: ${pedido.obsCancelamento as string}`
      } else {
        obs = pedido.observacao
      }

      if (obs) {
        if (obs.length > 58) {
          let contadorInicial: number = 0;
          let contadorFinal: number = 58;
          const numeroDeLinhas = obs.length / 58;
          for (let i = 0; i <= numeroDeLinhas; i++) {
            linhas1.push(obs.substring(contadorInicial, contadorFinal))
            contadorInicial = contadorInicial + 58
            contadorFinal = contadorFinal + 58
          }
          doc.text('Observação: ', 14, finalY + 15)
          doc.text('Observação: ', 154, finalY + 15)
          doc.text(linhas1, 35, finalY + 15)
          doc.text(linhas1, 175, finalY + 15)
        } else {
          doc.text(`Observação: ${obs ?? '_______________________________________________________'}`, 14, finalY + 20)
          doc.text(`Observação: ${obs ?? '_______________________________________________________'}`, 154, finalY + 20)
        }
      } else {
        doc.text(`Observação: ${obs ?? '_______________________________________________________'}`, 14, finalY + 20)
        doc.text(`Observação: ${obs ?? '_______________________________________________________'}`, 154, finalY + 20)
      }

      doc.text(`Assinatura: ________________________________________________________`, 14, finalY + 30)
      doc.text(`Assinatura: ________________________________________________________`, 154, finalY + 30)

      let pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth()
      doc.text(pedido.nome, pageWidth / 4, finalY + 35, { align: 'center' })
      doc.text(pedido.nome, pageWidth - (pageWidth / 4), finalY + 35, { align: 'center' })
    }

    if (finalY >= 180) {
      doc.addPage()

      doc.setPage(numberOfPages + 1)

      doc.text(`Valor Total: `, 14, 20)
      doc.text(`${valorTotalFormatado}`, 125, 20)

      doc.text(`Valor Total: `, 154, 20)
      doc.text(`${valorTotalFormatado}`, 265, 20)

      doc.text('____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________', 0, 23)

      const linhas1: Array<string> = [];
      const obs: string = pedido.observacao

      if (obs) {
        if (obs.length > 58) {
          let contadorInicial: number = 0;
          let contadorFinal: number = 58;
          const numeroDeLinhas = obs.length / 58;
          for (let i = 0; i <= numeroDeLinhas; i++) {
            linhas1.push(obs.substring(contadorInicial, contadorFinal))
            contadorInicial = contadorInicial + 58
            contadorFinal = contadorFinal + 58
          }
          doc.text('Observação: ', 14, 30)
          doc.text('Observação: ', 154, 30)
          doc.text(linhas1, 35, 30)
          doc.text(linhas1, 175, 30)
        } else {
          doc.text(`Observação: ${obs ?? '_______________________________________________________'}`, 14, 35)
          doc.text(`Observação: ${obs ?? '_______________________________________________________'}`, 154, 35)
        }
      } else {
        doc.text(`Observação: ${obs ?? '_______________________________________________________'}`, 14, 35)
        doc.text(`Observação: ${obs ?? '_______________________________________________________'}`, 154, 35)
      }

      doc.text(`Assinatura: ________________________________________________________`, 14, 45)
      doc.text(`Assinatura: ________________________________________________________`, 154, 45)

      let pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth()
      doc.text(pedido.nome, pageWidth / 4, finalY + 45, { align: 'center' })
      doc.text(pedido.nome, pageWidth - (pageWidth / 4), finalY + 45, { align: 'center' })
    }

    const numberOfPagesAtt = (doc as any).internal.getNumberOfPages();

    for (let i = 1; i <= numberOfPagesAtt; i++) {
      doc.setPage(i);
      if (i > 1) {
        doc.text(`Pedido ${pedido.id}`, 14, 10)
        doc.text(`Pedido ${pedido.id}`, 154, 10)
      }
      doc.text(`Pagina ${i}/${numberOfPagesAtt}`, 127, 10)
      doc.text(`Pagina ${i}/${numberOfPagesAtt}`, 266, 10)
    }

    const caminhoDoArquivo: string = caminho.replaceAll('\\', '\\\\') + `\\pedido-${pedido.id}.pdf`.trim()

    doc.save(caminhoDoArquivo)
  }

  const baixarNotas = async () => {
    const notas: string[] = dadosNotas.split(';')

    if (notas.length <= 0) {
      toast.error('É necessário informar os dados de no mínimo 1 pedido! Verifique.')
      return false;
    }

    if (!caminho) {
      toast.error('É necessário informar o caminho para salvar as notas! Verifique.')
      return false;
    }

    const novasNotas = notas.filter(nota => nota.length > 0)

    for (const nota of novasNotas) {
      if (nota === undefined) {
        return;
      }
      const idEmpresa: number = Number(nota.split(',')[0]);

      console.log(`ID Empresa: ${idEmpresa}`)
      const idPedido: number = Number(nota.split(',')[1].split(';')[0]);

      if (!idPedido || !idEmpresa) {
        toast.error(`Foram informados pedido ou empresa errados... verifique. ID Pedido: ${idPedido}; ID Empresa: ${idEmpresa};`)
        return false;
      }

      const { data: pedidoData, errors: pedidoErrors } = await pedidoService.listarPedidoById(idPedido);

      if (pedidoErrors) {
        toast.error(`Erro ao recuperar pedido ${idPedido}`);
      }

      setPedido(pedidoData.pedido[0])
      
      const { data: productsData, errors: productsErrors } = await pedidoService.listarProdutosByPedidoIdOld(Number(idPedido))

      if (productsErrors) {
        toast.error(`Erro ao recuperar os produtos do pedido ${idPedido} para montar a nota.`);
        return false;
      }
      
      setProducts(productsData.produtos)

      generatePdf({ pedido: pedidoData.pedido[0], idEmpresa, products: productsData.produtos, caminho });
    }
  }

  const teste = async () => {
    alert(`
      Caminho informado: ${caminho};
      Notinhas informadas: ${dadosNotas}
    `)
  }

  return (
    <>
      <Head>
        <title>Gerar Notas</title>
      </Head>
      <Container>
        <Content>
          <header>
            <h1>Gerar Notas</h1>
            <p>Baixe várias notas apenas informandos os dados abaixo e clicando em 'Baixar Notas'.</p>
          </header>
          <section>
            <input type="text" id="path" placeholder="Digite o caminho para salvar as notas" 
              value={caminho} onChange={event => {setCaminho(event.target.value)}} />
            <textarea 
              name="dadosNotas" 
              id="dadosNotas" 
              placeholder="Digite aqui os dados no formato idPedido,idEmpresa;idPedido,idEmpresa;idPedido,idEmpresa;idPedido,idEmpresa; e assim por diante..." onChange={event => {setDadosNotas(event.target.value)}}
            >
            </textarea>
            <button onClick={baixarNotas}>
              Baixar Notas
            </button>
          </section>
        </Content>
      </Container>
    </>
  )
}

export default Pedidos