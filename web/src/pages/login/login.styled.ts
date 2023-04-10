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

export const Main = styled.main`
  width: 45rem;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const OutlinedButton = styled.button`
  width: 100%;
  height: 5rem;
  border-radius: 50rem;
  border: 2px solid var(--gray);
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--light-gray);
  cursor: pointer;
  margin: 0.5rem 0;
  background: transparent;
  transition: all ease 0.5s;

  svg {
    width: 2rem;
    height: 2rem;
    padding-right: 1.5rem;
  }

  &:hover {
    background: var(--light-gray);
    border-color: var(--light-gray);
    color: var(--white);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  width: 100%;
  margin: 0.5rem 0;
`;

export const FormCheckbox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 2rem 0;
  border-bottom: 0.1rem solid var(--light-gray);
`;

export const NoAccount = styled.h1`
  text-align: center;
  font-size: 1.8rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;
