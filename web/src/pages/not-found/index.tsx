import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Container,
  LeftElement,
  Main,
  Title,
  Description,
  RedirectLink,
  RightElement,
  RecordContainer,
} from "./not-found.styled";
import Record from "../../images/record";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <LeftElement>
        <Main>
          <Title>404s and heartbreaks</Title>
          <Description>
            We couldn't find the page you were looking for. Maybe our FAQ or
            Community can help?
          </Description>
          <RedirectLink onClick={() => navigate("/home")}>
            Go Back Home
          </RedirectLink>
        </Main>
      </LeftElement>
      <RightElement>
        <RecordContainer>
          <Record />
        </RecordContainer>
      </RightElement>
    </Container>
  );
};

export default NotFound;
