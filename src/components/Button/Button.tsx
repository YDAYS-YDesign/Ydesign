import React from "react";
import { css, cx } from "@emotion/css";
import { theme } from "../../theme/theme";
import { useTheme } from "../../hooks/useTheme";
import { getFocusStyle } from "../../theme/commonStyling";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "secondary";
    children?: React.ReactNode;
    disabled?: boolean;
}

export const Button = ({
    variant = "primary",
    disabled = false,
    children,
    className,
    ...rest
}: ButtonProps): JSX.Element => {
    const { isDarkMode, isMobileView } = useTheme();
    return (
        <button
            disabled={disabled}
            className={cx(
                disabled,
                className,
                styles.button(isDarkMode, isMobileView, disabled),
            )}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
        >
            {children}
        </button>
    );
};

const styles = {
    button: (isDarkMode: boolean, isMobileView: boolean, disabled: boolean) => {
        const minSizes = isMobileView ? 20 : 35;
        return css`
            user-select: none;
            color: theme.colors.black;
            background-color: ${disabled
                ? theme.colors.grey
                : theme.colors.yellow};
            border: 1px solid transparent;
            color: ${theme.colors.text};
            // font family to Exo
            border-radius: 20px;
            padding: 8px 16px;
            font-size: 16px;
            cursor: ${disabled ? "not-allowed" : "pointer"};
            transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
            min-height: ${minSizes}px;
            min-width: ${minSizes}px;
            width: fit-content;
            height: fit-content;
            ${!disabled &&
            `&:hover {
                    border: 1px solid ${theme.colors.yellow};
                }
            }`}
            ${getFocusStyle()}
        `;
    },
};
