import React from "react";
import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import {
    NavigationMenuItem,
    NavigationMenuItemProps,
} from "./NavigationMenuItem";
import { css } from "@emotion/css";

const NavigationMenuItemStory: React.FC<NavigationMenuItemProps> = (props) => (
    <YDesignWrapper>
        <div
            className={css`
                width: 100%;
                height: 90vh;
                justify-content: center;
                align-items: center;
            `}
        >
            <NavigationMenuItem {...props} />
        </div>
    </YDesignWrapper>
);

export default {
    title: "NavigationMenuItem",
    component: NavigationMenuItemStory,
    parameters: {
        backgrounds: { disable: true },
    },
    argTypes: {
        items: { control: "object" },
    },
};

const Template = (args: NavigationMenuItemProps) => (
    <NavigationMenuItemStory {...args} />
);

export const NavigationMenuItemDefault = Template.bind({});

NavigationMenuItemDefault.args = {
    items: [
        {
            title: "Components",
            url: "/components",
        },
    ],
};

export const NavigationMenuItemWithParent = Template.bind({});
NavigationMenuItemWithParent.args = {
    items: [
        {
            titleParent: "Design language",
            children: [
                {
                    titleChildren: "About",
                    url: "/about",
                },
                {
                    titleChildren: "Services",
                    url: "/services",
                },
                {
                    titleChildren: "Contact",
                    url: "/contact",
                },
            ],
        },
    ],
};
