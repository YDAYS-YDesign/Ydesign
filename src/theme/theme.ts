export let theme = {
    colors: {
        // primary is violet
        primary: "#A58CFF",
        // secondary is blue cyan
        secondary: "#8CC4FF",
        // tertiary is yellow
        yellow: "#FFE047",
        // other colors
        black: "#111111",
        white: "#FFFFFF",
        disabled: "#AAAAAA",
        border: "#969696",
        lightPrimary: "#D2C5FF",
        error: "#FF4444",
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
