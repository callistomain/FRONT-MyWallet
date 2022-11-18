import styled from 'styled-components';

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

  footer {
    display: flex;
    gap: 12px;
  }
`;