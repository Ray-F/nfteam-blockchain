import React from "react";
import MainRouter from "./MainRouter";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@material-ui/core";
import theme from "../utils/theme";
import "normalize.css";
import "../styling/style.scss";

import HeaderBar from "../components/HeaderBar";

export default function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <HeaderBar />
          <MainRouter />
        </RecoilRoot>
      </ThemeProvider>
    </React.Fragment>
  );
}
