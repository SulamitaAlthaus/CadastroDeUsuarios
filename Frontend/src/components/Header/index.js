import React, { useState } from 'react';
import * as S from './styles';
import api from '../../services/api';


function Header({id}) {
    const [password, setPassword] = useState(false)


    async function newPassword() {
        await api.put(`admin/user/update/${id}`, {
            password
        }).then(() => {
            setPassword(false)
            alert("Senha atualizada")
        }).catch((err) => {
            alert("Não foi possível atualizar a senha" + err)
        })
    }

    async function logout() {
        localStorage.removeItem('@creative-code');
        window.location.replace('/')
    }

    return (
        <S.Container>
            <S.Logout onClick={logout}>SAIR</S.Logout>

            {password ?
                <div>
                    <S.NewPassword>
                        <label>Nova Senha: </label>
                        <input type="password" placeholder="Digite sua senha" /><br />
                        <label>Confirme a senha: </label>
                        <input type="password" placeholder="Confirme a senha" /><br />
                        <button onClick={newPassword}>SALVAR</button>
                    </S.NewPassword>
                </div> : <S.Password onClick={() => setPassword(true)}>ALTERAR SENHA</S.Password>}
        </S.Container>
    )
}

export default Header;