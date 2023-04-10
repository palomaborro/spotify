import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import TextField from "../../components/inputs/text-field/default";
import Button from "../../components/button/default";
import BlackLogoIcon from "../../images/black-logo";
import {
  Container,
  LogoWrapper,
  Main,
  OutlinedButton,
  Form,
  InputContainer,
  FormCheckbox,
  NoAccount,
} from "./login.styled";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<{ message?: string }>({});

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3977/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        localStorage.setItem("token", token);
        navigate("/");
      } else {
        setError({
          message: "Error trying to login. Please check your credentials.",
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
          <BlackLogoIcon width={150} />
        </Link>
      </LogoWrapper>
      <Main>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <TextField
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              label="Email"
              placeholder="Email"
              name="email"
              value={email}
              error={error}
              required={true}
            />
          </InputContainer>
          <InputContainer>
            <TextField
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              label="Password"
              placeholder="Password"
              name="password"
              value={password}
              error={error}
              type="password"
              required={true}
            />
          </InputContainer>
          <FormCheckbox>
            <Button type="submit" label="LOG IN" width="100%" />
          </FormCheckbox>
        </Form>
        <NoAccount>Don't have an account?</NoAccount>
        <Link to="/signup">
          <OutlinedButton>sign up for spotify</OutlinedButton>
        </Link>
      </Main>
    </Container>
  );
};

export default Login;
