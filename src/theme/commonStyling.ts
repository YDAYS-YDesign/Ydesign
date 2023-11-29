import { css } from "@emotion/css";
import { theme } from "./theme";

export const getFocusStyle = () => css`
    &:focus {
        outline: "2px dotted transparent";
        outline-offset: "2px";
        box-shadow: 0 0 0px 4px ${theme.colors.actionOutline};
        border: 1px solid transparent !important;
        background-color: ${theme.colors.yellow};
    }
`;
