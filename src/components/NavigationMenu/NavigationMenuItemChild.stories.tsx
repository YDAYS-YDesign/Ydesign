import React from "react";
import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import NavigationMenuItemChild from "./NavigationMenuItemChild";
import { css } from "@emotion/css";
import NavigationLink from "./NavigationLink";

const StorybookNavigationMenuItemChild: React.FC = () => {
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
                <NavigationMenuItemChild color="">
                    <NavigationLink
                        title="Components"
                        url="/design-principles"
                        color=""
                    />
                </NavigationMenuItemChild>
            </div>
        </YDesignWrapper>
    );
};

export default {
    title: "NavigationMenuItemChild",
    component: StorybookNavigationMenuItemChild,
    parameters: {
        backgrounds: { disable: true },
    },
};

const Template = () => <StorybookNavigationMenuItemChild />;

export const NavigationMenuItemChildDefault = Template.bind({});
