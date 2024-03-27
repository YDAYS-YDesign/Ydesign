import React, { useState } from "react";
import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import NavigationMenuItemGroup from "./NavigationMenuItemGroup";
import { css } from "@emotion/css";
import NavigationLink from "./NavigationLink";

const StorybookNavigationMenuItemGroup: React.FC = () => {
    const [designLanguageOpen, setDesignLanguageOpen] = useState(false);

    return (
        <YDesignWrapper>
            <div
                className={css`
                    width: 100%;
                    height: 90vh;
                `}
            >
                <NavigationMenuItemGroup
                    menuItemProps={{
                        color: "",
                        hasIcon: true,
                        text: "Design language",
                    }}
                    groupChildProps={{
                        color: "",
                    }}
                    isOpen={designLanguageOpen}
                    onClick={() => setDesignLanguageOpen(!designLanguageOpen)}
                >
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
                </NavigationMenuItemGroup>
            </div>
        </YDesignWrapper>
    );
};

export default {
    title: "NavigationMenuItemGroup",
    component: StorybookNavigationMenuItemGroup,
    parameters: {
        backgrounds: { disable: true },
    },
};

const Template = () => <StorybookNavigationMenuItemGroup />;

export const NavigationMenuItemGroupDefault = Template.bind({});
