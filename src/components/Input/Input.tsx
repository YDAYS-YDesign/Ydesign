import React from "react";
import { css, cx } from "@emotion/css";
import { useTheme } from "../../hooks/useTheme";
import { Sizes, getSizeStyles } from "../../theme/commonStyling";
import { Theme } from "../../theme/theme";

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    size?: Sizes;
    children?: React.ReactNode;
    suffix?: React.ReactNode;
    rounded?: boolean;
    width?: number;
}

export const Input = ({
    children,
    className,
    size = "medium",
    rounded = true,
    suffix,
    width,
    ...rest
}: InputProps): JSX.Element => {
    const { isDarkMode, theme } = useTheme();
    return (
        <div
            className={styles.container(
                size,
                rounded,
                theme,
                rest.disabled || false,
                width,
            )}
        >
            <input
                className={cx(styles.input(size, isDarkMode, theme), className)}
                {...rest}
            />
            {suffix && <div className={styles.suffix}>{suffix && suffix}</div>}
        </div>
    );
};

const styles = {
    suffix: css`
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;
    `,
    container: (
        size: Sizes,
        rounded: boolean,
        theme: Theme,
        isDisabled: boolean,
        width?: number,
    ) => {
        const { fontSize, minSizes } = getSizeStyles(size);

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
            color: ${theme.colors.black};
            font-family: "Gill Sans", sans-serif;
            background-color: ${theme.colors.white};
            border: ${isDisabled ? theme.colors.disabled : theme.colors.primary}
                solid 2px;
            &:disabled {
                cursor: not-allowed;
                opacity: 0.5;
            }
            font-size: ${fontSize}px;
            ${minSizes}
            padding: 0px 14px 0px 14px;
            border-radius: ${rounded ? "50px" : "8px"};
            transition-timing-function: cubic-bezier(0.35, 0, 0.27, 0.96);
            transition-duration: 0.2s;
            transition-property: all;
            // on focus within the first child input
            &:focus-within {
                outline: "2px dotted transparent";
                outline-offset: 2px;
                box-shadow: 0 0 0 2px ${theme.colors.primary};
                border-color: ${theme.colors.primary};
            }
            &:hover {
                border-color: ${theme.colors.primary};
            }
            width: ${width ? width + "px" : "100%"};
            height: 30px;
            gap: 5px;
            display: flex;
            flex-direction: row;
            align-items: center;
        `;
    },
    input: (size: Sizes, isDarkMode: boolean, theme: Theme) => {
        const { fontSize, minSizes } = getSizeStyles(size);

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
            color: ${theme.colors.black};
            font-family: "Gill Sans", sans-serif;
            background-color: ${theme.colors.white};
            &:disabled {
                cursor: not-allowed;
            }
            &:focus {
                border: none;
                outline: none;
                background-color: transparent;
                font-family: inherit;
                font-size: inherit;
                padding: 0;
                margin: 0;
            }
            width: 100%;
            height: 100%;
        `;
    },
};
