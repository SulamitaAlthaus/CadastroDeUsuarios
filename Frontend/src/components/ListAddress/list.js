import React, {useState} from 'react';
import * as S from './styles';
import api from '../../services/api'
import EditAddress from '../EditAddress'

function ListAddress({id, rua, numero, complemento, cep, cidade, estado, idUser }) {
  const [isModalVisible, setIsModalVisible] = useState()


  async function deleteUser() {
    const res = window.confirm('Deseja realmente remover o endereço?')
    if (res == true) {
      await api.delete(`/admin/address/delete/${id}`)
        .then(
          alert("O endereço foi deletado"),
          window.location.reload()
        )
    }
  }


  return (
    <S.Data>
      <S.Left>
        <S.Text><strong>Rua: </strong>{rua}</S.Text>
        <S.Text><strong>Número:</strong> {numero}</S.Text>
        <S.Text><strong>Complemento:</strong> {complemento}</S.Text>
        <S.Text><strong>CEP:</strong> {cep}</S.Text>
        <S.Text><strong>Cidade:</strong> {cidade}</S.Text>
        <S.Text><strong>Estado: </strong>{estado}</S.Text>
      </S.Left>
      <S.Right>
        <S.Edit onClick={() => setIsModalVisible("edit")}>EDITAR</S.Edit>
        {isModalVisible === "edit" ? <EditAddress id={id}  rua={rua} numero={numero} complemento={complemento} 
        cep={cep} cidade={cidade} estado={estado} idUser={idUser}
        onClose={() => setIsModalVisible("")} /> : null}
          <S.Delete onClick={deleteUser}>DELETAR</S.Delete>
        </S.Right>
    </S.Data>
  )
}

export default ListAddress;
