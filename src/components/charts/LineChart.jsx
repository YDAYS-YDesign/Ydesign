import React from "react";

function LineChart({ chartData }) {
    const colors = ["#37247D", "#6D53C8", "#A58CFF", "#D2C5FF", "#E8E2FF"];
    const borderColor = "#111111";

    const canvasWidth = 600;
    const canvasHeight = 400;
    const margin = { top: 20, right: 20, bottom: 50, left: 50 };
    const chartWidth = canvasWidth - margin.left - margin.right;
    const chartHeight = canvasHeight - margin.top - margin.bottom;

    const xScale = (value) =>
        (value - chartData.labels[0]) *
        (chartWidth /
            (chartData.labels[chartData.labels.length - 1] -
                chartData.labels[0]));
    const yScale = (value) =>
        chartHeight -
        (value / Math.max(...chartData.datasets[0].data)) * chartHeight;

    const pathData = chartData.labels
        .map(
            (value, index) =>
                `${xScale(value)},${yScale(chartData.datasets[0].data[index])}`,
        )
        .join(" L ");

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
            {chartData.datasets[0].data.map((value, index) => (
                <g key={index} transform={`translate(0, ${yScale(value)})`}>
                    <text textAnchor="end" fontSize="10" x="-8" dy="0.3em">
                        {value}
                    </text>
                </g>
            ))}
        </g>
    );

    return (
        <svg width={canvasWidth} height={canvasHeight}>
            <g transform={`translate(${margin.left},${margin.top})`}>
                <path
                    d={`M ${xScale(chartData.labels[0])},${yScale(
                        chartData.datasets[0].data[0],
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
                    {chartData.title}
                </text>
                <text
                    x={chartWidth / 2}
                    y={canvasHeight - 10}
                    textAnchor="middle"
                    fontSize="12"
                >
                    {chartData.labelsTitle}
                </text>
                <text
                    transform="rotate(-90)"
                    x={-chartHeight / 2}
                    y={-margin.left + 15}
                    textAnchor="middle"
                    fontSize="12"
                >
                    {chartData.datasets[0].title}
                </text>
                <g>
                    {chartData.datasets[0].data.map((value, index) => (
                        <circle
                            key={index}
                            cx={xScale(chartData.labels[index])}
                            cy={yScale(value)}
                            r="4"
                            fill={colors[index]}
                        />
                    ))}
                </g>
            </g>
        </svg>
    );
}

export default LineChart;
