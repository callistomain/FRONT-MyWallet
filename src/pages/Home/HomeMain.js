import styled from 'styled-components';
import { colorGray, colorGreen, colorRed } from '../../constants/colors';
import { numberFormat } from '../../constants/format';
import HomeData from './HomeData';

export default function HomeMain({statement, user, setHomeUpdate, setInputData}) {
  const total = statement.reduce((v, e) => v + (e.type === "income" ? +e.value : -e.value), 0);
  const color = (total >= 0) ? "green" : "red";

  if (statement.length < 1) {
    return (
      <Empty>
        Não há registros de entrada ou saída
      </Empty>
    );
  } else {
    return (
      <Style>
        <div className="statements">
          {statement.map(e => <HomeData key={e._id} data={e} user={user} setHomeUpdate={setHomeUpdate} setInputData={setInputData}/>)}
        </div>
        <div className="balance">
          <p className="text">SALDO</p>
          <p className={color}>{numberFormat.format(total)}</p>
        </div>
      </Style>
    );
  }
}

const Empty = styled.main`
  border-radius: 5px;
  background-color: white;
  width: 100%;
  height: 100%;
  margin-bottom: 12px;
  overflow-y: hidden;
  padding: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${colorGray};
  font-family: 'Raleway', sans-serif;
  font-size: 24px;
`;

const Style = styled.main`
  border-radius: 5px;
  background-color: white;
  width: 100%;
  height: 100%;
  margin-bottom: 12px;
  overflow-y: hidden;
  padding: 16px 0;
  
  .statements {
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    height: calc(100% - 26px);
    overflow-y: scroll;
    gap: 16px;
  }

  .balance {
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    font-weight: bold;

    .text {
      color: black;
    }

    .green {
      color: ${colorGreen};
    }

    .red {
      color: ${colorRed};
    }
  }
`;