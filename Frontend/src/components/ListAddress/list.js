import React, { useState } from 'react';
import * as S from './styles';

function CardUser({ rua, numero, complemento, cep, cidade, estado }) {

  return (
    <S.Data>
        <S.Text><strong>Rua: </strong>{rua}</S.Text>
        <S.Text><strong>Número:</strong> {numero}</S.Text>
        <S.Text><strong>Complemento:</strong> {complemento}</S.Text>
        <S.Text><strong>CEP:</strong> {cep}</S.Text>
        <S.Text><strong>Cidade:</strong> {cidade}</S.Text>
        <S.Text><strong>Estado: </strong>{estado}</S.Text>
        <hr/>
    </S.Data>
  )
}

export default CardUser;
