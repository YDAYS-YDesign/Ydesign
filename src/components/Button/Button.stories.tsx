import React from "react";
import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import { Button, ButtonProps } from "./Button";

const StorybookButton: React.FC<ButtonProps> = (props) => {
    return (
        <YDesignWrapper>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Button {...props}>{props.children}</Button>
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
};

// Primary story
export const Disabled = Template.bind({});
Disabled.args = {
    variant: "primary",
    disabled: true,
    children: "un bouton", // Default button text
};
