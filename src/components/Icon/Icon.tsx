import React, { Suspense, lazy, FunctionComponent } from "react";
import { IconType } from "../../types/IconType";
import { css } from "@emotion/css";
import SVG from "react-inlinesvg";
import { useTheme } from "../../hooks/useTheme";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    iconName: IconType;
    size?: "small" | "medium" | "large";
    isClickable?: boolean;
    color: string;
    onClick?: () => void;
}
// Composant IconWrapper modifié
export const Icon = ({
    iconName,
    size = "medium",
    color = "currentColor",
    isClickable = false,
    ...props
}: IconProps) => {
    const { isDarkMode, theme } = useTheme();
    const getSizes = (size: string) => {
        switch (size) {
            case "small":
                return {
                    width: "15",
                    height: "15",
                };
            case "medium":
                return {
                    width: "20",
                    height: "20",
                };
            case "large":
                return {
                    width: "25",
                    height: "25",
                };
            default:
                return {
                    width: "20",
                    height: "20",
                };
        }
    };

    return (
        <button
            onClick={props.onClick}
            className={css`
                background: none;
                border: none;
                padding: 0;
                outline: inherit;
                text-align: center;
                overflow: hidden;
                height: ${getSizes(size).height}px;
                width: ${getSizes(size).width}px;
                transition-timing-function: cubic-bezier(0.35, 0, 0.27, 0.96);
                transition-duration: 0.2s;
                transition-property: all;
                border-radius: 5px;
                ${isClickable &&
                `cursor: pointer;
                &:hover {
                    box-shadow:
                        0 0 0 2px
                            ${
                                isDarkMode
                                    ? theme.colors.black
                                    : theme.colors.white
                            },
                        0 0 0px 4px ${theme.colors.primary};
                }`}
            `}
        >
            <SVG
                src={`../../assets/svgs/${iconName}.svg`}
                {...getSizes(size)}
                title={"activity"}
                stroke={color}
                fill="none"
                viewBox="0 0 24 24"
            />
        </button>
    );
};
