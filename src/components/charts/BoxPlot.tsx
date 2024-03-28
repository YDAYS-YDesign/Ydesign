import React from "react";

export interface BoxPlotProps {
  data: number[];
}

const BoxPlot: React.FC<BoxPlotProps> = ({ data }) => {
  // Calculate box plot statistics
  const min = Math.min(...data);
  const q1 = quantile(data, 0.25);
  const median = quantile(data, 0.5);
  const q3 = quantile(data, 0.75);
  const max = Math.max(...data);

  // Calculate whisker length
  const iqr = q3 - q1;
  const lowerWhisker = q1 - 1.5 * iqr;
  const upperWhisker = q3 + 1.5 * iqr;

  // Scale value to fit within the SVG
  const scaleValue = (value: number): number => {
    return 250 - ((value - min) * (250 - 50)) / (max - min);
  };

  return (
    <svg width={400} height={300}>
      {/* Draw x-axis */}
      <line x1={50} y1={250} x2={350} y2={250} stroke="black" />

      {/* Draw y-axis */}
      <line x1={50} y1={250} x2={50} y2={50} stroke="black" />
      <text x={30} y={250} textAnchor="end">
        {max}
      </text>
      <text x={30} y={200} textAnchor="end">
        {q3}
      </text>
      <text x={30} y={150} textAnchor="end">
        {median}
      </text>
      <text x={30} y={100} textAnchor="end">
        {q1}
      </text>
      <text x={30} y={50} textAnchor="end">
        {min}
      </text>

      {/* Draw box plot */}
      <rect
        x={150}
        y={scaleValue(q3)}
        width={50}
        height={scaleValue(q1) - scaleValue(q3)}
        fill="lightblue"
        stroke="black"
      />
      <line x1={150} y1={scaleValue(median)} x2={200} y2={scaleValue(median)} stroke="black" />
    </svg>
  );
};

function quantile(arr: number[], q: number): number {
  const sorted = arr.slice().sort((a, b) => a - b);
  const pos = (sorted.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;
  if (sorted[base + 1] !== undefined) {
    return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
  } else {
    return sorted[base];
  }
}

export default BoxPlot;
