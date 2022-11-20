import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";
import { url } from "../../constants/urls";
import { SignUpStyle } from "./SignUpStyle";

export default function SignUp() {
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    const {name, email, password, pwconfirm} = e.target;
    if (password.value !== pwconfirm.value) return alert("As senhas devem ser iguais.");

    const obj = {
      name: name.value, 
      email: email.value, 
      password: password.value
    };

    axios.post(url.signUp, obj)
    .then(() => navigate("/"))
    .catch(e => alert(e.response?.data.message));
  }

  return (
    <SignUpStyle>
      <h1>MyWallet</h1>
      <form action="" onSubmit={submitHandler}>
        <InputText type="text" name="name" id="name" placeholder="Nome" required/>
        <InputText type="email" name="email" id="email" placeholder="E-mail" required/>
        <InputText type="password" name="password" id="password" placeholder="Senha" required/>
        <InputText type="password" name="pwconfirm" id="pwconfirm" placeholder="Confirme a senha" required/>
        <Button>Cadastrar</Button>
      </form>
      <Link to="/login">Já tem uma conta? Entre agora!</Link>
    </SignUpStyle>
  );
}