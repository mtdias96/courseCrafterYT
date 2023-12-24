import InputForm from "../../components/InputForm";
import BackgroundForm from "../../components/BackgroundForm"
import { useState } from "react";
import { CustomLink, Form, Logo } from "./styles"



export default function Login() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  console.log(email, password)
  return (
    <BackgroundForm>
      <Form>
        <Logo>CourseCraft<span>YT</span></Logo>
        <InputForm
          type="text"
          name="email"
          id="email"
          placeholder="Usuário"
          className="input-user"
          onChange={handleEmail}
        />
        <InputForm
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
          className="input-password"
          onChange={handlePassword}
        />

        <a href="/">Esqueceu sua senha?</a>

        <CustomLink to="/entrar">
          <button type="button" className="btn-login">Entrar</button>
        </CustomLink>
        <CustomLink to="/cadastrar">
          <button type="button" className="btn-newCount">Criar uma nova conta</button>
        </CustomLink>
      </Form >

    </BackgroundForm >
  )
}