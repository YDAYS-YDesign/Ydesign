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
                    chartData={{
                        labels: UserData.map((data) => data.year),
                        datasets: [
                            {
                                label: "Users Gained",
                                data: UserData.map((data) => data.userGain),
                                backgroundColor: [
                                    "rgba(75,192,192,1)",
                                    "#ecf0f1",
                                    "#50AF95",
                                    "#f3ba2f",
                                    "#2a71d0",
                                ],
                                borderColor: "black",
                                borderWidth: 2,
                            },
                        ],
                    }}
                />
            </div>
        </YDesignWrapper>
    ),
};

type Story = StoryObj<typeof meta>;

export const DefaultPieChart: Story = {
    args: {},
    argTypes: {},
};

export default meta;
