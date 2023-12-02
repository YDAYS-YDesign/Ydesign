import React from "react";
import { css, cx } from "@emotion/css";
import { theme } from "../../theme/theme";
import { useTheme } from "../../hooks/useTheme";
import { getFocusStyle } from "../../theme/commonStyling";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    disabled?: boolean;
    suffix?: React.ReactNode;
}

export const Input = ({
    children,
    className,
    disabled = false,
    ...rest
}: InputProps): JSX.Element => {
    const { isMobileView } = useTheme();
    return (
        <input
            disabled={disabled}
            className={cx(className)}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
        />
    );
};

const styles = {
    input: (isDisabled: boolean) => {
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
            width: 100%;

            // custom Input
            font-family: "Gill Sans", sans-serif;
            background-color: ${isDisabled
                ? theme.colors.grey
                : theme.colors.white};
            color: ${theme.colors.text};
            border-radius: 40px;
            transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
            &:active {
                border: ${theme.colors.yellow} solid 1px;
            }
            &:focus {
                ${getFocusStyle()}
                background-color: ${theme.colors.yellow};
            }
        `;
    },
};
