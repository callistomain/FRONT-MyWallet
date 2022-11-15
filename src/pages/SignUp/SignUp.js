import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";
import { SignUpStyle } from "./SignUpStyle";

export default function SignUp() {
  return (
    <SignUpStyle>
      <h1>MyWallet</h1>
      <form action="">
        <InputText type="text" name="name" id="name" placeholder="Nome"/>
        <InputText type="email" name="email" id="email" placeholder="E-mail"/>
        <InputText type="password" name="password" id="password" placeholder="Senha"/>
        <InputText type="password" name="pwconfirm" id="pwconfirm" placeholder="Confirme a senha"/>
        <Button>Entrar</Button>
      </form>
      <Link to="/login">Já tem uma conta? Entre agora!</Link>
    </SignUpStyle>
  );
}