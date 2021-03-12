import styled from 'styled-components';

export const Container = styled.div`
width: 28%;
height: 25%;
display: block;
border: 1px solid #DCDCDC;
border-radius: 10px;
cursor: pointer;
transition: all 0.8s ease;
padding: 15px;
font-family: Arial, Helvetica, sans-serif;
font-size: 0.8rem;
margin: 10px;

&:hover{
 border: 1px solid #127786;
}
`
export const LeftCard = styled.div`
    float:left;
`

export const Nome = styled.div`
    margin-bottom: 2%;
`
export const Text = styled.div`
    margin-bottom: 2%;
`
export const Tipo = styled.div`
`

export const RightCard = styled.div`
    width: 30%;
    float: right;
`
export const Button = styled.button`
    height: 25px;
    font-size: 0.8rem;
    border-radius: 20px;
    cursor: pointer;
    margin: 5px auto 5px auto;
    background-color: #127786;
    color: #FFFFFF;
    border: none;
    padding: 0 15px;
    outline: none;

    :hover{
        border: 2px solid #999999;
    }
`;
