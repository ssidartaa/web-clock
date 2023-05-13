import { styled } from "styled-components";

export const Container = styled.div`
  height: 170px;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: rgba(5, 5, 5, 0.9);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.7);
  border-radius: 7px;
  letter-spacing: 3px;

  span {
    font-weight: bolder;
    font-size: 60px;
    cursor: default;
    user-select: none;
  }

  p.time {
    font-weight: bolder;
    font-size: 10px;
  }
`;
