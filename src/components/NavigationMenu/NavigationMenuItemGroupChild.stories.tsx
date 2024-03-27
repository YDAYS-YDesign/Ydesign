import React from "react";
import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import NavigationMenuItemGroupChild from "./NavigationMenuItemGroupChild";
import { css } from "@emotion/css";
import NavigationLink from "./NavigationLink";

const StorybookNavigationMenuItemGroupChild: React.FC = () => {
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
                <NavigationMenuItemGroupChild isOpen={true} isMobile={false}>
                    <NavigationLink
                        title="Design principles"
                        url="/design-principles"
                        color=""
                    />
                    <NavigationLink title="Colors" url="/colors" color="" />
                    <NavigationLink title="Layout" url="/layout" color="" />
                    <NavigationLink title="Motion" url="/motion" color="" />
                    <NavigationLink title="Shapes" url="/shapes" color="" />
                    <NavigationLink
                        title="Typography"
                        url="/typography"
                        color=""
                    />
                </NavigationMenuItemGroupChild>
            </div>
        </YDesignWrapper>
    );
};

export default {
    title: "NavigationMenuItemGroupChild",
    component: StorybookNavigationMenuItemGroupChild,
    parameters: {
        backgrounds: { disable: true },
    },
};

const Template = () => <StorybookNavigationMenuItemGroupChild />;

export const NavigationMenuItemGroupChildDefault = Template.bind({});
