import { css } from "@emotion/css";
import React from "react";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../theme/theme";

export interface TabsItemProps {
    value: string;
    activeTab?: string;
    children?: React.ReactNode;
    color?: string;
    iconLeftSection?: React.ReactNode;
    onClick?: (value: string) => void;
}

export const TabsItem: React.FC<TabsItemProps> = ({
    value,
    activeTab,
    children,
    iconLeftSection,
    color,
    onClick,
}) => {
    const { theme } = useTheme();

    const handleClick = () => {
        if (onClick) {
            onClick(value);
        }
    };

    return (
        <div
            onClick={handleClick}
            className={styles.list(activeTab, value, theme, color)}
        >
            {iconLeftSection && (
                <div className={styles.icon}>{iconLeftSection}</div>
            )}
            <div className={styles.content}>{children}</div>
        </div>
    );
};

const styles = {
    list: (
        activeTab: string | undefined,
        value: string,
        theme: Theme,
        color: string | undefined,
    ) => css`
        display: flex;
        align-items: center;
        padding: 10px;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        color: ${activeTab === value ? theme.colors.primary : color};
        border-color: ${activeTab === value
            ? theme.colors.primary
            : "transparent"};
        font-family: "Exo", sans-serif;
    `,
    icon: css`
        margin-right: 5px;
    `,
    content: css`
        flex: 1;
    `,
};
