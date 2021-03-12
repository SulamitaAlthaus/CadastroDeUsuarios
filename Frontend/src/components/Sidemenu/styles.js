import styled from 'styled-components';


export const Container = styled.div`
    width: 5%;
    height: 100vh;
    display: block;
    background-color: #127786; 
    padding: 20px 0;
    float: left;
    position: absolute;
    transition: width 0.8s;
    :hover{
        width: 20%;
    }
`
export const Div = styled.div`
    width: 100%;
    top: -460px;
`
export const Button = styled.button`
    width: 100%;
    height: 50px;
    border: none;
    color: #FFFFFF;
    background-color: #127786;
    cursor: pointer;
        :focus{
            background-color: #6495ED; 
        }
        :hover{
            background-color: #6495ED; 
            display:block;
        }

`
export const Logo = styled.div`
    width: 80%;
    height: 10%;
    margin: 0 auto 20px auto;
    background-color: #B0C4DE; 
`