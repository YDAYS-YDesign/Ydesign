import { addons } from "@storybook/addons";
import theme from "./theme";

addons.setConfig({
    panelPosition: "right",
    showNav: true,
    showPanel: true,
    showToolbar: true,
    sidebar: {
        showRoots: true,
    },
    theme: theme,
});
