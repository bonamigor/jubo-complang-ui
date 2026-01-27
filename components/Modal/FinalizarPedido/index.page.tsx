import { NextPage } from 'next';
import { Container, Content, Buttons } from './finalizarPedido';
import Modal from 'react-modal'
import toast from 'react-hot-toast';
import { pedidoService } from '../../../services';
import { PedidosProps } from '../../../services/pedido';

interface FinalizarPedidoModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  pedido: PedidosProps;
}

const FinalizarPedido: NextPage<FinalizarPedidoModalProps> = ({ isOpen, onRequestClose, pedido }) => {

  const handleFinalizarPedido = async (pedido: PedidosProps) => {
    const { data, errors } = await pedidoService.finalizarPedido(pedido.id)

    if (!errors) {
      onRequestClose()
      toast.success(data.message ?? 'Pedido finalizado com sucesso!')
    } else {
      toast.error(errors.statusText ?? 'Erro ao finalizar pedido.')
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
          <Content>
            <h2>FINALIZAR PEDIDO</h2>
            <p>Clique em &apos;Confirmar&apos; para finalizar este pedido</p>
            <p>ou em &apos;Cancelar&apos; para fechar a tela.</p>
            <Buttons>
              <button type='button' onClick={() => handleFinalizarPedido(pedido)}>Confirmar</button>
              <button type='button' className='no' onClick={onRequestClose}>Cancelar</button>
            </Buttons>
          </Content>
        </Container>
    </Modal>

  )
}

export default FinalizarPedido
