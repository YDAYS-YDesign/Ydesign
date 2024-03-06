import { create } from "@storybook/theming/create";
import { theme } from "../src/theme/theme";

export default create({
    brandTitle: "My custom Storybook",
    brandUrl: "google.com",
    brandImage: "https://storybook.js.org/images/placeholders/350x150.png",

    base: "dark",
    colorPrimary: theme.colors.primary,
    colorSecondary: theme.colors.secondary,
});
