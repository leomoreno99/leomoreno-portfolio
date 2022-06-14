import React from "react";
// import { Link } from 'react-router-dom';
import styled from "styled-components";

const ButtonStyle = styled.div`
  margin-right: 2rem;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  position: relative;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? "var(--primary)" : "var(--secondary)"};
    padding: 1.5rem 2em;
    display: inline-block;
    border: 2px solid var(--secondary);
    color: ${(props) =>
      props.outline ? "var(--secondary)" : "var(--primary)"};
    transition: 0.3s;
  }
  .button:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: var(--transition);
    border: 2px solid var(--secondary);
    box-sizing: border-box;
    top: 0px;
    left: 0px;
    z-index: -1;
  }
  .button:hover:after {
    top: 5px;
    left: 5px;
  }

  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.6rem;
      padding: 1.2rem 1.8em;
      text-align: center;
      position: relative;
    }
    .button:hover:after {
      top: 7px;
      left: 7px;
    }
  }
  @media only screen and (max-width: 480px) {
    margin-right: 0;
    .button {
      padding: 1.2rem;
      width: 100%;
    }
  }
`;

export default function Button({
  btnText = "Test",
  outline = false,
  onClick,
  target,
  revealButton = null,
}) {
  return (
    <ButtonStyle
      outline={outline}
      className="button-wrapper"
      ref={revealButton}
    >
      <div className="button" onClick={onClick} target={target}>
        {btnText}
      </div>
    </ButtonStyle>
  );
}
