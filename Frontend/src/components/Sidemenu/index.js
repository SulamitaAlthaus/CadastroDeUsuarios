import React from 'react';
import * as S from './styles';

function Menu() {
    return (
        <S.Container>
            <S.Logo />
            <S.Div>
                <S.Button>NAV 1</S.Button>
                <S.Button>NAV 2</S.Button>
                <S.Button>NAV 3</S.Button>
            </S.Div>
        </S.Container>
    )
}


export default Menu;