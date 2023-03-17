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

export const OrTextContainer = styled.p`
  display: table;
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: 0.2rem;
  margin: 0px auto 1em;
  color: var(--light-white);
  position: relative;
  text-align: center;
  width: 40rem;
  margin: 2rem 0;

  &::before {
    border-top: 1px solid var(--light-white);
    content: "";
    display: table-cell;
    position: relative;
    top: 0.8em;
    width: 42%;
  }

  &::after {
    border-top: 1px solid var(--light-white);
    content: "";
    display: table-cell;
    position: relative;
    top: 0.8em;
    width: 42%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormHeader = styled.h2`
  font-size: 1.8rem;
  line-height: 2.6rem;
  text-align: center;
  margin-top: 0;
`;

export const InputContainer = styled.div`
  width: 45rem;
  margin: 0.5rem 0;
`;

export const DateOfBirthContainer = styled.div`
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

export const CheckboxContainer = styled.div`
  width: 45rem;
  margin: 1rem 0;
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
