import styled from 'styled-components';

export const HomeStyle = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  height: 100vh;
  margin: 0 24px;
  
  .home-container {
    margin: 24px 0;
    display: flex;
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
  }

  footer {
    display: flex;
    gap: 12px;
  }
`;