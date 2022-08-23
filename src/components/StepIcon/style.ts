import styled from "styled-components";

type Props = {
  isActive: boolean;
};

export const Box = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  gap: 32px;
  cursor: pointer;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: start;
  width: 100px;

  small {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const ImgBox = styled.div<Props>`
  width: 50px;
  height: 50px;
  padding: 8px;
  border-radius: 50%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isActive ? "#77ca90" : "rgba(255, 255, 255, 0.6)"};

  img {
    width: 100%;
  }
`;

export const Circle = styled.div<Props>`
  width: 12px;
  height: 12px;
  margin-right: -6px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? "#77ca90" : "#020349")};
  ${(props) => props.isActive && "box-shadow: 0 0 5px 1px #77ca90"}
`;
