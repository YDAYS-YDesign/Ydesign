import React from "react";
import { css } from "@emotion/css";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../theme/theme";

interface NavigationMenuItemGroupChild {
    children: React.ReactNode;
    isOpen: boolean;
    isMobile: boolean;
}

const NavigationMenuItemChild: React.FC<NavigationMenuItemGroupChild> = ({
    children,
    isOpen,
    isMobile,
}: NavigationMenuItemGroupChild) => {
    const { isDarkMode, theme } = useTheme();

    return (
        <div
            className={
                isMobile
                    ? styles.containerMobile(isDarkMode, isOpen, theme)
                    : styles.container(isDarkMode, isOpen, theme)
            }
        >
            {children}
        </div>
    );
};

export default NavigationMenuItemChild;

const styles = {
    container: (isDarkMode: boolean, isOpen: boolean, theme: Theme) => css`
        display: flex;
        flex-direction: column;
        margin-top: 40px;
        margin-bottom: 0;
        cursor: pointer;
        font-family: "Exo", sans-serif;
        color: ${isDarkMode ? theme.colors.white : theme.colors.black};
        position: absolute;
        width: 100%;
        overflow: hidden;
        max-height: ${isOpen ? "400px" : "0"};
        transition: max-height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    `,
    containerMobile: (
        isDarkMode: boolean,
        isOpen: boolean,
        theme: Theme,
    ) => css`
        display: flex;
        flex-direction: column;
        position: relative;
        margin-bottom: 0;
        margin-right: 30px;
        cursor: pointer;
        font-family: "Exo", sans-serif;
        color: ${isDarkMode ? theme.colors.white : theme.colors.black};
        width: fit-content;
        overflow: hidden;
        max-height: ${isOpen ? "400px" : "0"};
        transition: max-height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    `,
};
