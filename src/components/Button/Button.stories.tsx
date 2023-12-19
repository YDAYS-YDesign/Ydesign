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
                <Button {...props}>{props.content}</Button>
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
        content: { control: "text" },
        variant: {
            control: "select",
            options: ["primary", "secondary"],
        },
        size: {
            control: "select",
            options: ["small", "medium", "large"],
        },
        rounded: { control: "boolean" },
    },
};

// Define default properties for your stories
// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args: ButtonProps) => <StorybookButton {...args} />;

// Default story
export const Primary = Template.bind({});
Primary.args = {
    disabled: false,
    content: "un bouton", // Default button text
    variant: "primary",
    size: "medium",
    rounded: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
    disabled: false,
    content: "un bouton", // Default button text
    variant: "secondary",
    size: "medium",
    rounded: true,
};

export const WithSuffix = Template.bind({});
WithSuffix.argTypes = {
    suffix: { control: "none" },
};
WithSuffix.args = {
    variant: "primary",
    disabled: false,
    content: "Download", // Default button text
    size: "medium",
    rounded: false,
    suffix: "download",
};

export const Disabled = Template.bind({});
Disabled.args = {
    variant: "primary",
    disabled: true,
    content: "un bouton", // Default button text
    rounded: false,
    size: "medium",
};
