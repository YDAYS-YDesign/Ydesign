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

export const DefaultSelect: Story = (args: SelectProps) => {
    const handleSelect = (selectedOption: string) => {
        action("onSelect")(selectedOption);
    };

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
                <Select
                    title={args.title}
                    isDarkMode={args.isDarkMode}
                    // onSelect={handleSelect}

                    {...args}
                />
            </div>
        </YDesignWrapper>
    );
};

DefaultSelect.args = {
    title: "Select an option",
    options: ["First option", "Second option", "Third option", "Fourth option"],
    isDarkMode: false,
    isBlock: true,
};

DefaultSelect.argTypes = {
    title: {
        control: "string",
    },
    options: {
        control: {
            type: "array",
            of: { type: "string" },
        },
    },
    isDarkMode: {
        control: "boolean",
    },
    onSelect: {
        table: {
            disable: true,
        },
    },
    isBlock: {
        control: "boolean",
    },
};

export default meta;
