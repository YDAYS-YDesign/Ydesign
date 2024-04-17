import React from "react";
import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import NavigationMenuItem from "./NavigationMenuItem";
import { css } from "@emotion/css";

const StorybookNavigationMenuItem: React.FC = () => {
    return (
        <YDesignWrapper>
            <div
                className={css`
                    width: 100%;
                    height: 90vh;
                    justify-content: center;
                    align-items: center;
                `}
            >
                <div>
                    <NavigationMenuItem
                        color=""
                        hasIcon={true}
                        isOpen={false}
                        isMobile={false}
                        text="Design principles"
                    />
                    <NavigationMenuItem
                        color=""
                        hasIcon={false}
                        isOpen={false}
                        isMobile={false}
                        url="/components"
                        text="Components"
                    />
                </div>
            </div>
        </YDesignWrapper>
    );
};

export default {
    title: "NavigationMenuItem",
    component: StorybookNavigationMenuItem,
    parameters: {
        backgrounds: { disable: true },
    },
};

const Template = () => <StorybookNavigationMenuItem />;

export const NavigationMenuItemDefault = Template.bind({});
