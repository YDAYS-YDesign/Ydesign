import React, { useState, useEffect } from "react";
import { Theme, theme } from "../../theme/theme";
import { useDarkMode } from "storybook-dark-mode";

interface Props {
    defaultDarkMode?: boolean;
    children: React.ReactNode;
}

export interface ThemeContext {
    theme: Theme;
    isDarkMode: boolean;
    setDarkMode: (isDarkMode: boolean) => void;
    isMobileView: boolean;
}

export const themeContext = React.createContext<ThemeContext | undefined>(
    undefined,
);

export const YDesignWrapper = ({
    children,
    defaultDarkMode = false,
}: Props): JSX.Element => {
    const [isDarkMode, setIsDarkMode] = useState(defaultDarkMode);
    const [isMobileView, setIsMobileView] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const setDarkMode = (isDarkMode: boolean) => {
        console.log("setDarkMode", isDarkMode);
        setIsDarkMode(isDarkMode);
    };
    const value = {
        theme,
        isDarkMode: useDarkMode() ? true : isDarkMode,
        setDarkMode,
        isMobileView,
    };
    return (
        <themeContext.Provider value={value}>{children}</themeContext.Provider>
    );
};
