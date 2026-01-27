import { NextPage } from 'next';
import {  Container, OrderHeader, OrderItems } from "./orderInfo";
import Modal from 'react-modal'
import { pedidoService } from '../../../../services';
import { useQuery } from 'react-query';
import { Textarea } from '@nextui-org/react';
import { useEffect } from 'react';

interface Pedido {
  id: number;
  endereco: string;
  dataCriacao: number;
  dataEntrega?: number;
  valorTotal: number;
  status: string;
  observacao?: string;
  obsCancelamento: string;
  nome: string;
  cidade: string;
  estado: string;
  telefone: string;
}

interface ProductsProps {
  itemPedidoId: string;
  produtoId?: string;
  nome: string;
  unidade: string;
  precoVenda: number;
  quantidade: string;
  total: number;
}

interface OrderInfoModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  pedido: Pedido;
}

const OrderInfo: NextPage<OrderInfoModalProps> = ({ isOpen, onRequestClose, pedido }) => {
  let products: Array<ProductsProps> = [];
  const { data, error, isLoading, isError, isSuccess } = useQuery(['produtosNoPedido', pedido.id], () => pedidoService.listarProdutosByPedidoId(pedido.id))

  if (isSuccess) {
    products = data.produtos
  }

  let obs: string = '';

  useEffect(() => {
    if (pedido.status === 'CANCELADO') {
      obs = `MOTIVO CANCELAMENTO: ${pedido.obsCancelamento as string}`
    } else {
      obs = pedido.observacao as string
    }
  }, [pedido])

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <OrderHeader>
          {pedido ? (
            <>
              <h1>Informações do Pedido</h1>
              <div>
                <p>ID: {pedido.id}</p> -
                <p>Colégio: {pedido.nome}</p> -
                <p>Cidade/Estado: {`${pedido.cidade}/${pedido.estado}`}</p> -
                <p>Data Entrega: {pedido.dataEntrega ? new Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'}).format(new Date(pedido.dataEntrega)) : 'Sem Data'}</p>
              </div>
            </>
          ) : (
            <h1>Não foi possível recuperar informações do pedido.</h1>
          )}
        </OrderHeader>
        <OrderItems showScrollBar={products.length > 6}>
          {pedido ? (
            <>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Unidade</th>
                    <th>Quantidade</th>
                    <th>Total</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    products.map(product => {
                      return (
                        <tr key={String(product.itemPedidoId)}>
                          <td>{product.itemPedidoId}</td>
                          <td>{product.nome}</td>
                          <td>
                            {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(product.precoVenda)}
                          </td>
                          <td>{product.unidade}</td>
                          <td>{product.quantidade.replaceAll('.',',')}</td>
                          <td>
                            {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(product.total)}
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
              <h3>
                Valor Total: {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(pedido.valorTotal)}
              </h3>
            </>
          ) : (
            <h1>Não foi possível recuperar informações dos produtos no pedido.</h1>
          )}
          <Textarea readOnly initialValue={pedido.status === 'CANCELADO' ? pedido.obsCancelamento : pedido.observacao} css={{ mt: "1.5rem", w: "900px" }} />
        </OrderItems>
      </Container>
    </Modal>

  )
}

export default OrderInfo
