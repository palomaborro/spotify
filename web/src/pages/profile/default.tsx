// @ts-nocheck
import React, { useState } from "react";

import Joi from "joi";

import TextField from "../../components/inputs/text-field/default";
import Select from "../../components/inputs/select/default";
import Radio from "../../components/inputs/radio/default";
import Button from "../../components/button/default";

import {
  Title,
  Form,
  Input,
  DateOfBirthWrapper,
  DateOfBirth,
  Month,
  Day,
  Year,
  ButtonWrapper,
} from "./profile.styled";

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

const Profile = () => {
  const [data, setData] = useState({
    email: "",
    name: "",
    month: "",
    year: "",
    date: "",
    gender: "",
  });
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
    name: Joi.string().min(5).max(10).required().label("Name"),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <Title>Profile</Title>
      <Form onSubmit={handleSubmit}>
        <Input>
          <TextField
            label="What's your email?"
            placeholder="Enter your email"
            name="email"
            handleInputState={handleInputState}
            value={data.email}
            required={true}
          />
        </Input>
        <Input>
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
        </Input>
        <DateOfBirthWrapper>
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
        </DateOfBirthWrapper>
        <Input>
          <Radio
            label="What's your gender?"
            name="gender"
            handleInputState={handleInputState}
            options={genders}
            value={data.gender}
            required={true}
          />
        </Input>
        <ButtonWrapper>
          <Button label="Update" type="submit" />
        </ButtonWrapper>
      </Form>
    </div>
  );
};

export default Profile;
