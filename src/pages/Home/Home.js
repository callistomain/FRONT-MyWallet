import { HomeStyle } from "./HomeStyle";
import exitIcon from "../../assets/exit.png";
import plusIcon from "../../assets/plus.png";
import minusIcon from "../../assets/minus.png";
import HomeButton from "./HomeButton";

export default function Home() {
  return (
    <HomeStyle>
      <div className="home-container">

        <header>
          <h1>Olá, Fulano</h1>
          <img src={exitIcon} alt="" />
        </header>

        <main>
        </main>

        <footer>
          <HomeButton img={plusIcon} text="Nova entrada"/>
          <HomeButton img={minusIcon} text="Nova saida"/>
        </footer>
        
      </div>
    </HomeStyle>
  );
}