import React from "react";
import { css, cx } from "@emotion/css";
import { useTheme } from "../../hooks/useTheme";
import { Sizes, getSizeStyles } from "../../theme/commonStyling";
import { Theme } from "../../theme/theme";
import { IconType } from "../../types/IconType";
import { Icon } from "../Icon/Icon";

export type ButtonVariant = "primary" | "secondary";
export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: Sizes;
    children?: React.ReactNode;
    disabled?: boolean;
    suffix?: IconType;
    suffixColor?: string;
    rounded?: boolean;
}

export const Button = ({
    children,
    className,
    variant = "primary",
    size = "medium",
    disabled = false,
    rounded = true,
    suffix,
    suffixColor = "black",
    content,
    ...rest
}: ButtonProps): JSX.Element => {
    const { theme,isDarkMode  } = useTheme();
    return (
        <button
            disabled={disabled}
            className={cx(
                className,
                styles.button(size, variant, rounded, theme, disabled),
            )}
            {...rest}
        >
            <span>texte demo</span>
            {suffix && <Icon iconName={suffix} color={suffixColor} />}
        </button>
    );
};

const styles = {
    button: (
        size: Sizes,
        variant: ButtonVariant,
        rounded: boolean,
        theme: Theme,
        disabled?: boolean,
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
                ? `background-color: ${theme.colors.primary}`
                : `background-color: ${theme.colors.white}`};
            color: ${theme.colors.black};
            border-radius: ${rounded ? "50px" : "8px"};
            padding: ${padding};
            font-size: ${fontSize}px;
            &:active {
                transform: scale(0.98);
            }
            transition-timing-function: cubic-bezier(0.35, 0, 0.27, 0.96);
            transition-duration: 0.2s;
            transition-property: all;
            cursor: pointer;
            border: 2px solid
                ${disabled ? theme.colors.disabled : theme.colors.primary};
            &:hover {
                background-color: ${theme.colors.white};
                ${variant == "secondary" &&
                `border 4px solid ${theme.colors.primary}`};
            }

            &:disabled {
                background-color: ${theme.colors.disabled};
                cursor: not-allowed;
            }
            height: 30px;
        `;
    },
};
