import React, { useState } from 'react';
import * as S from './styles';
import api from '../../services/api'
import EditUser from '../EditUser'
import ListAddress from '../ListAddress'

function CardUser({ id, nome, email, telefone, roleId,
  etnia, idade, peso }) {

  const [isModalVisible, setIsModalVisible] = useState()


  async function deleteUser() {
    const res = window.confirm('Deseja realmente remover o candidato?')
    if (res == true) {
      await api.delete(`/admin/user/delete/${id}`)
        .then(
          alert("O usuário foi deletado"),
          window.location.reload()
        )
    }
  }


  return (
    <S.Container>
      <S.LeftCard>
        <S.Nome>Nome: {nome}</S.Nome>
        <S.Text>Email: {email}</S.Text>
        <S.Text>Telefone: {telefone}</S.Text>
        <S.Text>Etnia: {etnia}</S.Text>
        <S.Text>Idade: {idade}</S.Text>
        <S.Text>Peso: {peso}</S.Text>
        <S.Tipo><input type="checkbox" checked={roleId == 1} />Admin</S.Tipo>
      </S.LeftCard>
      <S.RightCard>
        <S.Button onClick={() => setIsModalVisible("edit")}>Editar</S.Button>
        <S.Button onClick={deleteUser}>Deletar</S.Button>
        <S.Button onClick={() => setIsModalVisible("address")}>Endereços</S.Button>
      </S.RightCard>
      {isModalVisible==="edit" ? <EditUser id={id} nome={nome} email={email} telefone={telefone} 
      etnia={etnia} idade={idade} peso={peso} roleId={roleId} 
            onClose={() => setIsModalVisible("")} /> : null}
      {isModalVisible==="address" ? <ListAddress idUser={id} nome={nome}
            onClose={() => setIsModalVisible("")} /> : null}
    </S.Container>
  )
}

export default CardUser;
