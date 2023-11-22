import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import { useTheme } from "emotion-theming";
import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
    parameters: {
        darkMode: {
            dark: {
                ...themes.dark,
                barBg: "#202020", // override top toolbar
                appBg: "#202020",
                appContentBg: "#202020",
                appPreviewBg: "#202020",
            },
            light: { ...themes.normal, appBg: "white", appPreviewBg: "white" },
        },
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        withThemeByClassName({
            // comment this out to disable addon-themes, along with the addon in main.ts
            themes: {
                light: "light-theme",
                dark: "dark-theme",
            },
            defaultTheme: "light",
        }),
    ],
};

export default preview;
