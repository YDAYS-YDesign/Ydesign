import React from "react";

import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import { ToggleSwitch } from "./ToggleSwitch";
import { Meta, StoryObj } from "@storybook/react";
import { css } from "@emotion/css";
import { theme } from "../../theme/theme";

const meta: Meta<typeof ToggleSwitch> = {
    title: "Toogle",
    parameters: {
        backgrounds: { disable: false },
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
                <ToggleSwitch
                    {...args}
                    className={args.className}
                    size={args.size}
                />
            </div>
        </YDesignWrapper>
    ),
};

type Story = StoryObj<typeof meta>;

export const DefaultToggleSwitch: Story = {
    args: {
        disabled: false,
        checked: false,
        buttonColor: "blue",
        className: "",
        size: "medium",
    },
    argTypes: {
        disabled: {
            control: "boolean",
        },
        checked: {
            control: "boolean",
        },
        buttonColor: {
            control: "color",
        },
        className: {
            control: "text",
        },
        size: {
            control: "select",
            options: ["small", "medium", "large"],
        },
    },
};

export const DisabledToggle: Story = {
    args: {
        disabled: true,
        checked: false,
        buttonColor: "grey",
        className: "",
        size: "medium",
    },
    argTypes: {
        disabled: {
            control: "boolean",
        },
        checked: {
            control: "boolean",
        },
        buttonColor: {
            control: "color",
        },
        className: {
            control: "text",
        },
        size: {
            control: "select",
            options: ["small", "medium", "large"],
        },
    },
};

export default meta;
