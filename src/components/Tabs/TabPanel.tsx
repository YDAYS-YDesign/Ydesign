import React from "react";

export interface TabPanelProps {
    activeTab?: string;
    value: string;
    children: React.ReactNode;
}

export const TabPanel: React.FC<TabPanelProps> = ({
    activeTab,
    value,
    children,
}) => {
    return activeTab === value ? <div>{children}</div> : null;
};
