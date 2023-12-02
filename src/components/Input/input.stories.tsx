import React from "react";

import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { css } from "@emotion/css";

const meta: Meta<typeof Input> = {
    title: "Input",
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
                <Input {...args} />
            </div>
        </YDesignWrapper>
    ),
};

type Story = StoryObj<typeof meta>;

export const InputStory: Story = {
    args: {
        disabled: false,
        value: "",
    },
    argTypes: {
        disabled: {
            control: "boolean",
        },
        value: {
            control: "text",
        },
    },
};

export default meta;
