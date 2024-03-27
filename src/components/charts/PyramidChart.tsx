import React, { useState } from "react";

export interface PyramidChartProps {
  sections: {
    label: string;
    value: number;
    color?: string;
  }[];
}

const PyramidChart: React.FC<PyramidChartProps> = ({ sections }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Function to handle mouse enter event
  const handleMouseEnter = (index: number, value: number, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setHoveredIndex(index);
    setHoveredValue(value);
    setHoverPosition({ x: event.clientX + 10, y: event.clientY - 20 });
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setHoveredValue(null);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {sections.map((section, index) => {
        const backgroundColor = hoveredIndex === index ? "purple" : section.color || "#007bff";
        return (
          <div
            key={index}
            style={{
              width: `${section.value}%`,
              backgroundColor,
              color: "#fff",
              textAlign: "center",
              padding: "10px",
              marginBottom: "5px",
              transition: "background-color 0.3s, width 0.5s",
              position: "relative",
            }}
            onMouseEnter={(e) => handleMouseEnter(index, section.value, e)}
            onMouseLeave={handleMouseLeave}
          >
            <div>{section.label}</div>
            {hoveredIndex === index && hoveredValue && (
              <div
                style={{
                  position: "fixed",
                  left: hoverPosition.x,
                  top: hoverPosition.y,
                  backgroundColor: "rgba(128, 0, 128, 0.9)", // Purple color
                  padding: "5px",
                  borderRadius: "5px",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                  zIndex: 9999,
                }}
              >
                {hoveredValue}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PyramidChart;
