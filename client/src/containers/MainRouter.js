import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Box } from "@material-ui/core";
import Sidebar from "../components/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import IndexPage from "./pages/IndexPage";

const useStyles = makeStyles(() => ({
  app: {
    height: "100vh",
    width: "100vw",
    overflowX: "hidden",
  },
}));

export default function MainRouter() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Box display="flex" flexDirection="row" className={classes.app}>
        <Sidebar />
        <Switch>
          <Route exact path={"/"} component={IndexPage} />

          {/* Default path if nothing matches */}
          <Route path={"/"} component={IndexPage} />
        </Switch>
      </Box>
    </BrowserRouter>
  );
}
