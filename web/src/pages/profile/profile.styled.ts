import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--light-white);

  img {
    width: 20rem;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  margin-top: 2rem;

  div {
    margin-right: 2rem;
  }

  img {
    border-radius: 50rem;
    object-fit: cover;
    width: 10rem;
    height: 10rem;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  margin-top: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2rem 3rem;
`;

export const Input = styled.div<{ isImage?: boolean }>`
  width: 45rem;
  margin: 0.5rem 0;
  display: ${({ isImage }) => (isImage ? "flex" : "")};

  img {
    border-radius: 50rem;
    object-fit: cover;
    width: 8rem;
    height: 8rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 45rem;
  margin: 2rem 0 1.5rem 0;

  button {
    width: 15rem;
    height: 4.5rem;
  }
`;
