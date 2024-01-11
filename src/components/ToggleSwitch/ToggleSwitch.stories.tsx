import React from "react";

import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import { ToggleSwitch } from "./ToggleSwitch";
import { Meta, StoryObj } from "@storybook/react";
import { css } from "@emotion/css";

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
                <ToggleSwitch {...args} />
            </div>
        </YDesignWrapper>
    ),
};

type Story = StoryObj<typeof meta>;

export const DefaultToggleSwitch: Story = {
    args: {
        disabled: false,
        forcedChecked: false,
        buttonColor: "red",
    },
    argTypes: {
        disabled: {
            control: "boolean",
        },
        forcedChecked: {
            control: "boolean",
        },
        buttonColor: {
            control: "color",
        },
    },
};

export const DisabledToggle: Story = {
    args: {
        disabled: true,
        forcedChecked: false,
        buttonColor: "grey",
    },
    argTypes: {
        disabled: {
            control: "boolean",
        },
        forcedChecked: {
            control: "boolean",
        },
        buttonColor: {
            control: "color",
        },
    },
};

export default meta;
