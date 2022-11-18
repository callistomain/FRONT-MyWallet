import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";
import { url } from "../../constants/urls";
import { InputStyle } from "./InputStyle";

export default function Input({user, inputData, setInputData}) {
  const navigate = useNavigate();
  const { type } = useParams();

  const [value, desc, id] = inputData;
  const [inputValue, setValue] = useState(value ? value : "");
  const [inputDesc, setDesc] = useState(desc ? desc : "");
  
  let title, subtitle, redirect = false;
  switch (type) {
    case "income": [title, subtitle] = ["Nova entrada", "Salvar entrada"]; break;
    case "outcome": [title, subtitle] = ["Nova saída", "Salvar entrada"]; break;
    case "edit-income": [title, subtitle] = ["Editar entrada", "Atualizar entrada"]; break;
    case "edit-outcome":  [title, subtitle] = ["Editar saída", "Atualizar saída"]; break;
    default: redirect = true; break;
  }

  useEffect(() => {
    if (redirect) navigate("/");
  }, [redirect, navigate])

  function submitHandler(e) {
    e.preventDefault();

    const headers = {Authorization: "Bearer " + user.token};
    const data = {
      type: type.replace("edit-", ""),
      value: inputValue,
      desc: inputDesc
    }

    switch (type) {
      case "income": case "outcome":
        axios.post(url.statement, data, {headers})
        .then(() => navigate("/"))
        .catch(e => alert(e.response.data?.message));
      break;
      case "edit-income": case "edit-outcome":
        axios.put(url.statementEdit(id), data, {headers})
        .then(() => navigate("/"))
        .catch(e => alert(e.response.data?.message));
      break;
      default: console.log("Deu ruim :/");
    }

    setInputData([]);
  }

  return (
    <InputStyle>
      <div className="io-container">
        <h1>{title}</h1>
        <form action="" onSubmit={submitHandler}>
          <InputText
            type="number"
            name="value"
            id="value"
            placeholder="Valor"
            value={inputValue}
            onChange={e => setValue(e.target.value)}
            required
          />
          <InputText
            type="text"
            name="desc"
            id="desc"
            placeholder="Descrição"
            value={inputDesc}
            onChange={e => setDesc(e.target.value)}
            required
          />
          <Button>{subtitle}</Button>
        </form>
      </div>
    </InputStyle>
  );
}