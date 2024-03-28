import React from "react";
import { Meta, Story } from "@storybook/react";
import BoxPlot, { BoxPlotProps } from "./BoxPlot";

const meta: Meta = {
  title: "BoxPlot",
  component: BoxPlot,
};

const Template: Story<BoxPlotProps> = (args) => <BoxPlot {...args} />;

export const DefaultBoxPlot: Story<BoxPlotProps> = Template.bind({});
DefaultBoxPlot.args = {
  data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
};

export default meta;
