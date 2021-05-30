import { createMuiTheme } from "@material-ui/core/styles";

const ccggBlue = {
  light: "#FFFFFF",
  main: "#F4F8FE",
  dark: "#B8B5FF",
};

const theme = createMuiTheme({
  palette: {
    primary: ccggBlue,
    type: "light",
  },
});

export default theme;
