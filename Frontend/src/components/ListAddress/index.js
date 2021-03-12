import React, { useEffect, useState } from 'react';
import * as S from './styles';
import api from '../../services/api'
import NewAddress from '../NewAddress'
import List from './list'

function ListAddress({ onClose = () => { }, idUser }) {
    const [address, setAddress] = useState([]);

    const handleOutsideClick = (e) => {
        if (e.target.id === "modal") onClose();
    }

    async function loadAddress() {
        await api.get(`/admin/address/show/${idUser}`)
          .then(response => {
            setAddress(response.data)
            console.log(address)
          })
      }
    
      useEffect(() => {
        loadAddress();
    
      }, [])

    return <S.Modal id="modal" onClick={handleOutsideClick}>
        <S.Container>
            <S.Content>
                <S.Header>
                    <h2>Endereços</h2>
                    <S.Button onClick={onClose} />
                </S.Header>
               {address.map(item => <List rua={item.rua} 
                numero={item.numero} complemento={item.complemento} 
                cep={item.cep} cidade={item.cidade} estado={item.estado}/>)}
            <S.NewAddress>Novo Endereço</S.NewAddress>
            </S.Content>
        </S.Container>
        </S.Modal>
}

export default ListAddress;
