import styled from "styled-components";

export const Container = styled.div`
  width: 16rem;
  padding: 2rem;
  height: 26rem;
  background-color: var(--mini-black);
  border-radius: 1rem;
  margin: 1rem;
  cursor: pointer;

  img {
    width: 16rem;
    height: 20rem;
    object-fit: cover;
  }

  p {
    font-size: 1.8rem;
    font-weight: 500;
    margin: 1rem 0;
  }

  span {
    font-size: 1.3rem;
    color: var(--light-white);
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    background-color: var(--light-black);
  }
`;
