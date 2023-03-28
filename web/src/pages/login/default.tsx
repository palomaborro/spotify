// @ts-nocheck
import React, { useState } from "react";

import { Link } from "react-router-dom";

import Joi from "joi";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";

import TextField from "../../components/inputs/text-field/default";
import Checkbox from "../../components/inputs/checkbox/default";
import Button from "../../components/button/default";
import BlackLogoIcon from "../../images/black-logo";
import {
  Container,
  LogoWrapper,
  Main,
  Heading,
  ButtonContainer,
  OutlinedButton,
  OrContainer,
  Form,
  InputContainer,
  ForgetPassword,
  FormCheckbox,
  NoAccount,
} from "./login.styled";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleInputState = (name: string, value: string) => {
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleErrorState = (name: string, value: string) => {
    value === ""
      ? delete errors[name]
      : setErrors(() => ({ ...errors, [name]: value }));
  };

  const schema = {
    email: Joi.string().email({ tlds: false }).required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      console.log(data);
    } else {
      console.log("please fill out properly");
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
        <Heading>To continue, log in to Spotify.</Heading>
        <ButtonContainer style={{ background: "#3b5998" }}>
          <FacebookRoundedIcon /> continue with facebook
        </ButtonContainer>
        <ButtonContainer style={{ background: "#000" }}>
          <AppleIcon /> continue with apple
        </ButtonContainer>
        <OutlinedButton>
          <GoogleIcon /> continue with google
        </OutlinedButton>
        <OutlinedButton>Continue with phone number</OutlinedButton>
        <OrContainer>or</OrContainer>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <TextField
              label="Enter your email"
              placeholder="Enter your email"
              name="email"
              handleInputState={handleInputState}
              schema={schema.email}
              handleErrorState={handleErrorState}
              value={data.email}
              error={errors.email}
              required={true}
            />
          </InputContainer>
          <InputContainer>
            <TextField
              label="Password"
              placeholder="Password"
              name="password"
              handleInputState={handleInputState}
              schema={schema.password}
              handleErrorState={handleErrorState}
              value={data.password}
              error={errors.password}
              type="password"
              required={true}
            />
          </InputContainer>
          <ForgetPassword>Forgot your password?</ForgetPassword>
          <FormCheckbox>
            <Checkbox label="Remember me" />
            <Button
              type="submit"
              label="LOG IN"
              style={{ color: "white", background: "#15883e", width: "20rem" }}
            />
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
