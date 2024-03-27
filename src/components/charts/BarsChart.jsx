import React, { useState } from "react";

function BarChart({ chartData }) {
  const [colors, setColors] = useState(chartData.datasets[0].backgroundColor);
  const [values, setValues] = useState(chartData.datasets[0].data);
  const [labels, setLabels] = useState(chartData.labels); // State for changing dates
  const transitionDuration = "0.3s"; // Duration of the transition
  const barWidth = 30; // Width of each bar
  const barSpacing = 10; // Spacing between bars
  const startX = 50; // X-coordinate for the start of the first bar
  const startY = 300; // Y-coordinate for the base of the bars
  const legendX = 400; // X-coordinate for the legend
  const legendY = 50; // Y-coordinate for the legend
  const maxValue = Math.max(...values);
  const minValue = 0;
  const stepSize = Math.ceil(maxValue / 5);

  const handleColorChange = (index, event) => {
    const newColors = [...colors];
    newColors[index] = event.target.value;
    setColors(newColors);
  };

  const handleManualValueChange = (index, event) => {
    const newValues = [...values];
    newValues[index] = parseFloat(event.target.value) || 0;
    setValues(newValues);
  };

  const handleLabelChange = (index, event) => {
    const newLabels = [...labels];
    newLabels[index] = event.target.value;
    setLabels(newLabels);
  };

  const bars = values.map((value, index) => {
    const barHeight = (value / maxValue) * (startY - minValue);
    const barX = startX + index * (barWidth + barSpacing);
    const barY = startY - barHeight;
    return (
      <g key={index}>
        <rect
          x={barX}
          y={barY}
          width={barWidth}
          height={barHeight}
          fill={colors[index]}
          style={{ transition: `all ${transitionDuration}` }}
        />
        <text x={barX + barWidth / 2} y={barY - 5} textAnchor="middle">
          {value}
        </text>
      </g>
    );
  });

  const xAxis = (
    <g>
      <line x1={startX - 10} y1={startY} x2={startX + labels.length * (barWidth + barSpacing) + 10} y2={startY} stroke="black" />
      {labels.map((label, index) => (
        <text key={index} x={startX + index * (barWidth + barSpacing) + barWidth / 2} y={startY + 20} textAnchor="middle">
          {label}
        </text>
      ))}
    </g>
  );

  const yAxis = (
    <g>
      <line x1={startX - 10} y1={startY} x2={startX - 10} y2={minValue} stroke="black" />
      {Array.from({ length: 6 }).map((_, index) => (
        <g key={index}>
          <line x1={startX - 15} y1={startY - index * ((startY - minValue) / 5)} x2={startX - 5} y2={startY - index * ((startY - minValue) / 5)} stroke="black" />
          <text x={startX - 20} y={startY - index * ((startY - minValue) / 5) + 5} textAnchor="end">
            {index * stepSize}
          </text>
        </g>
      ))}
    </g>
  );

  return (
    <div style={{ position: "relative", marginTop: "50px" }}>
      <svg width={600} height={400} style={{ overflow: "visible" }}>
        {bars}
        {xAxis}
        {yAxis}
      </svg>
      <div style={{ position: "absolute", left: legendX, top: legendY }}>
        {colors.map((color, index) => (
          <div key={index} style={{ marginBottom: "5px" }}>
            <input
              type="color"
              value={color}
              onChange={(event) => handleColorChange(index, event)}
              style={{ marginRight: "5px", width: "30px", height: "30px" }}
            />
            <input
              type="number"
              value={values[index]}
              onChange={(event) => handleManualValueChange(index, event)}
              style={{ marginRight: "5px", width: "50px" }}
            />
            <input
              type="text"
              value={labels[index]}
              onChange={(event) => handleLabelChange(index, event)}
              style={{ width: "100px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BarChart;
