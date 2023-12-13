import { t } from "@storybook/theming/dist/create-df04f5c3";

export let theme = {
    colors: {
        // primary is violet
        primary: "#8d71fd",
        // secondary is blue cyan
        secondary: "#3589f4",
        // tertiary is yellow
        yellow: "#FFF7AE",
        // other colors
        black: "#2A2A2A",
        white: "#FFFFFF",
        disabled: "grey",
        border: "#969696",
        lightPrimary: "#D2C5FF",
        darkerDisabled: "#E5E5E5",
    },
    font: {
        family: `font-family: "Gill Sans", sans-serif;`,
        darkThemeText: `color: #FFFFFF;`,
        lightThemeText: `color: #000000;`,
    },
    shape: {},
    spacing: {},
};

export type Theme = typeof theme;
