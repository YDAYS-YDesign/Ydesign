import React from "react";
import { css, cx } from "@emotion/css";
import { useTheme } from "../../hooks/useTheme";
import { Sizes, getSizeStyles } from "../../theme/commonStyling";
import { theme } from "../../theme/theme";

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    size?: Sizes;
    children?: React.ReactNode;
    rounded?: boolean;
}

export const Input = ({
    children,
    className,
    size = "medium",
    rounded = false,
    ...rest
}: InputProps): JSX.Element => {
    const { isDarkMode } = useTheme();
    return (
        <input
            className={cx(styles.input(size, isDarkMode, rounded), className)}
            {...rest}
        />
    );
};

const styles = {
    input: (size: Sizes, isDarkMode: boolean, rounded: boolean) => {
        const { fontSize, padding, minSizes } = getSizeStyles(size);

        return css`
            // reset input styles
            border: none;
            outline: none;
            background-color: transparent;
            font-family: inherit;
            font-size: inherit;
            color: inherit;
            padding: 0;
            margin: 0;

            // custom Input
            color: ${isDarkMode ? theme.colors.white : theme.colors.black};
            font-family: "Gill Sans", sans-serif;
            background-color: ${isDarkMode
                ? theme.colors.black
                : theme.colors.white};
            border: ${theme.colors.border} solid 2px;
            &:disabled {
                cursor: not-allowed;
                opacity: 0.5;
            }
            font-size: ${fontSize}px;
            ${minSizes}
            padding: 0 8px;
            border-radius: ${rounded ? "50px" : "8px"};
            transition-timing-function: cubic-bezier(0.35, 0, 0.27, 0.96);
            transition-duration: 0.2s;
            transition-property: all;
            &:focus {
                outline: "2px dotted transparent";
                outline-offset: 2px;
                box-shadow:
                    0 0 0 2px
                        ${isDarkMode ? theme.colors.black : theme.colors.white},
                    0 0 0px 5px ${theme.colors.primary};
            }
            &:hover {
                border: ${theme.colors.primary} solid 2px;
            }
        `;
    },
};
