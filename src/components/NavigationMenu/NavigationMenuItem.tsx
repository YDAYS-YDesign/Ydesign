import React from "react";
import { css } from "@emotion/css";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../theme/theme";
import { Icon, IconProps } from "../Icon/Icon";

interface NavigationMenuItemProps {
    color: string;
    text: string;
    hasIcon: boolean;
    isOpen: boolean;
    isMobile: boolean;
    url?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

const NavigationMenuItem: React.FC<NavigationMenuItemProps> = ({
    color,
    text,
    hasIcon,
    isOpen,
    isMobile,
    url,
    children,
    onClick,
}: NavigationMenuItemProps) => {
    const { isDarkMode, theme } = useTheme();

    const chevronIcon = isMobile
        ? isOpen
            ? "chevron-down"
            : "chevron-left"
        : isOpen
          ? "chevron-up"
          : "chevron-down";

    const chevronIconProps: IconProps = {
        iconName: chevronIcon,
        size: "medium",
        color: isDarkMode ? theme.colors.white : theme.colors.black,
    };

    function hexToRgb(hex: string) {
        hex = hex.replace(/^#/, "");

        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);

        return `${r}, ${g}, ${b}`;
    }

    let rgbPrimaryColor = hexToRgb(theme.colors.primary);

    if (hasIcon && url) {
        return (
            <a
                href={url}
                className={styles.withoutIcon(isDarkMode, color, theme)}
            >
                {text}
            </a>
        );
    }
    return (
        <div
            className={styles.withIcon(
                isDarkMode,
                isOpen,
                hasIcon,
                color,
                rgbPrimaryColor,
                theme,
            )}
            onClick={onClick}
        >
            <div className={styles.text(hasIcon)}>{text}</div>
            {hasIcon && (
                <div className={styles.icon}>
                    <Icon
                        isVerticalAlign={true}
                        {...chevronIconProps}
                        onClick={onClick}
                    />
                </div>
            )}
            {children}
        </div>
    );
};

export default NavigationMenuItem;

const styles = {
    withoutIcon: (isDarkMode: boolean, color: string, theme: Theme) => css`
        text-decoration: none;
        color: ${isDarkMode ? theme.colors.white : theme.colors.black};
        &:hover {
            border-bottom: 2px solid ${color || theme.colors.primary};
        }
    `,
    withIcon: (
        isDarkMode: boolean,
        isOpen: boolean,
        hasIcon: boolean,
        color: string,
        rgbPrimaryColor: string,
        theme: Theme,
    ) => css`
        display: flex;
        margin: 20px;
        padding-top: ${hasIcon ? "10px" : "15px"};
        padding-bottom: ${hasIcon ? "10px" : "15px"};
        margin-bottom: 0;
        width: fit-content;
        cursor: pointer;
        font-family: "Exo", sans-serif;
        position: relative;
        border-bottom: ${isOpen
            ? `2px solid ${color || theme.colors.primary}`
            : "2px solid transparent"};
        background-color: ${isOpen ? `rgba(${rgbPrimaryColor}, 0.2)` : "none"};
        border-radius: 2px;
        gap: 10px;
        color: ${isDarkMode ? theme.colors.white : theme.colors.black};

        &:hover {
            border-bottom: 2px solid ${color || theme.colors.primary};
        }
    `,
    text: (hasIcon: boolean) => css`
        padding-left: ${hasIcon ? "10px" : "0"};
    `,
    icon: css`
        padding-right: 10px;
    `,
};
