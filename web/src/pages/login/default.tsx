import React, { useState, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";

import TextField from "../../components/inputs/text-field/default";
import Button from "../../components/button/default";
import WhiteLogoIcon from "../../images/white-logo";
import {
  Container,
  LogoWrapper,
  Main,
  OutlinedButton,
  Form,
  InputContainer,
  ButtonWrapper,
  NoAccount,
  ErrorMessage,
} from "./login.styled";
import { Errors, ProfileData } from "./login.types";

import { UserContext } from "../../utils/user-context";
import {
  EMAIL_REGEX,
  PASSWORD_REGEX,
  FIELD_ERROR_MESSAGES,
} from "../../utils/constants";
import { handleInputChange } from "../../utils/input-handlers";

const Login = () => {
  const [data, setData] = useState<ProfileData>({
    email: "",
    newPassword: "",
  });
  const [error, setError] = useState<Errors>({
    email: "",
    password: "",
  });

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const requestBody = {
        email: data.email,
        password: data.newPassword,
        gethash: "true",
      };

      const response = await fetch("http://localhost:3977/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        const userId = data.user._id;
        const userRole = data.user.role;

        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("userRole", userRole);
        setUser({ userId, token, isAuthenticated: true, userRole });
        navigate("/");
      } else {
        setError({
          message: "Your email or password is incorrect.",
        });
      }
    } catch (error) {
      setError({
        message: "Error trying to login. Please check your credentials.",
      });
    }
  };

  return (
    <Container>
      <LogoWrapper>
        <Link to="/">
          <WhiteLogoIcon width={150} />
        </Link>
      </LogoWrapper>
      <Main>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <TextField
              onChange={(e) =>
                handleInputChange(
                  e,
                  "email",
                  setData,
                  setError,
                  FIELD_ERROR_MESSAGES,
                  EMAIL_REGEX
                )
              }
              label="Email"
              placeholder="Email"
              name="email"
              value={data.email}
              error={error}
              required={true}
            />
          </InputContainer>
          <InputContainer>
            <TextField
              onChange={(e) =>
                handleInputChange(
                  e,
                  "newPassword",
                  setData,
                  setError,
                  FIELD_ERROR_MESSAGES,
                  PASSWORD_REGEX
                )
              }
              label="Password"
              placeholder="Password"
              name="newPassword"
              value={data.newPassword}
              error={error}
              type="password"
              required={true}
            />
          </InputContainer>
          {error.message && <ErrorMessage>{error.message}</ErrorMessage>}
          <ButtonWrapper>
            <Button type="submit" label="LOG IN" width="100%" />
          </ButtonWrapper>
        </Form>
        <NoAccount>Don't have an account?</NoAccount>
        <Link to="/sign-up">
          <OutlinedButton>sign up for spotify</OutlinedButton>
        </Link>
      </Main>
    </Container>
  );
};

export default Login;
