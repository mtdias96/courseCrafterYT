import { Link } from "react-router-dom";
import styled from "styled-components";

export const Form = styled.form`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  a{
  text-decoration: none;
  color: #ccc;
  font-size: 14px;
  transition: all 0.2s ease-in;
  text-align: right;
  margin-top: 16px;
  margin-left: 115px;

  &:hover{
    color: #fff;
  }

  &.forgot{
    text-align: right;
  }
}
`

export const Logo = styled.h2`
  color: #c7c7c7;
  font-size: 36px;
  font-family: 'Rubik Doodle Shadow', cursive;
  margin-bottom: 24px;

  span{
    color: #c4302b;
  }
`

export const CustomLink = styled(Link)`
  width: 250px;
  margin-top: 8px;
  margin-right: 110px;
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