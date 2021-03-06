import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "index.css";
import { ThemeProvider } from "styled-components";
import { theme } from "theme";
import CatalogScreen from "screens/CatalogScreen";
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CatalogScreen />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
