import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  img {
    border-radius: 50rem;
    object-fit: cover;
    width: 20rem;
    height: 20rem;
  }

  h2 {
    color: #b3b3b3;
    margin: 3rem 0;
    font-size: 2rem;
  }
`;
