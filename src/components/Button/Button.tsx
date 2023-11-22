import React from "react";
import { css, cx } from "@emotion/css";
import { theme } from "../../theme/theme";
import { useTheme } from "../../hooks/useTheme";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    disabled?: boolean;
}

export const Button = ({
    children,
    disabled = false,
    ...props
}: ButtonProps): JSX.Element => {
    const { isDarkMode, isMobileView } = useTheme();
    return (
        <button
            disabled={disabled}
            className={cx(
                disabled,
                styles.button(isDarkMode, isMobileView, disabled),
                props.className,
            )}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        >
            {children}
        </button>
    );
};

const styles = {
    button: (isDarkMode: boolean, isMobileView: boolean, disabled: boolean) => {
        const minSizes = isMobileView ? 20 : 35;
        return css`
            background-color: ${disabled
                ? theme.colors.grey
                : theme.colors.yellow};
            color: ${theme.colors.black};
            border: 1px solid transparent;
            // font family to Exo
            font-family: "Exo", sans-serif;
            border-radius: 20px;
            padding: 8px 16px;
            font-size: 16px;
            cursor: ${disabled ? "not-allowed" : "pointer"};
            transition: all 0.2s ease-in-out;
            min-height: ${minSizes}px;
            min-width: ${minSizes}px;
            width: fit-content;
            height: fit-content;
            ${!disabled &&
            `&:hover {
                border: 1px solid ${theme.colors.yellow};
                background-color: ${
                    isDarkMode ? theme.colors.black : theme.colors.white
                };
                color: ${isDarkMode ? theme.colors.yellow : theme.colors.black};
                }
            }`}
            &:active {
                background-color: ${theme.colors.yellow};
                color: ${theme.colors.black};
            }
        `;
    },
};
