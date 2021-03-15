import React, { useState } from 'react';
import * as S from './styles';
import api from '../../services/api';


function Header({ id }) {
    var val1 = ""
    var val2 = ""
    const [password, setPassword] = useState()


    async function newPassword() {
        console.log(val1)
        console.log(val2)
        if (val1 === val2) {
            await api.put(`admin/user/update/${id}`, {
                password:val2
            }).then(() => {
                setPassword(false)
                alert("Senha atualizada")
            }).catch((err) => {
                alert("Não foi possível atualizar a senha" + err)
            })
        } else {
            alert("As senhas não coincidem")
        }
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
                        <input type="password" placeholder="Digite sua senha"
                            onChange={e => val1 = (e.target.value)} /><br />
                        <label>Confirme a senha: </label>
                        <input type="password" placeholder="Confirme a senha"
                            onChange={e => val2 = (e.target.value)} /><br />
                        <button onClick={newPassword}>SALVAR</button>
                    </S.NewPassword>
                </div> : <S.Password onClick={() => setPassword(true)}>ALTERAR SENHA</S.Password>}
        </S.Container>
    )
}

export default Header;