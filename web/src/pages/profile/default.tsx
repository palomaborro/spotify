import React, { useState, useContext, useEffect } from "react";

import { Link } from "react-router-dom";

import TextField from "../../components/inputs/text-field/default";
import FileInput from "../../components/inputs/file-input/default";
import Button from "../../components/button/default";
import BlackLogoIcon from "../../images/black-logo";

import {
  Title,
  Form,
  Input,
  ButtonWrapper,
  Container,
  LogoWrapper,
  TitleWrapper,
  SuccessMessage,
} from "./profile.styled";
import { ProfileData, Errors } from "./profile.types";

import { UserContext } from "../../utils/user-context";

const Profile = () => {
  const [data, setData] = useState<ProfileData>({
    email: "",
    newPassword: "",
    name: "",
    surname: "",
    image: null,
  });
  const [error, setError] = useState<Errors>({});
  const [successMessage, setSuccessMessage] = useState<string | undefined>("");
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [titleImageURL, setTitleImageURL] = useState<string | undefined>(
    undefined
  );
  const [formImageURL, setFormImageURL] = useState<string | undefined>(
    undefined
  );
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = user.token;
        const userId = user.userId;

        const response = await fetch(
          `http://localhost:3977/profile/${userId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const responseData = await response.json();

        if (!response.ok) {
          setError({
            message:
              responseData.message ||
              "Error trying to fetch user data. Please try again.",
          });
        } else {
          setData({
            email: responseData.user.email,
            name: responseData.user.name,
            surname: responseData.user.surname,
            newPassword: "",
            image: responseData.user.image,
          });

          setTitleImageURL(responseData.user.image);
        }
      } catch (error) {
        setError({
          message: "Error trying to fetch user data. Please try again.",
        });
      }
    };
    fetchUserData();
  }, [user.token, user.userId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("surname", data.surname);
      formData.append("email", data.email);
      formData.append("newPassword", data.newPassword);
      if (data.image) {
        formData.append("image", data.image);
      }

      const token = user.token;
      const userId = user.userId;

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
      } else {
        setSuccessMessage("Profile info updated successfully!");
        setShowSuccessMessage(true);
      }
    } catch (error) {
      setError({
        message: "Error trying to change your profile info. Please try again.",
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
      <TitleWrapper>
        <div>
          <Title>{`Hi ${data.name}!`} </Title>
          <h2>Want to modify something?</h2>
        </div>
        {titleImageURL && <img src={titleImageURL} alt="user" />}
      </TitleWrapper>
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
            required={false}
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
            required={false}
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
            required={false}
          />
        </Input>
        <Input>
          <TextField
            onChange={(e) => {
              setData({ ...data, newPassword: e.target.value });
            }}
            label="Password"
            placeholder="Password"
            name="password"
            value={data.newPassword}
            error={error}
            type="password"
            required={false}
          />
        </Input>
        <Input isImage>
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
            label="Change image"
            type="file"
          />
          {formImageURL ? (
            <img src={formImageURL} alt="user" />
          ) : (
            titleImageURL && <img src={titleImageURL} alt="user" />
          )}
        </Input>
        {showSuccessMessage && (
          <SuccessMessage>{successMessage}</SuccessMessage>
        )}
        <ButtonWrapper>
          <Button label="Update" type="submit" />
        </ButtonWrapper>
      </Form>
    </Container>
  );
};

export default Profile;
