// @ts-nocheck
import React, { useState, useEffect } from "react";

import TextField from "../inputs/text-field/default";
import FileInput from "../inputs/file-input/default";
import Button from "../button/default";

import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import {
  Container,
  FormContainer,
  InputContainer,
} from "./playlist-model.styled";
import "./playlist-model.styles.scss";

const PlaylistModel = ({ closeModel, playlist }: any) => {
  const [data, setData] = useState({
    name: "",
    desc: "",
    img: "",
  });

  useEffect(() => {
    setData({ name: playlist.name, desc: playlist.desc, img: playlist.img });
  }, [playlist]);

  const handleInputState = (name: string, value: string) => {
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <IconButton className="close_btn" onClick={closeModel}>
        <CloseIcon />
      </IconButton>
      <FormContainer>
        <h1>Edit Details</h1>
        <InputContainer>
          <TextField
            label="Name"
            name="name"
            value={data.name}
            handleInputState={handleInputState}
          />
        </InputContainer>
        <InputContainer>
          <TextField
            label="Description"
            name="desc"
            value={data.desc}
            handleInputState={handleInputState}
          />
        </InputContainer>
        <InputContainer>
          <FileInput
            label="Choose Image"
            type="image"
            name="img"
            value={data.img}
            handleInputState={handleInputState}
          />
        </InputContainer>
        <Button
          label="Submit"
          onClick={handleSubmit}
          style={{
            position: "absolute",
            bottom: "0",
            right: "0",
            margin: "1rem",
          }}
        />
      </FormContainer>
    </Container>
  );
};

export default PlaylistModel;
