import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import { css } from "@emotion/css";
import "react-tooltip/dist/react-tooltip.css";

export interface Props {
    chartData: {
        labels: string[];
        dataset: {
            data: number[];
            backgroundColor: string[];
        };
    };
    hoverColor: string;
    title: string;
}

function PieChart({ chartData, hoverColor, title }: Props) {
    const colors = chartData.dataset.backgroundColor;
    const originalRadius = 100;
    const hoverRadius = 120; // Increased radius when hovering
    const transitionDuration = "0.3s"; // Duration of the transition
    const centerX = 200;
    const centerY = 200;

    const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
    const [manualValues, setManualValues] = useState(
        chartData.dataset.data.map(() => 0),
    );

    const total = chartData.dataset.data.reduce((acc, value) => acc + value, 0);

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleManualInputChange = (index: number, event: any) => {
        const newValues = [...manualValues];
        newValues[index] = parseFloat(event.target.value) || 0;
        setManualValues(newValues);
    };

    const tooltipStyles = css`
        position: absolute;
        background-color: rgba(255, 255, 255, 0.8);
        padding: 5px;
        border: 1px solid #000;
        border-radius: 5px;
        z-index: 1;
        top: ${centerY}px;
        left: ${centerX}px;
        transform: translate(-50%, -50%);
    `;

    let startAngle = 0;

    const pieSegments = chartData.dataset.data.map((value, index) => {
        const percentage = (value / total) * 100;
        const endAngle = startAngle + (percentage * 360) / 100;

        const radius = hoveredIndex === index ? hoverRadius : originalRadius;

        const startX =
            centerX + Math.cos((startAngle * Math.PI) / 180) * radius;
        const startY =
            centerY + Math.sin((startAngle * Math.PI) / 180) * radius;

        const endX = centerX + Math.cos((endAngle * Math.PI) / 180) * radius;
        const endY = centerY + Math.sin((endAngle * Math.PI) / 180) * radius;

        const largeArcFlag = percentage > 50 ? 1 : 0;

        const path = `M ${centerX} ${centerY} L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;

        startAngle = endAngle;
        return (
            <g id="tooltip-test" data-tip="hello world" key={index}>
                <path
                    d={path}
                    fill={hoveredIndex === index ? hoverColor : colors[index]}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    style={{ transition: `all ${transitionDuration}` }}
                />
            </g>
        );
    });

    const legend = colors.map((color, index) => (
        <g
            key={index}
            transform={`translate(${centerX + originalRadius + 10},${
                centerY - originalRadius + 20 + index * 20
            })`}
        >
            <rect width="15" height="15" fill={color} />
            <text x="20" y="12" fontSize="12">
                {chartData.labels[index]}
            </text>
            <input
                type="number"
                value={manualValues[index]}
                onChange={(event) => handleManualInputChange(index, event)}
                style={{ marginLeft: "10px", width: "40px" }}
            />
        </g>
    ));

    // const tooltipContent =
    //     hoveredIndex !== null ? (
    //         <div className={tooltipStyles}>
    //             <p>{chartData.dataset.data[hoveredIndex]}</p>
    //         </div>
    //     ) : null;

    return (
        <div>
            <div style={{ position: "relative" }}>
                <svg width={400} height={400} viewBox="0 0 400 400">
                    {pieSegments}
                    <text
                        x={centerX}
                        y={centerY + originalRadius + 30}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="16"
                    >
                        {title}
                    </text>
                    {legend}
                </svg>
            </div>
            <Tooltip anchorSelect="#tooltip-test" place="top" float>
                {/*
                // @ts-ignore */}
                {chartData.dataset.data[hoveredIndex]}
            </Tooltip>
        </div>
    );
}

export default PieChart;
