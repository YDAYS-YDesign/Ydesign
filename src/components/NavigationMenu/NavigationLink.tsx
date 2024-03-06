import { css } from "@emotion/css";
import React from "react";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../theme/theme";

interface NavigationLinkProps {
    title: string;
    url: string;
    color: string;
}

const NavigationLink = ({ title, url, color }: NavigationLinkProps) => {
    const { isDarkMode, theme } = useTheme();
    return (
        <a className={styles(isDarkMode, theme, color)} href={url}>
            {title}
        </a>
    );
};

const styles = (isDarkMode: boolean, theme: Theme, color: string) => css`
    text-decoration: none;
    color: ${isDarkMode ? theme.colors.white : theme.colors.black};
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 2px solid transparent;
    &:hover {
        border-bottom: 2px solid ${color || theme.colors.primary};
    }
`;

export default NavigationLink;
