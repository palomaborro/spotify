import styled from "styled-components";

export const Container = styled.div`
  color: #b3b3b3;
  display: flex;

  img {
    border-radius: 1rem;
    object-fit: cover;
    width: 20rem;
    height: 20rem;
    margin-top: 1rem;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 3rem 0;
`;

export const TitleAndYearWrapper = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  margin-right: 0.5rem;
`;

export const Year = styled.h1``;
