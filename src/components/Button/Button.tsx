import React from "react";
import { css, cx } from "@emotion/css";
import { useTheme } from "../../hooks/useTheme";
import { Sizes, getSizeStyles } from "../../theme/commonStyling";
import { theme } from "../../theme/theme";

export type ButtonVariant = "primary" | "secondary";
export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: Sizes;
    children?: React.ReactNode;
    disabled?: boolean;
    suffix?: React.ReactNode;
    rounded?: boolean;
}

export const Button = ({
    children,
    className,
    variant = "primary",
    size = "medium",
    disabled = false,
    rounded = false,
    ...rest
}: ButtonProps): JSX.Element => {
    const { isMobileView, isDarkMode } = useTheme();
    console.log(
        `${disabled ? `background-color: ${theme.colors.disabled};` : ""}`,
    );
    return (
        <button
            disabled={disabled}
            className={cx(
                className,
                styles.button(size, variant, isDarkMode, rounded),
            )}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
        >
            {children}
            {rest.suffix}
        </button>
    );
};

const styles = {
    button: (
        size: Sizes,
        variant: ButtonVariant,
        isDarkMode: boolean,
        rounded: boolean,
    ) => {
        const { fontSize, padding, minSizes } = getSizeStyles(size);
        return css`
            background: none;
            color: inherit;
            border: none;
            padding: 0;
            font: inherit;
            outline: inherit;

            // center text inside button
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5px;

            // custom button styles
            ${minSizes}
            font-family: "Gill Sans", sans-serif;
            user-select: none;
            ${variant == "primary"
                ? `background-color: ${theme.colors.primary};`
                : `background-color: ${theme.colors.secondary};`}
            color: ${theme.colors.white};
            border-radius: ${rounded ? "50px" : "8px"};
            padding: ${padding};
            font-size: ${fontSize}px;
            border: 0px solid
                ${isDarkMode ? theme.colors.black : theme.colors.white};
            &:active {
                transform: scale(0.98);
            }
            transition-timing-function: cubic-bezier(0.35, 0, 0.27, 0.96);
            transition-duration: 0.2s;
            transition-property: all;
            cursor: pointer;
            &: hover {
                background-color: ${variant == "primary"
                    ? theme.colors.primary
                    : theme.colors.secondary};
            }
            &:focus {
                outline: "2px dotted transparent";
                outline-offset: 2px;
                box-shadow:
                    0 0 0 2px
                        ${isDarkMode ? theme.colors.black : theme.colors.white},
                    0 0 0px 5px
                        ${variant == "primary"
                            ? theme.colors.primary
                            : theme.colors.secondary};
            }
            &:disabled {
                background-color: ${theme.colors.disabled};
                cursor: not-allowed;
            }
            height: 30px;
        `;
    },
};
