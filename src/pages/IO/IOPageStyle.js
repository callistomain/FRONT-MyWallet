import styled from 'styled-components';

export const IOPageStyle = styled.main`
  display: flex;
  justify-content: center;
  height: 100vh;
  margin: 0 24px;

  .io-container {
    padding: 24px 0;
    width: 100%;
    max-width: 500px;
  }

  h1 {
    font-family: 'Raleway', sans-serif;
    font-size: 24px;
    font-weight: bold;
    color: white;
    margin-bottom: 32px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;