import React from "react";

import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import { Slider } from "./Slider";
import { Meta, StoryObj } from "@storybook/react";
import { css } from "@emotion/css";

const meta: Meta<typeof Slider> = {
    title: "Slider",
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
                <Slider {...args} />
            </div>
        </YDesignWrapper>
    ),
};

type Story = StoryObj<typeof meta>;

export const DefaultSlider: Story = {
    args: {
        disabled: false,
        step: 1,
    },
    argTypes: {
        disabled: {
            control: "boolean",
        },
        step: {
            control: "number",
        },
    },
};

export const DisabledSlider: Story = {
    args: {
        disabled: true,
        value: 0,
        step: 1,
    },
    argTypes: {
        disabled: {
            control: "boolean",
        },
        value: {
            control: "number",
        },
        step: {
            control: "number",
        },
    },
};

export default meta;
