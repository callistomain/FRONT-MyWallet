import styled from 'styled-components';
import { colorGray, colorGreen, colorRed } from '../../constants/colors';
import { nfSimple } from '../../constants/format';

export default function HomeData({data}) {
  const {type, date, desc, value} = data;
  return (
    <Style type={type}>
      <h3>{date}</h3>
      <div>
        <h2>{desc}</h2>
        <h1>{nfSimple.format(value)}</h1>
      </div>
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
    }

    h1 {
      color: ${props => 
        props.type === "income" ? colorGreen : colorRed
      };
    }
  }
`;