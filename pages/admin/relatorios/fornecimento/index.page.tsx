import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"
import { NextPage } from "next"
import Head from "next/head"
import { useState } from "react"
import toast from "react-hot-toast"
import InputMask from "react-input-mask"
import { useMutation } from "react-query"
import { pedidoService } from "../../../../services"
import { Buttons, Container, Content, Dates, EmptyTable, GeneratePdfButton, SearchButton, TableContainer } from "./fornecimento"

interface Itens {
  itemPedidoId?: number;
  produtoId?: number;
  nome: string;
  unidade: string;
  precoVenda: string;
  quantidade: string;
  total: string;
}
interface PedidoProps {
  id: number;
  cliente: string;
  dataCriacao: string;
  status: string;
  dataEntrega: string;
  total: string;
  itens: Array<Itens>;
}

const Fornecimento: NextPage = () => {
  const [dataInicial, setDataInicial] = useState('')
  const [dataFinal, setDataFinal] = useState('')
  const [pedidos, setPedidos] = useState<PedidoProps[]>([])
  const [valorTotal, setValorTotal] = useState(0)
  const [isAnalitico, setIsAnalitico] = useState("false")

  const mutation = useMutation(pedidoService.listarPedidosEntreDatas)

  const handleSearchOrders = async () => {
    const dataInicialTimestamp = new Date(dataInicial.split('/').reverse().join('-')).getTime()
    const dataFinalTimestamp = new Date(dataFinal.split('/').reverse().join('-')).getTime()

    await mutation.mutateAsync({ dataInicial: dataInicialTimestamp, dataFinal: dataFinalTimestamp }, {
      onSuccess: async (data) => {
        setPedidos(data.vendas)
        setValorTotal(data.total)
        console.log(data)
      },
      onError: async (error) => {
        toast.error('Erro ao pesquisar os produtos nessa data.')
        console.error(error)
      }
    })
  }

  const handleCleanFields = () => {
    setDataInicial('')
    setDataFinal('')
  }

  const generateProductsPdf = async () => {
    const doc = new jsPDF()
    let finalY = (doc as any).lastAutoTable.finalY;

    if (isAnalitico === "true") {  
      for (let i = 0; i <= pedidos.length - 1; i++) {

        let columns = [
          { header: 'Cliente', dataKey: 'cliente' },
          { header: 'Data Criacao', dataKey: 'dataCriacao' },
          { header: 'Preço', dataKey: 'preco' },
          { header: 'Qtde', dataKey: 'quantidade' },
          { header: 'Total', dataKey: 'total' }
        ]

        pedidos[i].itens.forEach(item => {
          delete item['produtoId'];
          delete item['itemPedidoId'];
        })

        const produtosDaVenda = pedidos[i].itens.map(item => {
          item.quantidade = String(Number(item.quantidade).toFixed(4)).replaceAll('.', ',')
          item.precoVenda = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(Number(item.precoVenda))
          item.total  = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(Number(item.total))
          return Object.values(item)
        })

        if (i === 0) {
          doc.setFontSize(11)
          doc.text(`Pedido: ${pedidos[i].id} / Cliente: ${pedidos[i].cliente}`, 5, 10)
          doc.text(`Data Entrega: ${new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(new Date(pedidos[i].dataEntrega))} / Valor Total: ${new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
          }).format(Number(pedidos[i].total))}`, 5, 15)
        doc.text('_____________________________________________________________________________________________', 5, 18)

          // array com produtos      
          autoTable(doc, {
            head: [['Nome', 'Und', 'Preço', 'Qtde', 'Total']],
            headStyles: { fillColor: [255, 255, 255], textColor: 'black ' },
            columns: columns,
            body: produtosDaVenda,
            theme: 'grid',
            startY: 20,
            tableWidth: 200,
            margin: { left: 5, bottom: 15 },
            showHead: 'firstPage',
            styles: { overflow: 'visible', fontSize: 8 },
            columnStyles: { 'nome': { overflow: 'ellipsize', cellWidth: 'auto' } },
            pageBreak: 'auto'
          })
        } else {
          finalY = (doc as any).lastAutoTable.finalY;
          const numberOfPages = (doc as any).internal.getNumberOfPages();
  
          if (finalY >= 250) {
            doc.addPage()
  
            doc.setPage(numberOfPages + 1)
  
            doc.text(`Pedido: ${pedidos[i].id} / Cliente: ${pedidos[i].cliente}`, 5, 10)
            doc.text(`Data Entrega: ${new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(new Date(pedidos[i].dataEntrega))} / Valor Total: ${new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(Number(pedidos[i].total))}`, 5, 15)
          doc.text('_____________________________________________________________________________________________', 5, 18)
  
            // array com produtos do pedido
            autoTable(doc, {
              head: [['Nome', 'Und', 'Preço', 'Qtde', 'Total']],
              headStyles: { fillColor: [255, 255, 255], textColor: 'black ' },
              columns: columns,
              body: produtosDaVenda,
              theme: 'grid',
              startY: 20,
              tableWidth: 200,
              margin: { left: 5, bottom: 15 },
              showHead: 'firstPage',
              styles: { overflow: 'visible', fontSize: 8 },
              columnStyles: { 'nome': { overflow: 'ellipsize', cellWidth: 'auto' } },
              pageBreak: 'auto'
            })
          } else {
            doc.text(`Pedido: ${pedidos[i].id} / Cliente: ${pedidos[i].cliente}`, 5, finalY + 10)
            doc.text(`Data Entrega: ${new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(new Date(pedidos[i].dataEntrega))} / Valor Total: ${new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(Number(pedidos[i].total))}`, 5, finalY + 15)
          doc.text('_____________________________________________________________________________________________', 5, finalY + 18)
  
            // array co produtos do pedido
            autoTable(doc, {
              head: [['Nome', 'Und', 'Preço', 'Qtde', 'Total']],
              headStyles: { fillColor: [255, 255, 255], textColor: 'black ' },
              columns: columns,
              body: produtosDaVenda,
              theme: 'grid',
              startY: finalY + 20,
              tableWidth: 200,
              margin: { left: 5, bottom: 15 },
              showHead: 'firstPage',
              styles: { overflow: 'visible', fontSize: 8 },
              columnStyles: { 'nome': { overflow: 'ellipsize', cellWidth: 'auto' } },
              pageBreak: 'auto'
            })
          }
        }

        
      }

      finalY = (doc as any).lastAutoTable.finalY;

      doc.setFontSize(14)
      doc.text(`Valor Total dos Pedidos: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(valorTotal))}`, 5, finalY + 25)
    } else {
      autoTable(doc, { html: '#pedidos' })

      doc.text(`Valor Total: `, 14, finalY + 5)
      doc.text(`${new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(Number(valorTotal))}`, 150, finalY + 5)
    }

    const dataInicialFormatada = dataInicial.split('/').reverse().join('-')
    const dataFinalFormatada = dataFinal.split('/').reverse().join('-')

    doc.save(`fornecimento-${dataInicialFormatada}-a-${dataFinalFormatada}`)
  }
  
  return (
    <>
      <Head>
        <title>Relatório de Fornecimento</title>
      </Head>
      <Container>
        <Content>
          <h1>Relatório de Fornecimento</h1>
          <p>Selecione um período entre datas para ter o relatório.</p>
          <Dates>
            <div>
              <label>Data Inicial</label>
              <InputMask mask="99/99/9999" onChange={event => setDataInicial(event.target.value)} value={dataInicial} />
            </div>
            <div>
              <label>Data Final</label>
              <InputMask mask="99/99/9999" onChange={event => setDataFinal(event.target.value)} value={dataFinal} />
            </div>
            <div>
              <SearchButton type="button" onClick={() => {handleSearchOrders()}}>Pesquisar</SearchButton>
            </div>
          </Dates>
          <Buttons>
            {dataInicial.length > 0 && <SearchButton type="button" onClick={() => {handleCleanFields()}}>Limpar Campos</SearchButton>}
            {pedidos.length > 0 && <GeneratePdfButton type="button" onClick={() => {generateProductsPdf()}}>Gerar PDF</GeneratePdfButton>}
            {pedidos.length > 0 && 
            <>
              <label htmlFor="isAnalitico">Analitico?</label>
              <input type="checkbox" name="isAnalitico" id="isAnalitico" value={isAnalitico} onChange={() => {isAnalitico === "false" ? setIsAnalitico("true") : setIsAnalitico("false")}} />
            </>}
          </Buttons>
        </Content>
        {mutation.isLoading && <h1>Carregando Pedidos</h1>}

        {pedidos.length > 0 ? (
          <TableContainer>
          <table id="pedidos">
            <thead>
              <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Data Criacao</th>
                <th>Status</th>
                <th>Data Entrega</th>
                <th>Valor Total</th>
              </tr>
            </thead>

            <tbody>
              {pedidos.map((pedido: PedidoProps) => {
                  return (
                    <tr key={pedido.id}>
                      <td>{pedido.id}</td>
                      <td>{pedido.cliente}</td>
                      <td>{ new Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'})
                                  .format(new Date(pedido.dataCriacao)) 
                              }</td>
                      <td>{pedido.status}</td>
                      <td>
                        {pedido.dataEntrega ? 
                          new Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'}).format(new Date(pedido.dataEntrega)) : 
                          'Sem data'
                        }
                      </td>
                      <td>{String(Number(pedido.total)).replaceAll('.', ',')}</td>
                    </tr>
                  )
                })}
            </tbody>
          </table>

          <h1>Valor Total: {new Intl.NumberFormat(
            'pt-BR', 
            { style: 'currency', currency: 'BRL'})
            .format(Number(valorTotal))}</h1>
        </TableContainer>
        ) : (
          <EmptyTable>
            <h1>Não há pedidos entre essas datas.<br />Ou você não pesquisou ainda...</h1>
          </EmptyTable>
        )}
      </Container>
    </>
  )
}

export default Fornecimento