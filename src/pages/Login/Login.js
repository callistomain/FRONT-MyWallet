import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";
import { url } from "../../constants/urls";
import { LoginStyle } from "./LoginStyle";

export default function Login({setUser}) {
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    const {email, password} = e.target;
    const obj = {
      email: email.value, 
      password: password.value
    };

    axios.post(url.login, obj)
    .then(r => {
      localStorage.setItem("userMyWallet", JSON.stringify(r.data));
      setUser(r.data);
      navigate("/");
    })
    .catch(e => alert(e.response.data?.message));
  }

  return (
    <LoginStyle>
      <h1>MyWallet</h1>
      <form action="" onSubmit={submitHandler}>
        <InputText type="email" name="email" id="email" placeholder="E-mail"/>
        <InputText type="password" name="password" id="password" placeholder="Senha"/>
        <Button>Entrar</Button>
      </form>
      <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
    </LoginStyle>
  );
}