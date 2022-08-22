import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const StepSide = styled.aside`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 32px;
  padding-top: 16px;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  height: 100vh;
  width: 300px;
`;

export const Main = styled.main`
  padding: 32px 16px;
  height: 100vh;

  header {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    small {
      font-weight: light;
      font-size: 14px;
    }
    span {
      font-weight: light;
      font-size: 14px;
    }
    small,
    span {
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;
