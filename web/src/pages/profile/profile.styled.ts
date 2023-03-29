import styled from "styled-components";

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  margin-left: 3rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2rem 3rem;
`;

export const Input = styled.div`
  width: 45rem;
  margin: 0.5rem 0;
`;

export const DateOfBirthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 45rem;
  margin: 0.5rem 0;

  p {
    margin: 0.5rem 0;
    font-weight: 500;
    font-size: 1.4rem;
  }
`;

export const DateOfBirth = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  p {
    font-weight: normal;
  }
`;

export const Month = styled.div`
  width: 40%;
`;

export const Day = styled.div`
  width: 20%;
`;

export const Year = styled.div`
  width: 30%;
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
