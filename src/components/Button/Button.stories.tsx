import React from "react";
import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import { Button, ButtonProps } from "./Button";
import { css } from "@emotion/css";
import { Icon } from "../Icon/Icon";

const StorybookButton: React.FC<ButtonProps> = (props) => {
    return (
        <YDesignWrapper>
            <div
                className={css`
                    width: 100%;
                    height: 90vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                `}
            >
                <Button {...props}>{props.children}</Button>
            </div>
        </YDesignWrapper>
    );
};

export default {
    title: "Button",
    component: StorybookButton,
    parameters: {
        backgrounds: { disable: true },
    },
    argTypes: {
        children: { control: "text" },
        variant: {
            control: "select",
            options: ["primary", "secondary"],
        },
        size: {
            control: "select",
            options: ["small", "medium", "large"],
        },
    },
};

// Define default properties for your stories
// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args: ButtonProps) => <StorybookButton {...args} />;

// Default story
export const Primary = Template.bind({});
Primary.args = {
    disabled: false,
    children: "un bouton", // Default button text
    variant: "primary",
    size: "medium",
};

export const Secondary = Template.bind({});
Secondary.args = {
    disabled: false,
    children: "un bouton", // Default button text
    variant: "secondary",
    size: "medium",
};

export const Suffix = Template.bind({});
Suffix.argTypes = {
    suffix: { control: "none" },
};
Suffix.args = {
    variant: "primary",
    disabled: false,
    children: "Search", // Default button text
    size: "medium",
    suffix: <Icon iconName={"search"} color={"white"} />,
};

export const Disabled = Template.bind({});
Disabled.args = {
    variant: "primary",
    disabled: true,
    children: "un bouton", // Default button text
    size: "medium",
};
