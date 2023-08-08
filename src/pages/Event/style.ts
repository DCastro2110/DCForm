import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;

  input {
    display: none;

    &:checked + label {
      border: 1px solid #e2b72e;
      box-shadow: 0 0 10px -5px #e2b72e;
    }
  }

  label {
    padding: 32px 16px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    display: flex;
    align-items: center;
    gap: 16px;

    &:hover {
      border: 1px solid #e2b72e;
      box-shadow: 0 0 10px -5px #e2b72e;
    }
  }
`;

export const TextBox = styled.div`
  strong {
    display: block;
    font-weight: bold;
  }
`;

export const ImgBox = styled.div`
  width: 50px;
  height: 50px;
  padding: 8px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
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
