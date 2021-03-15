import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  width: 40vw;
  background: #FFFFFF;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  p {
    color: #861212;
    padding: 1vh;
    width: 100%;
    text-align: center;
    background-color: #EEA3A3;
    border-radius: 10px;
  }
  label{
    justify-content: left;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
  }
  input {
    flex: 1;
    outline: none;
    height: 10vh;
    margin-bottom: 10px;
    padding: 2vh;
    color: #777777;
    font-size: 15px;
    width: 80%;
    border: 1px solid #127786;
    border-radius: 10px;
    &::placeholder {
      color: #999999;
    }
  }
  button {
    color: #FFFFFF;
    font-size: 16px;
    background:  #127786;
    outline: none;
    height: 8vh;
    border: 0;
    border-radius: 10px;
    width: 35vw;
    cursor: pointer;

    :hover{
      opacity: 0.9;
    }
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #CDCDCD;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999999;
    text-decoration: none;
  }
`;