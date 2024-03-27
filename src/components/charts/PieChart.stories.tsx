import React from "react";

import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import { Meta, StoryObj } from "@storybook/react";
import { css } from "@emotion/css";
import PieChart from "./PieChart";

const UserData = [
    {
        id: 1,
        year: 2016,
        userGain: 2000,
        userLost: 82,
    },
    {
        id: 2,
        year: 2017,
        userGain: 456,
        userLost: 345,
    },
    {
        id: 3,
        year: 2018,
        userGain: 788,
        userLost: 555,
    },
    {
        id: 4,
        year: 2019,
        userGain: 900,
        userLost: 455,
    },
    {
        id: 5,
        year: 2020,
        userGain: 4300,
        userLost: 234,
    },
];

const meta: Meta<typeof PieChart> = {
    title: "PieChart",
    parameters: {},
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
                <PieChart
                    title={args.title}
                    hoverColor={args.hoverColor}
                    chartData={args.chartData}
                />
            </div>
        </YDesignWrapper>
    ),
};

type Story = StoryObj<typeof meta>;

export const DefaultPieChart: Story = {
    args: {
        title: "Pie Chart title",
        hoverColor: "purple",
        chartData: {
            dataset: {
                backgroundColor: ["#37247D", "#A58CFF", "#E8E2FF"],
                data: [10, 40, 50],
            },
            labels: ["Label1", "Label2", "Label3"],
        },
    },
    argTypes: {
        hoverColor: {
            control: {
                type: "color",
            },
        },
        chartData: {
            control: {
                type: "object",
            },
        },

        title: {
            control: {
                type: "text",
            },
        },
    },
};

export default meta;
