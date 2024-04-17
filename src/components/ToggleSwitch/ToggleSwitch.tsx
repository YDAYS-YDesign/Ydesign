import React, { useState } from "react";
import { css, cx } from "@emotion/css";
import { theme } from "../../theme/theme";
import { log } from "console";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    primary?: boolean;
    disabled: boolean;
    forcedChecked?: boolean;
    buttonColor?: string;
}

const getRGBValues = (color: string): string => {
    const hex = color.replace(/^#/, "");
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
};

export const ToggleSwitch = ({
    disabled,
    forcedChecked,
    buttonColor = theme.colors.lightPrimary,
    ...props
}: Props): JSX.Element => {
    const [checked, setChecked] = useState(
        forcedChecked !== undefined ? forcedChecked : true,
    );
    const handleToggle = () => {
        const newCheckedState = !checked;
        setChecked(newCheckedState);
    };

    return (
        <label className={styles.container}>
            <input
                type="checkbox"
                checked={forcedChecked !== undefined ? forcedChecked : checked}
                disabled={disabled}
                onChange={handleToggle}
                className={styles.input}
            />
            <span
                className={cx(styles.toggle(checked, buttonColor, disabled))}
                {...props}
            ></span>
        </label>
    );
};

const styles = {
    container: css`
        position: relative;
        display: inline-block;
        width: 3rem;
        height: 1rem;
        margin-left: 1rem;
        z-index: 1;
    `,
    input: css`
        opacity: 0;
        width: 0;
        height: 0;
    `,

    toggle: (checked: boolean, buttonColor: string, disabled: boolean) => css`
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${disabled
            ? theme.colors.disabled
            : checked
              ? buttonColor
              : theme.colors.disabled};
        transition: 0.4s;
        border-radius: 1rem;

        &:before {
            position: absolute;
            content: "";
            cursor: ${disabled ? "not-allowed" : "pointer"};
            height: 1.5rem;
            width: 1.5rem;
            top: 50%;
            ${checked ? "right: 0" : "left: 0"};
            background-color: ${disabled
                ? theme.colors.darkerDisabled
                : checked
                  ? buttonColor
                  : theme.colors.white};
            transform: translateY(-50%);
            box-shadow: 0 0.2rem 0.2rem 0.2rem
                rgba(${getRGBValues(theme.colors.disabled)}, 0.3);
            border-radius: 50%;
        }

        &:hover:before {
            content: "";
            position: absolute;
            box-shadow: ${disabled
                ? "none"
                : checked
                  ? `0 0 0 0.5rem rgba(${getRGBValues(buttonColor)}, 0.3)`
                  : `0 0 0 0.5rem rgba(${getRGBValues(theme.colors.disabled)}, 0.3)`};
            transition: 0.2s;
            cursor: ${disabled ? "not-allowed" : "pointer"};
            border-radius: 50%;
        }
    `,
};

export default ToggleSwitch;
