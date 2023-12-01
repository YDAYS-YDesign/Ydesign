import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

const preview: Preview = {
    parameters: {
        darkMode: {
            dark: {
                ...themes.dark,
                appBg: "#202020",
                appContentBg: "#202020",
                appPreviewBg: "#202020",
            },
            light: { ...themes.normal, appBg: "white", appPreviewBg: "white" },
        },

    },
};

export default preview;
