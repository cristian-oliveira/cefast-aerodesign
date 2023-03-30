import { Theme, createTheme } from "@mui/material";

const factoryMartinsMui = (): Theme =>
    createTheme({
        palette: {
            background: { default: backgroundColor, paper: surface },
            error: { main: error },
            success: { main: success },
            primary: {
                main: currentTheme.primary,
                dark: currentTheme.primaryRange[300],
                ...currentTheme.primaryRange,
            },
            secondary: {
                main: currentTheme.secondary,
                dark: currentTheme.secondaryRange[300],
                ...currentTheme.secondaryRange,
            },
            text: {
                primary: currentTheme.textColor,
                disabled: disable,
                secondary: textMedium,
                ...currentTheme.secondaryRange,
            },
        },
    });