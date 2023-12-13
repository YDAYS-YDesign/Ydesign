import React from "react";
import { css } from "@emotion/css";

export interface SliderProps
    extends Omit<
        React.InputHTMLAttributes<HTMLInputElement>,
        "onChange" | "value"
    > {
    onChange: (value: number) => void;
    value: number;
}

export const Slider = ({
    disabled,
    onChange,
    step = 1,
    value,
}: SliderProps): JSX.Element => {
    const getBackgroundSize = () => ({
        backgroundSize: `${value - 0}% 100%`,
    });

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(Number(e.target.value));
    };

    return (
        <input
            className={`${styles.slider(value)} ${
                disabled ? styles.disabledSlider : ""
            }`}
            type="range"
            step={step}
            style={getBackgroundSize()}
            value={value}
            onChange={handleOnChange}
            disabled={disabled}
        />
    );
};

const styles = {
    slider: (value: number) => css`
        -webkit-appearance: none;
        width: auto;
        height: 5px;
        background: #8cc4ff70;
        border-radius: 5px;
        background-image: linear-gradient(#8cc4ff, #8cc4ff);
        background-repeat: no-repeat;

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #8cc4ff;
            cursor: pointer;
            box-shadow: 0;
            transition: background 0.3s ease-in-out;

            &:hover {
                box-shadow: #8cc4ff40 0px 0px 0px 8px;
            }
        }
    `,
    disabledSlider: css`
        opacity: 0.5;
        cursor: not-allowed;
    `,
};
