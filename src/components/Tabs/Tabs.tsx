// Tabs.tsx
import React, { useState } from "react";
import { TabsList, TabsListProps } from "./TabsList";
import { TabPanel, TabPanelProps } from "./TabPanel";
import { css } from "@emotion/css";

export interface TabsProps {
    defaultValue: string;
    orientation: "horizontal" | "vertical";
    children: React.ReactNode;
    onChange?: (value: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({
    defaultValue,
    orientation,
    children,
}) => {
    const [activeTab, setActiveTab] = useState(defaultValue);

    const handleTabChange = (value: string) => {
        setActiveTab(value);
    };

    return (
        <div className={styles.tabs(orientation)}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    if (child.type === TabsList) {
                        return React.cloneElement(
                            child as React.ReactElement<TabsListProps>,
                            {
                                activeTab,
                                orientation,
                                onChange: handleTabChange,
                            },
                        );
                    } else if (child.type === TabPanel) {
                        return React.cloneElement(
                            child as React.ReactElement<TabPanelProps>,
                            {
                                activeTab,
                            },
                        );
                    }
                }
                return child;
            })}
        </div>
    );
};

const styles = {
    tabs: (orientation: "horizontal" | "vertical") => css`
        display: flex;
        flex-direction: ${orientation !== "horizontal" ? "row" : "column"};
        margin-bottom: 10px;
    `,
};
