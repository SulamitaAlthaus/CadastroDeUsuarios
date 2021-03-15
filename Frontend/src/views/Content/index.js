import React, { useState, useEffect } from 'react';
import * as S from './styles';
import api from '../../services/api';
import CardUser from '../../components/CardUser'
import NewUser from '../../components/NewUser'
import  Account  from '../../components/Account';

function Content({roleId, id}) {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const filteredUser = users.filter(user => { return user.nome.toLowerCase().includes(search.toLowerCase()) })
  const [isModalVisible, setIsModalVisible] = useState(false)


  async function loadUsers() {
    await api.get(`/admin/user/filter/all`)
      .then(response => {
        setUsers(response.data)
      })
  }

  useEffect(() => {
    loadUsers();

  }, [])

  return (
    <S.Container>
      {roleId == 1 ? <div>
        <S.Header>
          <S.Titulo>Usuários</S.Titulo>
          <S.Search>
            <input type="text" placeholder="Pesquise o usuário pelo nome"
              onChange={e => setSearch(e.target.value)} />
          </S.Search>
          <S.Button onClick={() => setIsModalVisible(true)}>+ NOVO USUÁRIO</S.Button>
          {isModalVisible ? <NewUser onClose={() => setIsModalVisible(false)} /> : null}
        </S.Header>
        <hr />
        <S.Card>
          {filteredUser.map(item =>
            <CardUser id={item.id} nome={item.nome} email={item.email}
              telefone={item.telefone} roleId={item.roleId}
              etnia={item.etnia} idade={item.idade}
              peso={item.peso} />
          )}
        </S.Card>
      </div>
        : <div>
          <S.Header>
            <S.Titulo>Bem vindo</S.Titulo>
          </S.Header>
          <hr />
          <Account id={id}/>

        </div>}



    </S.Container>
  )
}


export default Content;