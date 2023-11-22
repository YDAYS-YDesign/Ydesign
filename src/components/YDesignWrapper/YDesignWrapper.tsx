import React, { useState } from "react";
import { css } from "@emotion/css";
import { Theme, theme } from "../../theme/theme";

interface Props {
    defaultDarkMode?: boolean;
    children: React.ReactNode;
}

export interface ThemeContext {
    theme: Theme;
    isDarkMode: boolean;
    setDarkMode: (isDarkMode: boolean) => void;
}

export const themeContext = React.createContext<ThemeContext | undefined>(
    undefined,
);

export const YDesignWrapper = ({ children }: Props): JSX.Element => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const setDarkMode = (isDarkMode: boolean) => setIsDarkMode(isDarkMode);
    const value = {
        theme,
        isDarkMode,
        setDarkMode,
    };
    return (
        <themeContext.Provider value={value}>{children}</themeContext.Provider>
    );
};
