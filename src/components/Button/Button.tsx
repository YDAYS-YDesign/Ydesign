import React, { MouseEventHandler } from "react";
import { css } from "@emotion/css";

interface Props {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({}: Props): JSX.Element => {
    return <button className={styles.button}></button>;
};

const styles = {
    button: css`
        background-color: #fff;
        border: 1px solid #000;
        border-radius: 4px;
        padding: 8px 16px;
        font-size: 16px;
        cursor: pointer;
    `,
};
