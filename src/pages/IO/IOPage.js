import { useState } from "react";
import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";
import { IOPageStyle } from "./IOPageStyle";

export default function IOPage({title, subtitle, value, desc}) {
  const [inputValue, setValue] = useState(value ? value : "");
  const [inputDesc, setDesc] = useState(desc ? desc : "");

  return (
    <IOPageStyle>
      <div className="io-container">
        <h1>{title}</h1>
        <form action="">
          <InputText
            type="text"
            name="value"
            id="value"
            placeholder="Valor"
            value={inputValue}
            onChange={e => setValue(e.target.value)}
          />
          <InputText
            type="text"
            name="desc"
            id="desc"
            placeholder="Descrição"
            value={inputDesc}
            onChange={e => setDesc(e.target.value)}
          />
          <Button>{subtitle}</Button>
        </form>
      </div>
    </IOPageStyle>
  );
}