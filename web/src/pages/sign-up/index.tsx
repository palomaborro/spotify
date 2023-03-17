// @ts-nocheck
import React, { useState } from "react";

import { Link } from "react-router-dom";

import Joi from "joi";
import passwordComplexity from "joi-password-complexity";

import TextField from "../../components/inputs/text-field/index";
import Select from "../../components/inputs/select/index";
import Radio from "../../components/inputs/radio/index";
import Checkbox from "../../components/inputs/checkbox/index";
import Button from "../../components/button";
import BlackLogoIcon from "../../images/black-logo";
import {
  Container,
  LogoWrapper,
  Header,
  OrTextContainer,
  Form,
  FormHeader,
  InputContainer,
  DateOfBirthContainer,
  DateOfBirth,
  Month,
  Day,
  Year,
  CheckboxContainer,
  TermsAndConditions,
  SubmitButtonWrapper,
} from "./sign-up.styled";
import { Errors } from "./sign-up.types";

const months = [
  { name: "January", value: "01" },
  { name: "February", value: "02" },
  { name: "March", value: "03" },
  { name: "April", value: "04" },
  { name: "May", value: "05" },
  { name: "June", value: "06" },
  { name: "July", value: "07" },
  { name: "August", value: "08" },
  { name: "September", value: "09" },
  { name: "October", value: "10" },
  { name: "November", value: "11" },
  { name: "December", value: "12" },
];

const genders = ["male", "female", "non-binary"];

const SignUp = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    month: "",
    year: "",
    date: "",
    gender: "",
  });
  const [errors, setErrors] = useState<Errors>({});

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
    password: passwordComplexity().required().label("Password"),
    name: Joi.string().min(5).max(10).required().label("Name"),
  };

  const handleSubmit = async (e: any) => {
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
        <BlackLogoIcon />
      </LogoWrapper>
      <Header>Sign up for free to start listening.</Header>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <TextField
            label="What's your email?"
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
            label="Create a password"
            placeholder="Create a password"
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
        <InputContainer>
          <TextField
            label="What should we call you?"
            placeholder="Enter a profile name"
            name="name"
            handleInputState={handleInputState}
            schema={schema.name}
            handleErrorState={handleErrorState}
            value={data.name}
            error={errors.name}
            required={true}
          />
        </InputContainer>
        <DateOfBirthContainer>
          <p>What's your date of birth?</p>
          <DateOfBirth>
            <Month>
              <Select
                name="month"
                handleInputState={handleInputState}
                label="Month"
                placeholder="Months"
                options={months}
                value={data.month}
                required={true}
              />
            </Month>
            <Day>
              <TextField
                label="Date"
                placeholder="DD"
                name="date"
                value={data.date}
                handleInputState={handleInputState}
                required={true}
              />
            </Day>
            <Year>
              <TextField
                label="Year"
                placeholder="YYYY"
                name="year"
                value={data.year}
                handleInputState={handleInputState}
                required={true}
              />
            </Year>
          </DateOfBirth>
        </DateOfBirthContainer>
        <InputContainer>
          <Radio
            label="What's your gender?"
            name="gender"
            handleInputState={handleInputState}
            options={genders}
            required={true}
          />
        </InputContainer>
        <CheckboxContainer>
          <Checkbox
            required={true}
            label="Share my registration data with Spotify's content providers for marketing purposes."
          />
        </CheckboxContainer>
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
