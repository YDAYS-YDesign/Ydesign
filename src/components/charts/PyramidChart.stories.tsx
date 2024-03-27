import React from "react";
import { Story, Meta } from "@storybook/react";
import PyramidChart, { PyramidChartProps } from "./PyramidChart";

const meta: Meta = {
  title: "PyramidChart",
  component: PyramidChart,
  argTypes: {
    sections: { control: { type: "object" } },
  },
};

const Template: Story<PyramidChartProps> = (args) => <PyramidChart {...args} />;

export const DefaultPyramidChart: Story<PyramidChartProps> = Template.bind({});
DefaultPyramidChart.args = {
  sections: [
    {
      label: "Section 1",
      value: 20,
      color: "#007bff",
    },
    {
      label: "Section 2",
      value: 30,
      color: "#007bff",
    },
    {
      label: "Section 3",
      value: 50,
      color: "#007bff",
    },
  ],
};

export default meta;
