import React from 'react';
import * as S from './styles';
import Menu from '../../components/Sidemenu';
import Header from '../../components/Header';
import Content from '../Content';

function Home(props) {
    const roleId = props.location.state.detail.roleId
    const id = props.location.state.detail.id

    
    return(
        <S.Container>
            <Header id={id}/>
            <Menu/>
            <Content id={id} roleId={roleId}/>
        </S.Container>
    )
}


export default Home;