import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import { theme } from "../src/theme/theme";

const preview: Preview = {
    parameters: {
        darkMode: {
            dark: {
                ...themes.dark,
                appBg: theme.colors.black,
                appContentBg: theme.colors.black,
                appPreviewBg: theme.colors.black,
                barBg: theme.colors.black,
            },
            light: { ...themes.normal, appBg: "white", appPreviewBg: "white" },
        },

    },
};

export default preview;

