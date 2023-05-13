import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 200px;
  width: 550px;
  background-color: transparent;
  border-radius: 3px;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 560px) {
    flex-wrap: wrap;
    width: 200px;
    height: 550px;
  }
`;
