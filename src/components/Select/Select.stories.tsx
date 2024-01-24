import { action } from "@storybook/addon-actions";
import React from "react";
import { Select, SelectProps } from "./Select";
import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import { Meta, StoryObj } from "@storybook/react";
import { css } from "@emotion/css";

const meta: Meta<typeof Select> = {
    title: "Select",
    parameters: {
        backgrounds: { disable: true },
    },
    component: (args) => (
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
                <Select {...args} />
            </div>
        </YDesignWrapper>
    ),
};

type Story = StoryObj<typeof meta>;



export const Small: Story = {
    args: {
        title: "Select an option",
        options: ["First option", "Second option", "Third option", "Fourth option"],
        disabled: false,
        isDarkMode: true,
        isBlock:false,
        size:1,
    },
    argTypes: {
        disabled: {
            control: "boolean",
        },
        isDarkMode: {
            control: "boolean",
        },isBlock:{
            control:"boolean"
        },

    },
};
export const Medium: Story = {
    args: {
        title: "Select an option",
        options: ["First option", "Second option", "Third option", "Fourth option"],
        disabled: false,
        isDarkMode: false,
        isBlock:false,
        size:2,
    },
    argTypes: {
        disabled: {
            control: "boolean",
        },
        isDarkMode: {
            control: "boolean",
        },
        isBlock:{
            control:"boolean"
        },

    },
};
export const Big: Story = {
    args: {
        title: "Select an option",
        options: ["First option", "Second option", "Third option", "Fourth option"],
        disabled: false,
        isDarkMode: false,
        isBlock:true,
        size:3,
    },
    argTypes: {
        disabled: {
            control: "boolean",
        },
        isDarkMode: {
            control: "boolean",
        },isBlock:{
            control:"boolean"
        },

    },
};
export const Disable: Story = {
    args: {
        title: "Select an option",
        options: ["First option", "Second option", "Third option", "Fourth option"],
        disabled: true,
        isDarkMode: false,
        isBlock:false,
    },
    argTypes: {
        disabled: {
            control: "boolean",
        },
        isDarkMode: {
            control: "boolean",
        },isBlock:{
            control:"boolean"
        },

    },
};



export default meta;
