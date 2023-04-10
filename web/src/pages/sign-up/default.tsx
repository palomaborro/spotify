import React, { useState } from "react";

import { Link } from "react-router-dom";

import TextField from "../../components/inputs/text-field/default";
import FileInput from "../../components/inputs/file-input/default";
import Button from "../../components/button/default";
import BlackLogoIcon from "../../images/black-logo";
import {
  Container,
  LogoWrapper,
  Header,
  Form,
  InputContainer,
  TermsAndConditions,
  SubmitButtonWrapper,
} from "./sign-up.styled";
import { Errors, SignUpData } from "./sign-up.types";

const SignUp = () => {
  const [data, setData] = useState<SignUpData>({
    email: "",
    password: "",
    name: "",
    surname: "",
    image: null,
  });
  const [error, setError] = useState<Errors>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("surname", data.surname);
      formData.append("email", data.email);
      formData.append("password", data.password);
      if (data.image) {
        formData.append("image", data.image);
      }

      const response = await fetch("http://localhost:3977/sign-up", {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json();

      if (response.ok) {
        window.location.href = "/login";
      } else {
        setError({
          message:
            responseData.message ||
            "Error trying to sign up. Please try again.",
        });
      }
    } catch (error) {
      setError({ message: "Error trying to sign up. Please try again." });
    }
  };

  return (
    <Container>
      <LogoWrapper>
        <BlackLogoIcon width={150} />
      </LogoWrapper>
      <Header>Sign up for free to start listening.</Header>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <TextField
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
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
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
            label="Password"
            placeholder="Password"
            name="password"
            value={data.password}
            error={error}
            type="password"
            required={true}
          />
        </InputContainer>
        <InputContainer>
          <TextField
            onChange={(e) => {
              setData({ ...data, name: e.target.value });
            }}
            label="Name"
            placeholder="Name"
            name="name"
            value={data.name}
            error={error}
            required={true}
          />
        </InputContainer>
        <InputContainer>
          <TextField
            onChange={(e) => {
              setData({ ...data, surname: e.target.value });
            }}
            label="Surname"
            placeholder="Surname"
            name="name"
            value={data.surname}
            error={error}
            required={true}
          />
        </InputContainer>
        <InputContainer>
          <FileInput
            onChange={(e) => {
              setData({
                ...data,
                image: e.target.files ? e.target.files[0] : null,
              });
            }}
            label="Profile Image"
            type="file"
          />
        </InputContainer>
        <TermsAndConditions>
          By clicking on sign-up, you agree to Spotify's{" "}
          <a href="/#">Terms and Conditions of Use.</a>
        </TermsAndConditions>
        <TermsAndConditions>
          To learn more about how Spotify collects, uses, shares and protects
          your personal data, please see{" "}
          <a href="/#">Spotify's Privacy Policy.</a>
        </TermsAndConditions>
        <SubmitButtonWrapper>
          <Button label="Sign Up" type="submit" />
        </SubmitButtonWrapper>
        <TermsAndConditions style={{ fontSize: "1.6rem" }}>
          Have an account? <Link to="/login"> Log in.</Link>
        </TermsAndConditions>
      </Form>
    </Container>
  );
};

export default SignUp;
