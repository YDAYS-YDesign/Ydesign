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
    url?: string;
    onClick?: () => void;
}

const NavigationMenuItem: React.FC<NavigationMenuItemProps> = ({
    color,
    text,
    hasIcon,
    isOpen,
    url,
    onClick,
}: NavigationMenuItemProps) => {
    const { isDarkMode, theme } = useTheme();

    const chevronIconProps: IconProps = {
        iconName: isOpen ? "chevron-up" : "chevron-down",
        size: "medium",
        color: isDarkMode ? theme.colors.white : theme.colors.black,
        isClickable: true,
    };

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
        <div className={styles.withIcon(isDarkMode, color, theme)}>
            {text}
            {hasIcon && (
                <Icon
                    {...chevronIconProps}
                    isVerticalAlign={true}
                    isClickable
                    onClick={onClick}
                />
            )}
        </div>
    );
};

export default NavigationMenuItem;

const styles = {
    withoutIcon: (isDarkMode: boolean, color: string, theme: Theme) => css`
        text-decoration: none;
        margin-left: 10px;
        text-decoration: none;
        padding-top: 20px;
        padding-bottom: 20px;
        color: ${isDarkMode ? theme.colors.white : theme.colors.black};
        &:hover {
            border-bottom: 2px solid ${color || theme.colors.primary};
        }
    `,
    withIcon: (isDarkMode: boolean, color: string, theme: Theme) => css`
        display: flex;
        margin: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        margin-bottom: 0;
        width: fit-content;
        cursor: pointer;
        font-family: "Exo", sans-serif;
        position: relative;
        border-bottom: 2px solid transparent;
        gap: 10px;
        color: ${isDarkMode ? theme.colors.white : theme.colors.black};

        &:hover {
            border-bottom: 2px solid ${color || theme.colors.primary};
        }
    `,
};
