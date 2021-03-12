import React, { useState, useEffect } from 'react';
import * as S from './styles';
import api from '../../services/api';
import CardUser from '../../components/CardUser'
import NewUser from '../../components/NewUser'

function Content() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const filteredUser = users.filter(user => 
    { return user.nome.toLowerCase().includes(search.toLowerCase())})
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
      <S.Header>
        <S.Titulo>Usuários</S.Titulo>
        <S.Search>
          <input type="text" placeholder="Pesquise o usuário pelo nome"
            onChange={e => setSearch(e.target.value)}/>
        </S.Search>
        <S.Button onClick={() => setIsModalVisible(true)}>+ Novo Usuário</S.Button>
        {isModalVisible ? <NewUser onClose={() => setIsModalVisible(false)} /> : null}
      </S.Header>
      <hr />
      <S.Card>
        {filteredUser.map(item =>
          <CardUser id={item.id} nome={item.nome} email={item.email}
            telefone={item.telefone} roleId={item.roleId}
            etnia={item.etnia} idade={item.idade}
            peso={item.peso}/>
        )}
      </S.Card>



    </S.Container>
  )
}


export default Content;