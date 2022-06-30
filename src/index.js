import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyle";
import Typography from "./styles/Typography";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <>
    <GlobalStyles />
    <Typography />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
