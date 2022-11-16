import { HomeStyle } from "./HomeStyle";
import exitIcon from "../../assets/exit.png";
import plusIcon from "../../assets/plus.png";
import minusIcon from "../../assets/minus.png";
import HomeButton from "./HomeButton";
import HomeData from "./HomeData";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../constants/urls";

export default function Home({user, setInputData, setUser}) {
  const navigate = useNavigate();
  const [statement, setStatement] = useState([]);

  useEffect(() => {
    const headers = {Authorization: "Bearer " + user.token};
    axios.get(url.statement, {headers})
    .then(r => setStatement(r.data))
    .catch(e => alert(e.response.data?.message));
  }, [user.token])

  const total = statement.reduce((v, e) => v + (e.type === "income" ? +e.value : -e.value), 0);
  const color = (total >= 0) ? "green" : "red";

  function logoutHandler() {
    const headers = {Authorization: "Bearer " + user.token};
    axios.delete(url.sessions, {headers})
    .then(() => {
      localStorage.clear();
      setUser();
      navigate("/");
    })
    .catch(e => alert(e.response.data?.message));
  }

  return (
    <HomeStyle>
      <div className="home-container">

        <header>
          <h1>{"Olá, " + user.name}</h1>
          <img src={exitIcon} alt="" onClick={logoutHandler}/>
        </header>

        <main>
          <div className="statements">
            {statement.map(e => <HomeData key={e._id} data={e}/>)}
          </div>
          <div className="balance">
            <p className="text">SALDO</p>
            <p className={color}>{total}</p>
          </div>
        </main>

        <footer>
          <HomeButton img={plusIcon} text="Nova entrada" onClick={() => navigate("/input/income")}/>
          <HomeButton img={minusIcon} text="Nova saida" onClick={() => navigate("/input/outcome")}/>
        </footer>
        
      </div>
    </HomeStyle>
  );
}