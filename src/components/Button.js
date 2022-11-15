import styled from 'styled-components';
import { colorButton } from '../constants/colors';

export const Button = styled.button`
  height: 48px;
  border-radius: 5px;
  background-color: ${colorButton};
  width: 100%;
  max-width: 500px;
  font-family: 'Raleway', sans-serif;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;