import { HomeStyle } from "./HomeStyle";
import exitIcon from "../../assets/exit.png";
import plusIcon from "../../assets/plus.png";
import minusIcon from "../../assets/minus.png";
import HomeButton from "./HomeButton";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../constants/urls";
import HomeMain from "./HomeMain";

export default function Home({user, setInputData, setUser}) {
  const navigate = useNavigate();
  const [statement, setStatement] = useState([]);
  const [update, setHomeUpdate] = useState(false);

  useEffect(() => {
    const headers = {Authorization: "Bearer " + user.token};
    axios.get(url.statement, {headers})
    .then(r => setStatement(r.data))
    .catch(e => alert(e.response.data?.message));
    setInputData([]);
  }, [user.token, update, setInputData])

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

        <HomeMain statement={statement} user={user} setHomeUpdate={setHomeUpdate} setInputData={setInputData}/>

        <footer>
          <HomeButton img={plusIcon} text="Nova entrada" onClick={() => navigate("/input/income")}/>
          <HomeButton img={minusIcon} text="Nova saida" onClick={() => navigate("/input/outcome")}/>
        </footer>
        
      </div>
    </HomeStyle>
  );
}