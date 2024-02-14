import React, { useState } from "react";
import { css, cx } from "@emotion/css";
import { theme } from "../../theme/theme";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    primary?: boolean;
    disabled: boolean;
    checked?: boolean;
    buttonColor?: string;
    className?: string;
    size?: "small" | "medium" | "large";
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
    checked,
    buttonColor = theme.colors.lightPrimary,
    className,
    size = "medium",
    ...props
}: Props): JSX.Element => {
    const [iscChecked, setChecked] = useState(checked || false);

    const handleToggle = () => {
        const newCheckedState = !iscChecked;
        setChecked(newCheckedState);
    };

    return (
        <label className={cx(styles.container, className)}>
            <input
                type="checkbox"
                checked={checked !== undefined ? checked : iscChecked}
                disabled={disabled}
                onChange={handleToggle}
                className={styles.input}
            />
            <span
                className={cx(
                    styles.toggle(iscChecked, buttonColor, disabled),
                    styles[size],
                )}
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

    toggle: (
        iscChecked: boolean,
        buttonColor: string,
        disabled: boolean,
    ) => css`
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${disabled
            ? theme.colors.disabled
            : iscChecked
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
            ${iscChecked ? "right: 0" : "left: 0"};
            background-color: ${disabled
                ? theme.colors.darkerDisabled
                : iscChecked
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
                : iscChecked
                  ? `0 0 0 0.5rem rgba(${getRGBValues(buttonColor)}, 0.3)`
                  : `0 0 0 0.5rem rgba(${getRGBValues(theme.colors.disabled)}, 0.3)`};
            transition: 0.2s;
            cursor: ${disabled ? "not-allowed" : "pointer"};
        }
    `,

    small: css`
        width: 2rem;
        height: 0.75rem;
        &:before {
            height: 1rem;
            width: 1rem;
        }
    `,

    medium: css`
        width: 3rem;
        height: 1rem;
        &:before {
            height: 1.5rem;
            width: 1.5rem;
        }
    `,

    large: css`
        width: 4rem;
        height: 1.25rem;
        &:before {
            height: 2rem;
            width: 2rem;
        }
    `,
    labelOnOff: css`
        margin-left: 5rem;
    `,
};

export default ToggleSwitch;
