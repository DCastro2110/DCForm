import styled from "styled-components";

export const Form = styled.form`
  color: #fff;

  label {
    font-size: 14px;
  }

  input {
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background-color: transparent;
    margin: 12px 0;
    outline: none;
    color: #fff;

    &:focus {
      border: 1px solid #e2b72e;
      box-shadow: 0 0 10px -5px #e2b72e;
    }
  }
  button {
    padding: 16px 20px;
    border-radius: 10px;
    border: none;
    color: #fff;
    font-weight: bold;
    background-color: #e2b72e;
    transition: opacity 300ms ease-in-out;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 16px;

  button:nth-child(1) {
    background-color: transparent;
    border: none;
    color: #fff;
    padding: 16px 20px;
    cursor: pointer;
  }

  button:nth-child(2) {
    padding: 16px 20px;
    border-radius: 10px;
    border: none;
    color: #fff;
    font-weight: bold;
    background-color: #e2b72e;
    transition: opacity 300ms ease-in-out;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;
