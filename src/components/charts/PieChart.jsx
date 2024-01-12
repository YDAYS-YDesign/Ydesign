import React from "react";

function PieChart({ chartData }) {
    const colors = ["#37247D", "#6D53C8", "#A58CFF", "#D2C5FF", "#E8E2FF"];
    const radius = 100;
    const centerX = 200;
    const centerY = 200;

    const total = chartData.datasets[0].data.reduce(
        (acc, value) => acc + value,
        0,
    );

    let startAngle = 0;

    const pieSegments = chartData.datasets[0].data.map((value, index) => {
        const percentage = (value / total) * 100;
        const endAngle = startAngle + (percentage * 360) / 100;

        const startX =
            centerX + Math.cos((startAngle * Math.PI) / 180) * radius;
        const startY =
            centerY + Math.sin((startAngle * Math.PI) / 180) * radius;

        const endX = centerX + Math.cos((endAngle * Math.PI) / 180) * radius;
        const endY = centerY + Math.sin((endAngle * Math.PI) / 180) * radius;

        const largeArcFlag = percentage > 50 ? 1 : 0;

        const path = `M ${centerX} ${centerY} L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;

        startAngle = endAngle;

        return <path key={index} d={path} fill={colors[index]} />;
    });

    const legend = colors.map((color, index) => (
        <g
            key={index}
            transform={`translate(${centerX + radius + 10},${
                centerY - radius + 20 + index * 20
            })`}
        >
            <rect width="15" height="15" fill={color} />
            <text x="20" y="12" fontSize="12">
                {chartData.datasets[0].label}
            </text>
        </g>
    ));

    return (
        <svg width={400} height={400} viewBox="0 0 400 400">
            {pieSegments}
            <text
                x={centerX}
                y={centerY + radius + 30}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="16"
            >
                Distribution of Users
            </text>
            {legend}
        </svg>
    );
}

export default PieChart;
