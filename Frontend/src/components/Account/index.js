import React, { useEffect, useState } from 'react';
import * as S from './styles'
import api from '../../services/api'


function Account(id) {
    const [user, setUser] = useState({});
    const [address, setAddress] = useState([]);

    async function loadUser() {
        await api.get(`/admin/user/showid/${id.id}`)
            .then(response => {
                setUser(response.data)
            })
    }

    async function loadAddress() {
        await api.get(`/admin/address/show/${id.id}`)
            .then(response => {
                setAddress(response.data)
            })
    }
    useEffect(() => {
        loadUser();
        loadAddress();

    }, [])


    return (
        <S.Container>
            <S.Texto><strong>Nome: </strong>{user.nome}</S.Texto>
            <S.Texto><strong>Telefone: </strong>{user.telefone}</S.Texto>
            <S.Texto><strong>Email: </strong>{user.email}</S.Texto>
            <S.Texto><strong>Idade: </strong>{user.idade}</S.Texto>
            <S.Texto><strong>Peso: </strong>{user.peso}</S.Texto>
            <S.Texto><strong>Etnia: </strong>{user.etnia}</S.Texto>
            <hr />
                    <S.Texto><strong>Endereços</strong></S.Texto>
                    <br />
                    <br />
            {address.map(item =>
                <div>
                    <S.Texto><strong>Rua: </strong>{item.rua}</S.Texto>
                    <S.Texto><strong>Numero: </strong>{item.numero}</S.Texto>
                    <S.Texto><strong>Complemento: </strong>{item.complemento}</S.Texto>
                    <S.Texto><strong>CEP: </strong>{item.cep}</S.Texto>
                    <S.Texto><strong>Cidade: </strong>{item.cidade}</S.Texto>
                    <S.Texto><strong>Estado: </strong>{item.estado}</S.Texto>
                    <hr />
                    <br />
                </div>
            )}
        </S.Container>
    )
}
export default Account;