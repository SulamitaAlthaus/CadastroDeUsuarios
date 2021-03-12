import React from 'react';
import * as S from './styles';
import Menu from '../../components/Sidemenu';
import Header from '../../components/Header';
import Content from '../Content';

function Home() {
    return(
        <S.Container>
            <Header/>
            <Menu/>
            <Content/>
        </S.Container>
    )
}


export default Home;