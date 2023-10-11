import React, { MouseEventHandler } from "react";
import { css } from "@emotion/css";
import { Loader } from "../Loader";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    theme?: "Primary" | "Secondary" | "Destructive";
    disabled?: boolean;
    isLoading?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    // rest of button props
    rest?: any;
}

export const Button = ({
    children,
    onClick,
    theme = "Primary",
    disabled = false,
    isLoading = false,
    rest,
}: Props): JSX.Element => {
    return (
        <button
            disabled={disabled || isLoading}
            className={styles.button(isLoading, disabled, theme)}
        >
            {children}
            {isLoading && <Loader />}
        </button>
    );
};

const styles = {
    button: (
        isLoading: boolean,
        disabled: boolean,
        theme: "Primary" | "Secondary" | "Destructive",
    ) => css`
        background-color: #fff;
        border: 1px solid #000;
        border-radius: 4px;
        padding: 8px 16px;
        font-size: 16px;
        cursor: pointer;
        background-color: #383e47;
        box-shadow:
            inset 0 0 0 1px hsla(0, 0%, 100%, 0.1),
            0 1px 2px rgba(17, 20, 24, 0.2);
        color: #f6f7f9;
    `,
};
