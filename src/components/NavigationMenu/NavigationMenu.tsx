import React, { useState, useEffect } from "react";
import { css } from "@emotion/css";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../theme/theme";
import { Icon } from "../Icon/Icon";

export interface NavigationMenuProps {
    items: { title: string; url: string }[];
    children?: React.ReactNode;
    className?: string;
    isMobile?: boolean;
    color?: string;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
    children,
    color,
}: NavigationMenuProps) => {
    const { isDarkMode, theme } = useTheme();

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleToggleMobile = () => {
        setIsMobile(!isMobile);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return !isMobile ? (
        <div className={styles.navigationMenu(theme, color, isDarkMode)}>
            {children}
        </div>
    ) : (
        <div className={styles.navigationMenuMobile(theme, color, isDarkMode)}>
            //display the first and second children
            {children.toArray().slice(0, 2)}
            <Icon
                className={styles.icon}
                iconName={"menu"}
                color={isDarkMode ? theme.colors.white : theme.colors.black}
                isClickable={true}
                onClick={handleToggleSidebar}
            />
        </div>
    );
};

const styles = {
    navigationMenu: (
        theme: Theme,
        color: string | undefined,
        isDarkMode: Boolean,
    ) => css`
        display: flex;
        justify-content: space-between;
        align-items: end;
        padding: 0 30px;
        border-bottom: 1px solid ${color || theme.colors.primary};
        background-color: ${isDarkMode
            ? theme.colors.black
            : theme.colors.white};
    `,
    navigationMenuMobile: (
        theme: Theme,
        color: string | undefined,
        isDarkMode: Boolean,
    ) => css`
        border-bottom: 1px solid ${color || theme.colors.primary};
        text-align: end;
        background-color: ${isDarkMode
            ? theme.colors.black
            : theme.colors.white};
    `,
    icon: css`
        cursor: pointer;
    `,
};
