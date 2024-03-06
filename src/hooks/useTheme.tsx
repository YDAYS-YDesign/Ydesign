import { useContext } from "react";
import {
    ThemeContext,
    themeContext,
} from "../components/YDesignWrapper/YDesignWrapper";

// Custom hook to access the game context
export const useTheme = (): ThemeContext => {
    const context = useContext(themeContext);

    if (!context) {
        throw new Error("useTheme must be used within a YDesignWrapper");
    }

    return context;
};
