import React from "react";

import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import { Meta, StoryObj } from "@storybook/react";
import { css } from "@emotion/css";
import LineChart from "./LineChart";

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

const meta: Meta<typeof LineChart> = {
    title: "LineChart",
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
                <LineChart
                    // title={args.title}
                    // hoverColor={args.hoverColor}
                    chartData={args.chartData}
                />
            </div>
        </YDesignWrapper>
    ),
};

type Story = StoryObj<typeof meta>;

export const DefaultPieChart: Story = {
    args: {
        // title: "Pie Chart title",
        // hoverColor: "blue",
        chartData: {
            labelsTitle: "Labels title",
            title: "Chart title",
            dataset: {
                title: "Dataset title",
                data: [10, 40, 50],
            },
            labels: [1, 2, 3],
        },
    },
    argTypes: {
        // hoverColor: {
        //     control: {
        //         type: "color",
        //     },
        // },
        // chartData: {
        //     control: {
        //         type: "object",
        //     },
        // },
        // title: {
        //     control: {
        //         type: "text",
        //     },
        // },
    },
};

export default meta;
