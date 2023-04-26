import { createTheme } from "@mui/material";
import colors from "./colors";

const factoryMui = () =>
  createTheme({
    palette: {
      background: { default: colors.black, paper: colors.white },
      error: { main: colors.defaultRed },
      success: { main: colors.defaultGreen },
      primary: {
        main: colors.defaultOrange,
        dark: colors.orangeRange[300],
        ...colors.orangeRange,
      },
      secondary: {
        main: colors.defaultBlackFriday,
        dark: colors.blackFridayRange[600],
        ...colors.blackFridayRange,
      },
      text: {
        primary: colors.black,
        disabled: colors.defaultGray,
        secondary: colors.defaultGray,
        ...colors.blackFridayRange,
      },
    },
  });

export { factoryMui };
