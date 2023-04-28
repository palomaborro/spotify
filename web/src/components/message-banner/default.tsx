import React, { FC, useState } from "react";

import ClearIcon from "@mui/icons-material/Clear";

import {
  MessageBannerContainer,
  Message,
  IconWrapper,
} from "./message-banner.styled";
import { MessageBannerProps } from "./message-banner.types";

const MessageBanner: FC<MessageBannerProps> = ({ message }) => {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <MessageBannerContainer>
      <Message>{message}</Message>
      <IconWrapper>
        <ClearIcon onClick={() => setIsOpen(false)} />
      </IconWrapper>
    </MessageBannerContainer>
  ) : null;
};

export default MessageBanner;
