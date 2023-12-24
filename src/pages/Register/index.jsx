import BackgroundForm from "../../components/BackgroundForm";
import InputForm from "../../components/InputForm";
import { CustomLink, FormContainer, Logo, ParagraphContainer } from "./styles.jsx";



export default function Register() {
  return (
    <BackgroundForm>
      <FormContainer>
        <Logo>CourseCraft<span>YT</span></Logo>
        <ParagraphContainer>
          <p>Já tem uma conta? <a href="/">Faça o login</a></p>
        </ParagraphContainer>


        <InputForm
          htmlFor="email"
          type="text"
          name="email"
          id="email"
          labelText="Digite seu E-mail:"
          placeholder="usuario@gmail.com"
          className="input-user"
        />
        <InputForm
          htmlFor="password"
          type="password"
          name="password"
          id="password"
          labelText="Insira sua senha:"
          placeholder="**********"
          className="input-password"
        />
        <InputForm htmlFor=""
          type="password"
          name="password"
          id="password"
          labelText="Confirme sua senha:"
          placeholder="**********"
          className="input-password" />


        <CustomLink to="/cadastrar">
          <button type="button" className="btn-newCount">Criar conta</button>
        </CustomLink>
      </FormContainer>

    </BackgroundForm>
  )
}