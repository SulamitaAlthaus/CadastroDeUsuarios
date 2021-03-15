import styled from 'styled-components';


export const Container = styled.div`
    width: 95%;    
    height: 10vh;
    display: block;
    background-color: #FFFFFF;
    float: right;
    margin-bottom: 2%;
`

export const NewPassword = styled.div`
    display: block;
    position: relative;
    margin-top: 10px;
    padding: 15px;
    float: right;
    text-align: right;
    background-color: #FFFFFF;
    border: 2px solid #999999;
    border-radius: 10px;

    label{
        font-size: 0.9rem;
        font-family: 'Arial', sans-serif;
    }
    input{
        outline: none;
        padding: 5px;
        width: 50%;  
        border-radius: 15px;
        border: 2px solid #999999;
        margin-top: 5px;
    }
    button{
        width: 30%;  
        height: 30px;
        padding: 3px;  
        background-color: #127786;
        margin-top: 10px;
        outline: none;
        border: none;
        color: #FFFFFF;
        border-radius: 20px;

        :hover{
            border: 2px solid #999999;
        }

    }
`
export const Password = styled.button`
    width: 12%;    
    height: 50%;
    font-size: 0.8rem;
    border-radius: 20px;
    display: block;
    background-color: #127786;
    color: #FFFFFF;
    border: none;
    margin: 10px;
    outline: none;
    float: right;
    cursor: pointer;
    :hover{
        border: 2px solid #999999;
    }
`
export const Logout = styled.button`
    width: 5%;    
    height: 50%;
    font-size: 0.8rem;
    border-radius: 20px;
    display: block;
    background-color: #127786;
    color: #FFFFFF;
    border: none;
    margin: 10px;
    outline: none;
    float: right;
    cursor: pointer;
    :hover{
        border: 2px solid #999999;
    }
`