import React from "react";
import Footer, { FooterProps } from "./Footer";
import { css } from "@emotion/css";
import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Footer> = {
    title: "Footer",
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
                <Footer {...args} />
            </div>
        </YDesignWrapper>
    ),
};

type Story = StoryObj<typeof meta>;

export const DefaultFooter: Story = {
    args: {
        footerImg: `../../assets/other/Ydes.png`,
        footerNewsLetter: true,
    },
    argTypes: {
        footerImg: {
            control: "string",
        },
        footerNewsLetter: {
            control: "boolean",
        },
    },
};

export default meta;
