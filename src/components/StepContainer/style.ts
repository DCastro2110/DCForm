import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: calc(100vh - 172px);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StepSide = styled.aside`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 32px;
  padding: 16px 0 0 16px;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  min-height: 100%;
  min-width: 250px;
  max-width: 250px;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    border-right: none;
    min-width: 100%;
    gap: 16px;
    padding: 16px 12px 0 12px;
  }

  @media (max-width: 375px) {
    gap: 4px;
  }
`;

export const Main = styled.main`
  padding: 32px 16px;
  height: 100%;
  font-size: 1.6rem;

  header {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    h2 {
      @media (max-width: 576px) {
        font-size: 2rem;
      }
    }
    small {
      font-weight: light;
      font-size: 1.4rem;
    }
    span {
      font-weight: light;
      font-size: 1.4rem;
    }
    small,
    span {
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;
