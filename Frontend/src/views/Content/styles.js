import styled from 'styled-components';


export const Container = styled.div`
    width: 80vw;
    height: 73vh;
    display: block;
    background-color: #FFFFFF; 
    margin: auto auto auto 10%;
    padding: 5vh;
    overflow-y: scroll;
    border: 1px solid #127786;
    border-radius: 10px;

    ::-webkit-scrollbar {
        width: 1vw;
        margin-right: 3vw;
        background-color: #FFFFFF; 
        border-radius: 20px;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: #127786; 
        border-radius: 10px;
    }
`

export const Header = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Titulo = styled.div`
    font-size: 2rem;
    font-family: 'Arial', sans-serif;
    float: left;

`
export const Search = styled.div`
    width: 50%;
    font-size: 2rem;
    font-family: 'Arial', sans-serif;

    input{
        width: 100%;
        height: 30px;
        border: 1px solid #999999;
        border-radius: 20px;
        height: 25px;
        padding: 5px;
        text-align: center;
        outline: none;

        :focus{
            border: 1px solid #999999 !important;
        }

        :hover{
            border: 1px solid #127786;
        }
    }

`
export const Button = styled.button`
    height: 30px;
    font-size: 0.8rem;
    border-radius: 20px;
    cursor: pointer;
    background-color: #127786;
    color: #FFFFFF;
    border: none;
    padding: 0 15px;
    float: right;
    outline: none;


    :hover{
        border: 2px solid #999999;
    }
`;


export const Card = styled.div`
    display: flex;
    flex-wrap: wrap;
`
