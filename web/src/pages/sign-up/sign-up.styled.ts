import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  padding: 4rem 0;
`;

export const LogoWrapper = styled.div`
  width: 14rem;
  margin-bottom: 1rem;
`;

export const Header = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 3rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  width: 45rem;
  margin: 0.5rem 0;
`;

export const TermsAndConditions = styled.p`
  width: 45rem;
  font-size: 1.2rem;
  line-height: 1.8rem;
  font-weight: 500;
  text-align: center;
  margin: 0.8rem 0;

  a {
    text-decoration: underline;
    color: var(--dark-green);
  }
`;

export const SubmitButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45rem;
  margin: 1rem 0 1.5rem 0;

  button {
    width: 15rem;
    height: 5.6rem;
  }
`;
