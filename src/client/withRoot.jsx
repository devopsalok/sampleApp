import React from "react";
import {
  MuiThemeProvider,
  createMuiTheme,
  StylesProvider
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { transparentize } from "polished";
import colors from "./styles/colors";

export const rootTheme = {
  themeName: "82 tech meds",
  typography: {
    htmlFontSize: 10,
    useNextVariants: true
  },
  palette: {
    type: "dark",
    primary: { main: colors.blue3 },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      contrastText: "#ffcc00"
    },
    preferredHighlight: "#40C4FF",
    comparisonHighlight: "#F483FD",
    borderDefaultColor: "#0D47A1",
    borderActiveColor: "#2196F3",
    background: {
      default: colors.gray1
    }
  },
  overrides: {
    MuiTypography: {
      h3: {
        fontSize: 16
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: colors.gray2
      }
    },
    MuiSwitch: {
      colorsecondary: {
        "&$checked": {
          color: colors.blue3,
          "&:hover": {
            backgroundColor: transparentize(0.8, colors.blue3)
          }
        },

        "&$checked + $track": {
          backgroundColor: colors.blue5
        }
      }
    }
  }
};

export const muiRootTheme = createMuiTheme(rootTheme);

function withRoot(Component) {
  function WithRoot(props) {
    return (
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={muiRootTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...props} />
        </MuiThemeProvider>
      </StylesProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
