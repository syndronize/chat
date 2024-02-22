import React, { useState } from "react";
import { BsEmojiSmileFill, BsPaperclip, BsCameraFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import styled from "styled-components";
import Picker from "emoji-picker-react";
import FailedModal from "./modal/FailedModal";


export default function ChatInput({ handleSendMsg, handleSendImage }) {
  const [msg, setMsg] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };
  const [showFailed, setShowFailed] = useState(false);
  const [file, setFile] = useState(null);

  // for image
  const [image, setImage] = useState("");

  const handleEmojiClick = (event, emojiObject) => {
    let message = msg;
    message += emojiObject.emoji;
    setMsg(message);
  };

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }

  };

  const handleFileClick = () => {
    document.getElementById("file").click();

  };

  const handleFileChange = (event) => {
    console.log(event.target.files[0].type.split('/')[0]);
    if (event.target.files[0].type.split('/')[0] === 'image') {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        handleSendImage(reader.result);
      };
      reader.readAsDataURL(file);

    } else {
      setShowFailed(true);
    }
  };

  const handleFileApplication = () => {
    document.getElementById("file-application").click();
  };

  const handleFileApplicationChange = (event) => {
  };

  return (
    <Container>
      <div className="button-container">
        <div className="emoji">
          <BsEmojiSmileFill onClick={handleEmojiPickerhideShow} />
          {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
        </div>
        <div className="file-picker">
          <BsCameraFill onClick={handleFileClick} />
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={(event) => handleFileChange(event)}
          />
        </div>
        <div className="file-picker">
          <BsPaperclip onClick={handleFileApplication} />
          <input
            type="file"
            id="file-application"
            style={{ display: "none" }}
            onChange={(event) => handleFileApplicationChange(event)}

          />
        </div>
      </div>
      <form className="input-container" onSubmit={(event) => sendChat(event)}>
        <input
          type="text"
          placeholder="type your message here"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
      <FailedModal pesan={"Only image file is allowed !"} isOpen={showFailed} onClose={() => setShowFailed(false)} />
    </Container>

  );
}

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 5% 95%;
  background-color: #080420;
  padding: 0 2rem;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    padding: 0 1rem;
    gap: 1rem;
  }
  .button-container {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    .file-picker {
      svg {
        font-size: 1.5rem;
        cursor: pointer;
      }
    }
    .emoji {
      position: relative;
      svg {
        font-size: 1.5rem;
        color: #ffff00c8;
        cursor: pointer;
      }
      .emoji-picker-react {
        position: absolute;
        top: -350px;
        background-color: #080420;
        box-shadow: 0 5px 10px #9a86f3;
        border-color: #9a86f3;
        .emoji-scroll-wrapper::-webkit-scrollbar {
          background-color: #080420;
          width: 5px;
          &-thumb {
            background-color: #9a86f3;
          }
        }
        .emoji-categories {
          button {
            filter: contrast(0);
          }
        }
        .emoji-search {
          background-color: transparent;
          border-color: #9a86f3;
        }
        .emoji-group:before {
          background-color: #080420;
        }
      }
    }
  }
  .input-container {
    width: 93%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: #ffffff34;
    margin-left: 4rem;
    input {
      width: 90%;
      height: 60%;
      background-color: transparent;
      color: white;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;

      &::selection {
        background-color: #9a86f3;
      }
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #9a86f3;
      border: none;
      @media screen and (min-width: 720px) and (max-width: 1080px) {
        padding: 0.3rem 1rem;
        svg {
          font-size: 1rem;
        }
      }
      svg {
        font-size: 2rem;
        color: white;
      }
    }
  }
`;
