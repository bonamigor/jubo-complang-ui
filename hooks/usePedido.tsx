import { createContext, ReactNode, useContext, useState, useEffect } from 'react';
import { pedidoService } from '../services/index';

interface Pedido {
  id: number;
  status: string;
  dataCriacao: string;
  dataConfirmacao?: string;
  dataCancelamento?: string;
  dataEntrega?: string;
  valorTotal?: number,
  clienteId: number;
}

interface PedidoProviderProps {
  children: ReactNode;
}

interface PedidoContextData {
  pedido: Pedido;
  receivePedido: (pedido: Pedido) => Promise<void>;
  setPedidoData: (pedidoId: number) => Promise<void>;
  cleanPedido: () => Promise<void>;
}

const PedidoContext = createContext<PedidoContextData>({} as PedidoContextData);

export function PedidoProvider({ children }: PedidoProviderProps) {
  const [pedido, setPedido] = useState<Pedido>({ id: 0, status: '', dataCriacao: '', dataConfirmacao: '', dataCancelamento: '', dataEntrega: '', valorTotal: 0, clienteId: 0});

  async function receivePedido(pedido: Pedido) {
    setPedido(pedido);
  }

  async function setPedidoData(pedidoId: number) {
    try {
      const { data, errors } = await pedidoService.listarPedidoById(pedidoId)

      if (!errors) {
        setPedido(data.pedido[0])
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function cleanPedido() {
    setPedido({ id: 0, status: '', dataCriacao: '', dataConfirmacao: '', dataCancelamento: '', dataEntrega: '', valorTotal: 0, clienteId: 0})
  }

  return (
    <PedidoContext.Provider value={{ pedido, receivePedido, setPedidoData, cleanPedido }}>
      { children }
    </PedidoContext.Provider>
  );
}

export function usePedido() {
  const context = useContext(PedidoContext);

  return context;
}
