import { css } from "@emotion/css";
import React, { useState } from "react";

interface ChartData {
  title: string;
  labelsTitle: string;
  labels: number[];
  dataset: {
    data: number[];
  };
}

interface Props {
  title: string;
  chartData: ChartData;
}

function LineChart({ title, chartData }: Props) {
  const colors = ["#37247D", "#6D53C8", "#A58CFF", "#D2C5FF", "#E8E2FF"];
  const borderColor = "#111111";

  const canvasWidth = 600;
  const canvasHeight = 400;
  const margin = { top: 20, right: 20, bottom: 50, left: 50 };
  const chartWidth = canvasWidth - margin.left - margin.right;
  const chartHeight = canvasHeight - margin.top - margin.bottom;

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const xScale = (value: number) =>
    ((value - chartData.labels[0]) * chartWidth) /
    (chartData.labels[chartData.labels.length - 1] - chartData.labels[0]);

  const yScale = (value: number) =>
    chartHeight - (value / Math.max(...chartData.dataset.data)) * chartHeight;

  const pathData = chartData.labels
    .map(
      (value, index) =>
        `${xScale(value)},${yScale(chartData.dataset.data[index])}`
    )
    .join(" L ");

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const xAxis = (
    <g transform={`translate(0, ${chartHeight + margin.top})`}>
      <line
        x1="0"
        y1="0"
        x2={chartWidth}
        y2="0"
        stroke={borderColor}
        strokeWidth="1"
      />
      {chartData.labels.map((label, index) => (
        <text
          key={index}
          x={xScale(label)}
          y="15"
          textAnchor="middle"
          fontSize="10"
        >
          {label}
        </text>
      ))}
    </g>
  );

  const yAxis = (
    <g transform={`translate(-5, 0)`}>
      <line
        x1="0"
        y1="0"
        x2="0"
        y2={chartHeight}
        stroke={borderColor}
        strokeWidth="1"
      />
      {chartData.dataset.data.map((value, index) => (
        <g key={index} transform={`translate(0, ${yScale(value)})`}>
          <text textAnchor="end" fontSize="10" x="-8" dy="0.3em">
            {value}
          </text>
        </g>
      ))}
    </g>
  );
  const legend = (
    <div
      id="labels"
      className={css`
        display: flex;
        flex-direction: column;
      `}
    >
      {chartData.labels.map((label, index) => (
        <div
          key={index}
          className={css`
            display: flex;
            align-items: center;
            margin-bottom: 10px;
          `}
        >
          <div
            className={css`
              width: 15px;
              height: 15px;
              background-color: ${colors[index]};
              margin-right: 8px;
            `}
          />
          <text fontSize="12">{label}</text>
        </div>
      ))}
    </div>
  );
  
  

  return (<>

    <svg width={canvasWidth} height={canvasHeight}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <path
          d={`M ${xScale(chartData.labels[0])},${yScale(
            chartData.dataset.data[0]
          )} L ${pathData}`}
          fill="none"
          stroke={borderColor}
          strokeWidth="2"
        />
        {xAxis}
        {yAxis}
        <text
          x={chartWidth / 2}
          y={chartHeight + margin.top + 30}
          textAnchor="middle"
          fontSize="16"
        >
          {title}
        </text>
        <text
          x={chartWidth / 2}
          y={canvasHeight - 10}
          textAnchor="middle"
          fontSize="12"
        >
          {chartData.labelsTitle}
        </text>
        <g>
          {chartData.dataset.data.map((value, index) => (
            <g key={index}>
              <circle
                cx={xScale(chartData.labels[index])}
                cy={yScale(value)}
                r="4"
                fill={colors[index]}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              />
              {hoveredIndex === index && (
                <circle
                  cx={xScale(chartData.labels[index])}
                  cy={yScale(value)}
                  r="7"
                  fill="none"
                  stroke={colors[index]}
                  strokeWidth="2"
                />
              )}
              <text
                x={xScale(chartData.labels[index])}
                y={yScale(value) - 12}
                textAnchor="middle"
                fontSize="10"
                fill={colors[index]}
              >
                {value}
              </text>
            </g>
          ))}
        </g>

      </g>
    </svg>
    {legend}
  </>

  );
}

export default LineChart;
