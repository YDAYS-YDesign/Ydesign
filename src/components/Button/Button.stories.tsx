import React from "react";
import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import { Button, ButtonProps } from "./Button";

const StorybookButton: React.FC<ButtonProps> = (props) => {
    return (
        <YDesignWrapper>
            <Button {...props}>{props.children}</Button>
        </YDesignWrapper>
    );
};

export default {
    title: "Button", // Add a title for your component
    component: StorybookButton,
    argTypes: {
        children: { control: "text" }, // This line allows changing the button text
    },
};

// Define default properties for your stories
const Template = (args: ButtonProps) => <StorybookButton {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
    disabled: false,
    children: "un bouton", // Default button text
};
