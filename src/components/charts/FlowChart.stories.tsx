import React from "react";
import { Meta, Story } from "@storybook/react";
import Flowchart, { FlowchartProps } from "./FlowChart";

const meta: Meta = {
    title: "Flowchart",
    component: Flowchart,
};

const Template: Story<FlowchartProps> = (args) => <Flowchart {...args} />;

export const DefaultFlowchart: Story<FlowchartProps> = Template.bind({});
DefaultFlowchart.args = {
    nodes: [
        {
            id: "1",
            label: "Start",
            position: { x: 100, y: 100 },
            children: ["2", "3"],
        },
        {
            id: "2",
            label: "Step 2",
            position: { x: 300, y: 100 },
            children: ["4"],
        },
        {
            id: "3",
            label: "Step 3",
            position: { x: 100, y: 300 },
            children: ["4"],
        },
        {
            id: "4",
            label: "End",
            position: { x: 300, y: 300 },
            children: [],
        },
    ],
};

export default meta;
