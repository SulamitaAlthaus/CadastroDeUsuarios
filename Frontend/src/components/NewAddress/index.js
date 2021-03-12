import React from 'react';
import api from '../../services/api';
import * as S from './styles';


function NewUser({ onClose = () => {}, id, rua, numero, complemento,
cep, cidade, estado}) {


    const handleOutsideClick = (e) => {
        if (e.target.id === "modal") onClose();
    }

    async function save() {
        await api.post(`/admin/newaddress`, {
            rua, numero, complemento, cep, cidade, estado
        }).then(() => {
                window.location.reload()
                alert("Usuário cadastrado")

            })
    }


    return <S.Modal id="modal" onClick={handleOutsideClick}>
        <S.Container>
            <S.Content>
                <S.Header>
                    <h2>Novo Endereço</h2>
                    <S.Button onClick={onClose} />
                </S.Header>
                <S.Data>
                    <S.Text><label for="rua">Rua:</label>
                        <S.Input id="rua" type="text" onChange={e => rua = (e.target.value)}/>
                    </S.Text>
                    <S.Text><label for="numero">Número:</label>
                        <S.Input id="numero" type="text" onChange={e => numero = (e.target.value)}/>
                    </S.Text>
                    <S.Text><label for="complemento">Complemento:</label>
                        <S.Input id="complemento" type="text" onChange={e => complemento = (e.target.value)}/>
                    </S.Text>
                    <S.Text><label for="cep">CEP:</label>
                        <S.Input id="cep" type="text" onChange={e => cep = (e.target.value)}/>
                    </S.Text>
                    <S.Text><label for="cidade">Cidade:</label>
                        <S.Input id="cidade" type="text" onChange={e => cidade = (e.target.value)}/>
                    </S.Text>
                    <S.Text><label for="estado">Estado: </label>
                        <S.Input id="estado" type="text" onChange={e => estado = (e.target.value)}/>
                    </S.Text>
                </S.Data>
                <S.Cancel onClick={onClose}>CANCELAR</S.Cancel>
                <S.Save onClick={save}>SALVAR</S.Save>
            </S.Content>
        </S.Container>

    </S.Modal>
}

export default NewUser;