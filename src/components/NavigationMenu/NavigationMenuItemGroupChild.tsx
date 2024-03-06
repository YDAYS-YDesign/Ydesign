import React from "react";
import { css } from "@emotion/css";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../theme/theme";

interface NavigationMenuItemGroupChild {
    color: string;
    children: React.ReactNode;
    isOpen: boolean;
}

const NavigationMenuItemChild: React.FC<NavigationMenuItemGroupChild> = ({
    color,
    children,
    isOpen,
}: NavigationMenuItemGroupChild) => {
    const { isDarkMode, theme } = useTheme();

    return (
        <div className={styles(isDarkMode, color, theme, isOpen)}>
            {children}
        </div>
    );
};

export default NavigationMenuItemChild;

const styles = (
    isDarkMode: boolean,
    color: string,
    theme: Theme,
    isOpen: boolean,
) => css`
    display: flex;
    flex-direction: column;
    margin: 20px;
    margin-bottom: 0;
    width: fit-content;
    cursor: pointer;
    font-family: "Exo", sans-serif;
    position: relative;
    border-bottom: 2px solid transparent;
    color: ${isDarkMode ? theme.colors.white : theme.colors.black};
    position: absolute;
    width: 100%;
    color: ${isDarkMode ? theme.colors.white : theme.colors.black};
    overflow: hidden;
    max-height: ${isOpen ? "400px" : "0"};
    transition: max-height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;
