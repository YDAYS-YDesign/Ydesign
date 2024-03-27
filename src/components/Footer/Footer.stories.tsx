import React from 'react';
import Footer, { FooterProps } from './Footer';
import { css } from "@emotion/css";
import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import { Meta, StoryObj } from "@storybook/react";
import YdesImg from "./Ydes.png";

const storyStyles = css`
    .storyContainer {
        max-width: 960px;
        margin: auto;
    }
`;

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
        footerImg: YdesImg,
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

