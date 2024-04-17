import React from "react";

export interface TabsPanelProps {
    activeTab?: string;
    value: string;
    children: React.ReactNode;
}

export const TabsPanel: React.FC<TabsPanelProps> = ({
    activeTab,
    value,
    children,
}) => {
    return activeTab === value ? <div>{children}</div> : null;
};
