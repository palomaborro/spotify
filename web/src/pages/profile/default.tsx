import React, { useState, useContext } from "react";

import TextField from "../../components/inputs/text-field/default";
import FileInput from "../../components/inputs/file-input/default";
import Button from "../../components/button/default";

import { Title, Form, Input, ButtonWrapper } from "./profile.styled";
import { ProfileData, Errors } from "./profile.types";

import { UserContext } from "../../utils/user-context";

const Profile = () => {
  const [data, setData] = useState<ProfileData>({
    email: "",
    password: "",
    name: "",
    surname: "",
    image: null,
  });
  const [error, setError] = useState<Errors>({});

  const { user } = useContext(UserContext);

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

      const token = user.token;
      const userId = user.userId;
      console.log("sign up token", token);
      console.log("sign up userId", userId);

      const response = await fetch(`http://localhost:3977/profile/${userId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const responseData = await response.json();

      if (!response.ok) {
        setError({
          message:
            responseData.message ||
            "Error trying to change your profile info. Please try again.",
        });
      }
    } catch (error) {
      setError({
        message: "Error trying to change your profile info. Please try again.",
      });
    }
  };

  return (
    <div>
      <Title>Profile</Title>
      <Form onSubmit={handleSubmit}>
        <Input>
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
        </Input>
        <Input>
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
        </Input>
        <Input>
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
        </Input>
        <Input>
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
        </Input>
        <ButtonWrapper>
          <Button label="Update" type="submit" />
        </ButtonWrapper>
      </Form>
    </div>
  );
};

export default Profile;
