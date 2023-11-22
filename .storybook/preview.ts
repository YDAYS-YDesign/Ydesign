import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import { useTheme } from "emotion-theming";

const preview: Preview = {
    parameters: {
        darkMode: {
            dark: {
                ...themes.dark,
                barBg: "#202020", // override top toolbar
                appPreviewBg: themes.dark.appBg,
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
};

export default preview;
