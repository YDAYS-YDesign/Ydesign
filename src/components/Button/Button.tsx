import React from "react";
import { css, cx } from "@emotion/css";
import { theme } from "../../theme/theme";
import { useTheme } from "../../hooks/useTheme";
import { getFocusStyle } from "../../theme/commonStyling";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "small" | "medium" | "large";
export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children?: React.ReactNode;
    disabled?: boolean;
    suffix?: React.ReactNode;
}

export const Button = ({
    children,
    className,
    variant = "primary",
    size = "medium",
    disabled = false,
    ...rest
}: ButtonProps): JSX.Element => {
    const { isMobileView } = useTheme();
    return (
        <button
            disabled={disabled}
            className={cx(
                className,
                variant === "primary"
                    ? styles.primary(size, isMobileView, disabled)
                    : styles.secondary(size, isMobileView, disabled),
            )}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
        >
            {children}
            {rest.suffix}
        </button>
    );
};

const getSizeStyles = (size: ButtonSize) => {
    let fontSize = 16;
    switch (size) {
        case "small":
            fontSize = 12;
            break;
        case "medium":
            fontSize = 16;
            break;
        case "large":
            fontSize = 20;
            break;
    }
    let padding = "8px 16px";
    switch (size) {
        case "small":
            padding = "4px 12px";
            break;
        case "medium":
            padding = "6px 14px";
            break;
        case "large":
            padding = "8px 16px";
            break;
    }
    let sizes;
    switch (size) {
        case "small":
            sizes = "height: 25px;";
            break;
        case "medium":
            sizes = "height: 30px;";
            break;
        case "large":
            sizes = "height: 35px;";
            break;
    }
    return { fontSize, padding, minSizes: sizes };
};

const styles = {
    primary: (size: ButtonSize, isMobileView: boolean, disabled: boolean) => {
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
            background-color: ${disabled
                ? theme.colors.grey
                : theme.colors.yellow};
            color: ${theme.colors.text};
            border-radius: 40px;
            padding: ${padding};
            font-size: ${fontSize}px;
            cursor: ${disabled ? "not-allowed" : "pointer"};
            transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
            &:active {
                transform: scale(0.95);
            }
            &:focus {
                ${getFocusStyle()}
                background-color: ${theme.colors.yellow};
            }
        `;
    },
    secondary: (size: ButtonSize, isMobileView: boolean, disabled: boolean) => {
        const { fontSize, padding, minSizes } = getSizeStyles(size);
        return css`
            // reset default button styles
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
            font-family: "Gill Sans", sans-serif;
            user-select: none;
            background-color: ${disabled
                ? theme.colors.grey
                : theme.colors.violet};
            color: ${theme.colors.text};
            border-radius: 40px;
            padding: ${padding};
            font-size: ${fontSize}px;
            cursor: ${disabled ? "not-allowed" : "pointer"};
            transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
            ${minSizes}
            &:active {
                transform: scale(0.95);
            }
            &:focus {
                outline: "2px dotted transparent";
                outline-offset: "2px";
                box-shadow: 0 0 0px 4px ${theme.colors.actionViolet};
                background-color: ${theme.colors.violet};
            }
        `;
    },
};
