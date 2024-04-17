import React, { useState } from "react";
import { Tabs, TabsProps } from "./Tabs";
import { TabsList } from "./TabsList";
import { TabsItem } from "./TabsItem";
import { TabPanel } from "./TabPanel";
import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import { css } from "@emotion/css";
import { Icon } from "../Icon/Icon";

const StoryBookTabs: React.FC<TabsProps> = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTabClick = (value: string) => {
        setActiveTab(value);
    };

    return (
        <YDesignWrapper>
            <div
                className={css`
                    width: 100%;
                    height: 90vh;
                `}
            >
                <Tabs
                    defaultValue="tab1"
                    orientation="horizontal"
                    onChange={handleTabClick}
                >
                    <TabsList>
                        <TabsItem value="tab1">Tab 1</TabsItem>
                        <TabsItem value="tab2">Tab 2</TabsItem>
                        <TabsItem
                            value="tab3"
                            iconLeftSection={
                                <Icon iconName="check-circle" color="black" />
                            }
                        >
                            Tab 3
                        </TabsItem>
                    </TabsList>
                    <TabPanel value="tab1">
                        <div>Content 1</div>
                    </TabPanel>
                    <TabPanel value="tab2">
                        <div>Content 2</div>
                    </TabPanel>
                    <TabPanel value="tab3">
                        <div>Content 3</div>
                    </TabPanel>
                </Tabs>
            </div>
        </YDesignWrapper>
    );
};

export default {
    title: "Tabs",
    component: StoryBookTabs,
    parameters: {
        backgrounds: { disabled: true },
    },
};

export const TabsStory = () => (
    <StoryBookTabs
        defaultValue="tab1"
        children={undefined}
        orientation="horizontal"
    />
);
