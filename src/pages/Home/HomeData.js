import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colorGray, colorGreen, colorRed } from '../../constants/colors';
import { numberFormat } from '../../constants/format';
import { url } from '../../constants/urls';

export default function HomeData({data, user, setHomeUpdate, setInputData}) {
  const {_id, type, date, desc, value} = data;
  const navigate = useNavigate();

  function delHandler() {
    const headers = {Authorization: "Bearer " + user.token};
    axios.delete(url.statementDelete(_id), {headers})
    .then(() => setHomeUpdate((home) => !home))
    .catch(e => alert(e.response.data?.message));
  }

  function editHandler() {
    navigate("/input/edit-" + type);
    setInputData([value, desc, _id]);
    /*
    const headers = {Authorization: "Bearer " + user.token};
    axios.put(url.statementDelete(_id), {headers})
    .then(() => setHomeUpdate((home) => !home))
    .catch(e => alert(e.response.data?.message));*/
  }

  return (
    <Style type={type}>
      <h3>{date}</h3>
      <div>
        <h2 onClick={editHandler}>{desc}</h2>
        <h1>{numberFormat.format(value).replace("R$", "")}</h1>
      </div>
      <div className="del" onClick={delHandler}>x</div>
    </Style>
  );
}

export const Style = styled.div`
  display: flex;
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  gap: 8px;
  width: 100%;

  h3 {
    color: ${colorGray};
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;

    h2 {
      color: black;
      cursor: pointer;
    }

    h1 {
      color: ${props => 
        props.type === "income" ? colorGreen : colorRed
      };
    }
  }

  .del {
    width: fit-content;
    color: ${colorGray};
    cursor: pointer;
  }
`;