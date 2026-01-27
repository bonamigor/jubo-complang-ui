import { NextPage } from 'next'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import Modal from 'react-modal'
import { EstanteProdutoProps } from '../../../pages/admin/cadastro/estante/[id]/produtos/index.page'
import { estanteService } from '../../../services'
import { Buttons, Container, Content } from './updateStatus'

interface UpdateStatusModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  produto?: EstanteProdutoProps;
  estanteId: number;
  statusEstante?: number
}

const UpdateStatus: NextPage<UpdateStatusModalProps> = ({ isOpen, onRequestClose, produto, estanteId, statusEstante }) => {
  const router = useRouter()
   

  console.log(produto)

  const handleUpdateStatus = async (produto?: EstanteProdutoProps) => {
    if (produto) {
      const ativo = produto.ativo === 1 ? 0 : 1;
      const { data, errors } = await estanteService.atualizarStatusDoProdutoNaEstante({ ativo, estanteId, produtoId: produto.produtoId })

      if (!errors) {
        onRequestClose()
        toast.success(data.message ?? 'Status do produto atualizado com sucesso!')
        router.reload()
      } else {
        toast.error(errors.statusText ?? 'Erro ao alterar status do produto.')
      }
    } 
    
    const { data, estanteErrors } = await estanteService.alterarEstadoDaEstante(estanteId, statusEstante as number)

    if (!estanteErrors) {
      onRequestClose()
      toast.success(data.message ?? 'Estante desativada com sucesso!')
      router.reload()
    } else {
      toast.error(estanteErrors.statusText ?? 'Erro ao alterar status do produto.')
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
            <h2>Alterar STATUS {produto ? 'do Produto.' : 'da Estante.'}</h2>
            <div>
              {produto && <label>Deseja atualizar o status deste produto para &apos;{produto.ativo === 1 ? 'DESATIVADO' : 'ATIVADO'}&apos;?</label>}
              {!produto && <label>Deseja atualizar o status desta estante?</label>}
            </div>
            <Buttons>
              <button type='button' onClick={() => handleUpdateStatus(produto)}>Sim</button>
              <button type='button' onClick={() => onRequestClose()}>Não</button>
            </Buttons>
          </Content>
        </Container>
    </Modal>

  )
}

export default UpdateStatus
