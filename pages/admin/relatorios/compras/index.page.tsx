import { NextPage } from "next";
import { useState } from "react";

import { Buttons, Container, Content, Dates, EmptyTable, GeneratePdfButton, SearchButton, TableContainer } from './compras';

import { useMutation } from 'react-query';
import { produtoService } from "../../../../services";
import toast from 'react-hot-toast';

import InputMask from "react-input-mask";

import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';
import { format } from "date-fns";
import Head from "next/head";

interface Produtos {
  nome: string;
  unidadeMedida: string;
  quantidade: string;
}

const Compras: NextPage = () => {
  const [dataInicial, setDataInicial] = useState('')
  const [dataFinal, setDataFinal] = useState('')
  const [produtos, setProdutos] = useState<Produtos[]>([])

  const mutation = useMutation(produtoService.listarProdutosParaComprar)

  const showDates = async () => {
    const dataInicialTimestamp = new Date(dataInicial.split('/').reverse().join('-')).getTime()
    const dataFinalTimestamp = new Date(dataFinal.split('/').reverse().join('-')).getTime()
    
    await mutation.mutateAsync({ dataInicial: dataInicialTimestamp, dataFinal: dataFinalTimestamp }, {
      onSuccess: async (data) => {
        setProdutos(data.produtos)
        setDataInicial('')
        setDataFinal('')
      },
      onError: async (error) => {
        toast.error('Erro ao pesquisar os produtos nessa data.')
        console.error(error)
      }
    })
  }

  const generateProductsPdf = async () => {
    const doc = new jsPDF()

    autoTable(doc, { html: '#produtos' })

    const data = format(new Date(), 'dd-MM-yyyy')

    doc.save(`produtos-${data}`)
  }

  return (
    <>
      <Head>
        <title>Relatório de Compras</title>
      </Head>
      <Container>
        <Content>
          <h1>Relatório de Compras</h1>
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
          </Dates>
          <Buttons>
            <SearchButton type="button" onClick={() => {showDates()}}>Pesquisar</SearchButton>
            {produtos.length > 1 && <GeneratePdfButton type="button" onClick={() => {generateProductsPdf()}}>Gerar PDF</GeneratePdfButton>}
          </Buttons>
        </Content>
        {mutation.isLoading && <h1>Carregando produtos...</h1>}

        {produtos.length > 1 ? (
          <TableContainer>
            <table id="produtos">
              <thead>
                <tr>
                  <th>Nome do Produto</th>
                  <th>Unidade de Medida</th>
                  <th>Quantidade p/ compra</th>
                </tr>
              </thead>

              <tbody>
                {produtos.map(produto => {
                    return (
                      <tr key={produto.nome}>
                        <td>{produto.nome}</td>
                        <td>{produto.unidadeMedida}</td>
                        <td>{produto.quantidade.replaceAll('.',',')}</td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </TableContainer>
        ) : (
          <EmptyTable>
            <h1>Não há produtos para comprar nessa data.<br />Ou você não pesquisou ainda...</h1>
          </EmptyTable>
        )}
      </Container>
    </>
  )
}

export default Compras