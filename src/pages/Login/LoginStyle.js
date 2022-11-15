import styled from 'styled-components';

export const LoginStyle = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  margin: 0 24px;
  font-family: 'Saira Stencil One', cursive;
  color: white;

  h1 {
    font-size: 32px;
    margin-bottom: 32px;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  input {
    margin-bottom: 12px;
  }

  button {
    margin-bottom: 32px;
  }

  a {
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: white;
  }
`;