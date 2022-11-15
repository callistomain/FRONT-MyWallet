import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";
import { LoginStyle } from "./LoginStyle";

export default function Login() {
  return (
    <LoginStyle>
      <h1>MyWallet</h1>
      <form action="">
        <InputText type="email" name="email" id="email" placeholder="E-mail"/>
        <InputText type="password" name="password" id="password" placeholder="Senha"/>
        <Button>Entrar</Button>
      </form>
      <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
    </LoginStyle>
  );
}