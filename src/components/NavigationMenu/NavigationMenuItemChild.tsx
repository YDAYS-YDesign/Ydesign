import React from "react";
import { css } from "@emotion/css";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../theme/theme";

interface NavigationMenuItemChildProps {
    color: string;
    children: React.ReactNode;
}

const NavigationMenuItemChild: React.FC<NavigationMenuItemChildProps> = ({
    color,
    children,
}: NavigationMenuItemChildProps) => {
    const { isDarkMode, theme } = useTheme();

    return <div className={styles(isDarkMode, color, theme)}>{children}</div>;
};

export default NavigationMenuItemChild;

const styles = (isDarkMode: boolean, color: string, theme: Theme) => css`
    margin: 0;
    width: fit-content;
    cursor: pointer;
    font-family: "Exo", sans-serif;
    position: relative;
    border-bottom: 2px solid transparent;
    gap: 10px;
    color: ${isDarkMode ? theme.colors.white : theme.colors.black};
`;
