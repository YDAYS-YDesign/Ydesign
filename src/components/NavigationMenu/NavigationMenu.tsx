import React, { useState, useEffect } from "react";
import { css } from "@emotion/css";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../theme/theme";
import { Icon, IconProps } from "../Icon/Icon";

export interface NavigationMenuProps {
    items: { title: string; url: string }[];
    children?: React.ReactNode;
    className?: string;
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

    const menuIconProps: IconProps = {
        iconName: isSidebarOpen ? "x" : "menu",
        size: "medium",
        color: isDarkMode ? theme.colors.white : theme.colors.black,
        isClickable: true,
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
    }, []);

    const firstChild = React.Children.toArray(children)[0];
    const restChildren = React.Children.toArray(children).slice(1);
    return (
        <div>
            {isMobile ? (
                <div className={styles.navigationMenuMobile(theme, color)}>
                    <div>{firstChild}</div>
                    <Icon {...menuIconProps} onClick={handleToggleSidebar} />
                    {isSidebarOpen && (
                        <div className={styles.sidebar(theme, isDarkMode)}>
                            <div
                                className={styles.sidebarContent(
                                    theme,
                                    isDarkMode,
                                )}
                            >
                                <div
                                    className={styles.closeButton(
                                        theme,
                                        isDarkMode,
                                    )}
                                >
                                    <Icon
                                        {...menuIconProps}
                                        onClick={handleToggleSidebar}
                                    />
                                </div>
                                <div className={styles.children}>
                                    {restChildren}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div
                    className={styles.navigationMenu(theme, color, isDarkMode)}
                >
                    {children}
                </div>
            )}
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
    navigationMenuMobile: (theme: Theme, color: string | undefined) => css`
        border-bottom: 1px solid ${color || theme.colors.primary};
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: end;
    `,
    sidebar: (theme: Theme, isDarkMode: Boolean) => css`
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 70%;
        height: 100%;
        background-color: ${isDarkMode
            ? theme.colors.black
            : theme.colors.white};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;
    `,
    closeButton: (theme: Theme, isDarkMode: Boolean) => css`
        padding: 10px;
        background-color: ${isDarkMode
            ? theme.colors.black
            : theme.colors.white};
    `,
    sidebarContent: (theme: Theme, isDarkMode: Boolean) => css`
        width: 100%;
        height: 100%;
        background-color: ${isDarkMode
            ? theme.colors.black
            : theme.colors.white};
        display: flex;
        flex-direction: column;
        align-items: end;
        padding: 20px;
    `,
    children: css`
        display: flex;
        flex-direction: column;
        align-items: end;
    `,
};
