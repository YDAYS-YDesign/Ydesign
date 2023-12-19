import React from "react";

import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { css } from "@emotion/css";
import { Icon } from "../Icon/Icon";
import { IconType } from "../../types/IconType";
import { IconsArray } from "../../types/IconsArray";

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
                <Input
                    {...args}
                    suffix={
                        args.suffix && (
                            <Icon
                                iconName={args.suffix as IconType}
                                color="grey"
                            />
                        )
                    }
                />
            </div>
        </YDesignWrapper>
    ),
};

type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
    args: {
        disabled: false,
        rounded: true,
        placeholder: "placeholder...",
        width: 200,
    },
    argTypes: {
        disabled: {
            control: "boolean",
        },
        rounded: {
            control: "boolean",
        },
        placeholder: {
            control: "text",
        },
        width: {
            control: "number",
        },
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        rounded: true,
        placeholder: "I'm disabled",
        width: 200,
    },
    argTypes: {
        disabled: {
            control: "boolean",
        },
        rounded: {
            control: "boolean",
        },
        placeholder: {
            control: "text",
        },
        width: {
            control: "number",
        },
    },
};

export const WithSuffix: Story = {
    args: {
        disabled: false,
        rounded: true,
        placeholder: "placeholder...",
        width: 200,
        suffix: "check",
    },
    argTypes: {
        disabled: {
            control: "boolean",
        },
        rounded: {
            control: "boolean",
        },
        placeholder: {
            control: "text",
        },
        width: {
            control: "number",
        },
        suffix: {
            control: "select",
            options: IconsArray,
        },
    },
};

export default meta;
