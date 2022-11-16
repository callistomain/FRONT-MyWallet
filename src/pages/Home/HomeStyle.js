import styled from 'styled-components';
import { colorGreen, colorRed } from '../../constants/colors';

export const HomeStyle = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  height: 100vh;
  margin: 0 24px;
  
  .home-container {
    display: flex;
    padding: 24px 0;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-width: 500px;
  }

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: 'Raleway', sans-serif;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 24px;
  }

  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
  
  main {
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
  }

  footer {
    display: flex;
    gap: 12px;
  }
`;