import styled from 'styled-components';

export const Modal = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0,0,0,.8);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    display: flex;
    width: 60%;
    height: 70%;    
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    background-color: #FFFFFF; 
    color: #000;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 1vw;
        margin-right: 3vw;
        background-color: transparent; 
        border-radius: 20px;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: #127786; 
        border-radius: 10px;
    }

`;

export const Header = styled.div`
    display: block;
    border-bottom: 1px solid #D3D3D3;
    margin-bottom: 20px;

    h2{ 
        width: 200px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.5rem;
        text-align: center;
        margin: 25px auto 20px auto;
    }
`;

export const Data = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #D3D3D3;
    margin-bottom: 20px;
    
`;

export const Button = styled.button`
    background-color: transparent;
    outline: none;
    width: 32px;
    height: 32px;
    border: none;
    display: flex;
    top: -50px;
    position:relative;
    align-items: center;
    float: right;
    cursor: pointer;
    &:before,
    &:after{
        content: '';
        position: absolute;
        width: 2.5px;
        height: 24px;
        background-color: #000;
    }
    &:before{
        transform: rotate(45deg)
    }
    &:after{
        transform: rotate(-45deg)
    }
`;
export const Title = styled.div`
`
export const Text = styled.div`
    display: flex;
    font-size: 18px;
    padding-left: 40px;
    font-family: Arial, sans-serif;
    margin-bottom: 10px;

    label{
        width: 150px;
        text-align: right;
    }
`;
export const Input = styled.input`
    padding-left: 10px;
    width: 300px;
    font-size: 15px;
    margin-left: 10px;
    font-family: Arial, sans-serif;
    height: 20px;
    border-radius: 8px;
    border: 1px solid #D3D3D3;
    cursor: pointer;

    :hover{
        border: 1px solid #127786
    }
    :focus {
    }
`;
export const Address = styled.button`
    width: 100px;
    height: 40px;
    float: left;
    border-radius: 20px;
    margin-left: 20px;
    border: none;
    cursor: pointer;
    font-family: Arial, sans-serif;
    background-color: #127786;
    color: #FFFFFF;
    :hover{
        border: 1px solid #D3D3D3;
    }
`;
export const Save = styled.button`
    width: 100px;
    height: 40px;
    float: right;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    font-family: Arial, sans-serif;
    background-color: #127786;
    color: #FFFFFF;
    :hover{
        border: 1px solid #D3D3D3;
    }
`;
export const Cancel = styled.button`
    width: 100px;
    height: 40px;
    float: right;
    margin-left: 20px;
    border: none;
    border-radius: 20px;
    margin-right: 20px;
    cursor: pointer;
    font-family: Arial, sans-serif;
    background-color: #127786;
    color: #FFFFFF;
    :hover{
        border: 1px solid #D3D3D3;
    }
`;