import React, { useState } from "react";

function PieChart({ chartData }) {
  const colors = chartData.datasets[0].backgroundColor;
  const hoverColor = "#FF0000"; // Red color for hover effect
  const originalRadius = 100;
  const hoverRadius = 120; // Increased radius when hovering
  const transitionDuration = "0.3s"; // Duration of the transition
  const centerX = 200;
  const centerY = 200;

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [manualValues, setManualValues] = useState(
    chartData.datasets[0].data.map(() => 0)
  );

  const total = chartData.datasets[0].data.reduce(
    (acc, value) => acc + value,
    0
  );

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleManualInputChange = (index, event) => {
    const newValues = [...manualValues];
    newValues[index] = parseFloat(event.target.value) || 0;
    setManualValues(newValues);
  };

  const tooltipStyle = {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "5px",
    border: "1px solid #000",
    borderRadius: "5px",
    zIndex: "1",
    top: `${centerY}px`,
    left: `${centerX}px`,
    transform: "translate(-50%, -50%)",
  };

  let startAngle = 0;

  const pieSegments = chartData.datasets[0].data.map((value, index) => {
    const percentage = (value / total) * 100;
    const endAngle = startAngle + (percentage * 360) / 100;

    const radius = hoveredIndex === index ? hoverRadius : originalRadius;

    const startX = centerX + Math.cos((startAngle * Math.PI) / 180) * radius;
    const startY = centerY + Math.sin((startAngle * Math.PI) / 180) * radius;

    const endX = centerX + Math.cos((endAngle * Math.PI) / 180) * radius;
    const endY = centerY + Math.sin((endAngle * Math.PI) / 180) * radius;

    const largeArcFlag = percentage > 50 ? 1 : 0;

    const path = `M ${centerX} ${centerY} L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;

    startAngle = endAngle;

    return (
      <g key={index}>
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

  const tooltipContent =
    hoveredIndex !== null ? (
      <div style={tooltipStyle}>
        <p>{chartData.datasets[0].data[hoveredIndex]}</p>
      </div>
    ) : null;

  return (
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
          Distribution of Users
        </text>
        {legend}
      </svg>
      {tooltipContent}
    </div>
  );
}

export default PieChart;
