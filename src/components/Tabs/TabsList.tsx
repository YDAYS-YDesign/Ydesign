import React from "react";
import { TabsItemProps } from "./TabsItem";
import { css } from "@emotion/css";

export interface TabsListProps {
    activeTab?: string;
    orientation?: "horizontal" | "vertical";
    children: React.ReactNode;
    onChange?: (value: string) => void;
}

export const TabsList: React.FC<TabsListProps> = ({
    activeTab,
    orientation,
    children,
    onChange,
}) => {
    return (
        <div className={styles.tabs(orientation)}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(
                        child as React.ReactElement<TabsItemProps>,
                        {
                            activeTab,
                            onClick: onChange,
                        },
                    );
                }
                return child;
            })}
        </div>
    );
};

const styles = {
    tabs: (orientation: "horizontal" | "vertical" | undefined) => css`
        display: flex;
        flex-direction: ${orientation === "horizontal" ? "row" : "column"};
        margin-bottom: 10px;
    `,
};
