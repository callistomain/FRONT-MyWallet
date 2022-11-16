import styled from 'styled-components';
import { Button } from '../../components/Button';

export default function HomeButton({img, text, onClick}) {
  return (
    <Style onClick={onClick}>
      <img src={img} alt="" />
      <p>{text}</p>
    </Style>
  );
}

export const Style = styled(Button)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 12px;
    height: 128px;

    p {
      width: min-content;
      text-align: left;
    }
`;