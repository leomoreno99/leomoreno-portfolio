import React from "react";
// import { Link } from 'react-router-dom';
import styled from "styled-components";

const ButtonStyle = styled.div`
  margin-right: 2rem;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? "transparent" : "var(--secondary)"};
    padding: 1.5rem 2em;
    /* border-radius: 3px; */
    display: inline-block;
    border: 2px solid var(--secondary);
    color: ${(props) =>
      props.outline ? "var(--secondary)" : "var(--primary)"};
    transition: 0.3s;
  }

  .button:hover {
    border: 2px solid var(--tertiary);
    color: var(--tertiary);
  }

  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.6rem;
      padding: 1.2rem 1.8em;
      text-align: center;
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
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <div className="button" onClick={onClick} target={target}>
        {btnText}
      </div>
    </ButtonStyle>
  );
}
