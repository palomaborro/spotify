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

import {
  NAME_REGEX,
  SURNAME_REGEX,
  EMAIL_REGEX,
  PASSWORD_REGEX,
  FIELD_ERROR_MESSAGES,
} from "../../utils/constants";
import { handleInputChange, handleInputBlur } from "../../utils/input-handlers";

const SignUp = () => {
  const [data, setData] = useState<SignUpData>({
    email: "",
    newPassword: "",
    name: "",
    surname: "",
    image: null,
  });
  const [error, setError] = useState<Errors>({});
  const [formImageURL, setFormImageURL] = useState<string | undefined>(
    undefined
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("surname", data.surname);
      formData.append("email", data.email);
      formData.append("password", data.newPassword);
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
        <Link to="/">
          <BlackLogoIcon width={150} />
        </Link>
      </LogoWrapper>
      <Header>Sign up for free to start listening.</Header>
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
            onBlur={() => handleInputBlur("email", setError)}
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
            onBlur={() => handleInputBlur("newPassword", setError)}
          />
        </InputContainer>
        <InputContainer>
          <TextField
            onChange={(e) =>
              handleInputChange(
                e,
                "name",
                setData,
                setError,
                FIELD_ERROR_MESSAGES,
                NAME_REGEX
              )
            }
            label="Name"
            placeholder="Name"
            name="name"
            value={data.name}
            error={error}
            required={true}
            onBlur={() => handleInputBlur("name", setError)}
          />
        </InputContainer>
        <InputContainer>
          <TextField
            onChange={(e) =>
              handleInputChange(
                e,
                "surname",
                setData,
                setError,
                FIELD_ERROR_MESSAGES,
                SURNAME_REGEX
              )
            }
            label="Surname"
            placeholder="Surname"
            name="surname"
            value={data.surname}
            error={error}
            required={true}
            onBlur={() => handleInputBlur("surname", setError)}
          />
        </InputContainer>
        <InputContainer isImage>
          <FileInput
            onChange={(e) => {
              setData({
                ...data,
                image: e.target.files ? e.target.files[0] : null,
              });
              setFormImageURL(
                e.target.files
                  ? URL.createObjectURL(e.target.files[0])
                  : undefined
              );
            }}
            label="Profile Image"
            type="file"
          />
          {formImageURL && <img src={formImageURL} alt="user" width={100} />}
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
