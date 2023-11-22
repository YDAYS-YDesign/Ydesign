import React, { MouseEventHandler, useState } from "react";
import { css } from "@emotion/css";
import { theme } from "../../theme/theme";
import { useTheme } from "../../hooks/useTheme";

interface Props {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ text, disabled }: Props): JSX.Element => {
    const { isDarkMode } = useTheme();
    return (
        <button disabled={disabled} className={styles.button(isDarkMode)}>
            {text}
        </button>
    );
};

const styles = {
    button: (isDarkMode: boolean) => css`
        background-color: ${theme.colors.violet};
        color: ${theme.colors.black};
        border: 0px solid #000;
        border-radius: 25px;
        padding: 8px 16px;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:hover {
            border: 1px solid #000;
            background-color: ${isDarkMode
                ? theme.colors.black
                : theme.colors.white};
        }
    `,
};
