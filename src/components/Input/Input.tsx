import React from "react";
import { css, cx } from "@emotion/css";
import { useTheme } from "../../hooks/useTheme";
import { Sizes, getSizeStyles } from "../../theme/commonStyling";
import { theme } from "../../theme/theme";

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
    rounded = false,
    suffix,
    width,
    ...rest
}: InputProps): JSX.Element => {
    const { isDarkMode } = useTheme();
    return (
        <div className={styles.container(size, isDarkMode, rounded, width)}>
            <input
                className={cx(
                    styles.input(size, isDarkMode, rounded, width),
                    className,
                )}
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
        isDarkMode: boolean,
        rounded: boolean,
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
            padding: 0px 10px 0px 12px;
            border-radius: ${rounded ? "50px" : "8px"};
            transition-timing-function: cubic-bezier(0.35, 0, 0.27, 0.96);
            transition-duration: 0.2s;
            transition-property: all;
            &:focus-within {
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
            width: ${width ? width + "px" : "100%"};
            height: 30px;
            gap: 5px;
            display: flex;
            flex-direction: row;
            align-items: center;
        `;
    },
    input: (
        size: Sizes,
        isDarkMode: boolean,
        rounded: boolean,
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
            color: ${isDarkMode ? theme.colors.white : theme.colors.black};
            font-family: "Gill Sans", sans-serif;
            background-color: ${isDarkMode
                ? theme.colors.black
                : theme.colors.white};
            &:disabled {
                cursor: not-allowed;
            }
            &:focus {
                border: none;
                outline: none;
                background-color: transparent;
                font-family: inherit;
                font-size: inherit;
                color: inherit;
                padding: 0;
                margin: 0;
            }
            width: 100%;
            height: 100%;
        `;
    },
};
