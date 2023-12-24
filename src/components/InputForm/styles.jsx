import styled from "styled-components";
import icon from "../../assets/images/icons/person.svg";
import eyes from "../../assets/images/icons/eyes.svg";


export const Input = styled.input`
  height: 45px;
  width: 250px;
  padding: 5px 30px 5px 10px;
  border-bottom: 1px solid #000;
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &.input-user{
  border-radius: 4.442px 4.442px 0px 0px;
  background-image: url(${icon});
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 20px 20px;
  }

  &.input-password{
  border-radius: 0px 0px 4.442px 4.442px;
  background-image: url(${eyes});
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 20px 20px;
  }
`;


export const Container = styled.div`

`