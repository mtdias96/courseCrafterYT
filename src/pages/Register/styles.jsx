import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormContainer = styled.form`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 150px;



  p{
    color: #ccc;
    font-size: 22px;
    padding-bottom: 16px;
  }

  label{
    color: #ccc;
    width: 250px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 8px 0;
    font-size: 14px;
  }
`

export const Logo = styled.h2`
  color: #c7c7c7;
  font-size: 36px;
  font-family: 'Rubik Doodle Shadow', cursive;


  span{
    color: #c4302b;
  }


`

export const ParagraphContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
    p{
      margin-top: 8px;
      font-size: 16px;
    }

    a{
      color: #7fa3b9;
      font-weight: 400;
      line-height: 19px;
      text-decoration-line: underline;
    }
`

export const CustomLink = styled(Link)`
  width: 250px;
  margin-top: 48px;
  gap: 10px;
  background: transparent;
  outline: none;
  border: none;

  button{
    width: 100%;
    height: 40px;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    transition: all 0.2s ease-in;
    cursor: pointer;

    &.btn-login{
      border-radius: 4.442px;
      background: #013453;
      &:hover{
        background: #0f4f7c;
      }
    }

    &.btn-newCount{
      background: #262626;
      border-radius: 4.442px;

      &:hover{
       background: #404040;
      }
    }
    }
    `;