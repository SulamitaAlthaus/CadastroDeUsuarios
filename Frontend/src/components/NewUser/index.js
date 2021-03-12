import React, { useState } from 'react';
import * as S from '../EditUser/styles';
import api from '../../services/api';
import Switch from "react-switch";

function NewUser({ onClose = () => { }, }) {
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [telefone, setTelefone] = useState();
    const [etnia, setEtnia] = useState();
    const [idade, setIdade] = useState();
    const [peso, setPeso] = useState();
    const [roleId, setRoleId] = useState();
    const [checked, setChecked] = useState(false);

    const handleChange = nextChecked => {
        setChecked(nextChecked);
        {checked ? setRoleId(1) : setRoleId(2)}
    };

    const handleOutsideClick = (e) => {
        if (e.target.id === "modal") onClose();
    }

    async function save() {
        console.log(etnia)
        if (!nome)
            return alert("Você precisa preencher o nome")
        else if (!email)
            return alert("Você precisa preencher o email")
        else if (!telefone)
            return alert("Você precisa preencher o telefone")
        else if (!idade)
            return alert("Você precisa escolher a idade")
        else if (!peso)
            return alert("Você precisa escolher o peso")


        await api.post(`/admin/newuser`,
            { nome, email, telefone, etnia, idade, peso, roleId }
        ).then(() => {
            window.location.reload()
            alert("Usuário cadastrado")
        }).catch((err) => {
            console.log(err)
        })
    }

    return <S.Modal id="modal" onClick={handleOutsideClick}>
        <S.Container>
            <S.Content>
                <S.Header>
                    <h2>Novo Usuário</h2>
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
                        <S.Input id="nome" type="text" onChange={e => setNome(e.target.value)} />
                    </S.Text>
                    <S.Text><label for="email">Email:</label>
                        <S.Input id="email" type="text" onChange={e => setEmail(e.target.value)} />
                    </S.Text>
                    <S.Text><label for="telefone">Telefone:</label>
                        <S.Input id="telefone" type="text" onChange={e => setTelefone(e.target.value)} />
                    </S.Text>
                    <S.Text>
                        <label for="etnia">Etnia:</label>
                        <select name="etnia" id="etnia" onChange={e => setEtnia(e.currentTarget.value)}>
                            <option> </option>
                            <option value="indigena">Indígena</option>
                            <option value="branco">Branco</option>
                            <option value="negro">Negro</option>
                        </select>
                    </S.Text>
                    <S.Text><label for="idade">Idade:</label>
                        <S.Input id="idade" type="text" onChange={e => setIdade(e.target.value)} />
                    </S.Text>
                    <S.Text><label for="peso">Peso: </label>
                        <S.Input id="peso" type="text" onChange={e => setPeso(e.target.value)} />
                    </S.Text>
                </S.Data>
                <S.Address>ENDEREÇO</S.Address>
                <S.Cancel onClick={onClose}>CANCELAR</S.Cancel>
                <S.Save onClick={save}>SALVAR</S.Save>
            </S.Content>
        </S.Container>

    </S.Modal>

}
export default NewUser;