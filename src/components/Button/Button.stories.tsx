import React from "react";
import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import { Button, ButtonProps } from "./Button";
import { css } from "@emotion/css";

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
    title: "Button", // Add a title for your component
    component: StorybookButton,
    parameters: {
        backgrounds: { disable: true },
    },
    argTypes: {
        children: { control: "text" }, // This line allows changing the button text
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

export const Disabled = Template.bind({});
Disabled.args = {
    variant: "primary",
    disabled: true,
    children: "un bouton", // Default button text
    size: "medium",
};
