import React, { useState } from 'react';
import * as S from './styles';
import api from '../../services/api';
import Switch from "react-switch";

function EditUser({ onClose = () => { }, id, nome, email, telefone,
    etnia, idade, peso, roleId }) {
    const [checked, setChecked] = useState(roleId == 1);
    const [valRole, setValRole] = useState(roleId == 1);

    const handleChange = nextChecked => {
        setChecked(nextChecked);
        { checked ? setValRole(2) : setValRole(1) }
    }

    const handleOutsideClick = (e) => {
        if (e.target.id === "modal") onClose();
    }

    async function edit() {
        await api.put(`admin/user/update/${id}`, {
            nome, email, telefone, etnia, idade, peso, roleId:valRole
        }).then(() => {
            window.location.reload()
            alert("Usuário atualizado")
        }).catch((err) => {
            alert("Não foi possível atualizar o usuário" + err +valRole)
        })
    }

    return <S.Modal id="modal" onClick={handleOutsideClick}>
        <S.Container>
            <S.Content>
                <S.Header>
                    <h2>Editar Usuário</h2>
                    <S.Button onClick={onClose} />
                </S.Header>
                <S.Data>
                    <label>
                        <span>Admin</span>
                        <Switch
                            onChange={handleChange}
                            checked={checked}
                            className="react-switch"
                        />
                    </label>
                    <S.Text><label for="nome">Nome:</label>
                        <S.Input id="nome" type="text" onChange={e => nome = (e.target.value)} defaultValue={nome} />
                    </S.Text>
                    <S.Text><label for="email">Email:</label>
                        <S.Input id="email" type="text" onChange={e => email = (e.target.value)} defaultValue={email} />
                    </S.Text>
                    <S.Text><label for="telefone">Telefone:</label>
                        <S.Input id="telefone" type="text" onChange={e => telefone = (e.target.value)} defaultValue={telefone} />
                    </S.Text>
                    <S.Text>
                        <label for="etnia">Etnia:</label>
                        <select name="etnia" id="etnia" onChange={e => etnia = (e.target.value)}>
                            <option> </option>
                            <option value="indigena" select={e => etnia == (e.target.value)}>Indígena</option>
                            <option value="branco">Branco</option>
                            <option value="negro">Negro</option>
                        </select>
                    </S.Text>
                    <S.Text><label for="idade">Idade:</label>
                        <S.Input id="idade" type="text" onChange={e => idade = (e.target.value)} defaultValue={idade} />
                    </S.Text>
                    <S.Text><label for="peso">Peso: </label>
                        <S.Input id="peso" type="text" onChange={e => peso = (e.target.value)} defaultValue={peso} />
                    </S.Text>
                </S.Data>
                <S.Address>ENDEREÇO</S.Address>
                <S.Cancel onClick={onClose}>CANCELAR</S.Cancel>
                <S.Save onClick={edit}>SALVAR</S.Save>
            </S.Content>
        </S.Container>

    </S.Modal>
}

export default EditUser;