import React, { useState } from "react";

export interface FlowchartProps {
    nodes: {
        id: string;
        label: string;
        position: { x: number; y: number };
        children: string[];
    }[];
}

function Flowchart({ nodes }: FlowchartProps) {
    const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
    const nodeRadius = 20;

    const handleNodeMouseEnter = (nodeId: string) => {
        setHoveredNodeId(nodeId);
    };

    const handleNodeMouseLeave = () => {
        setHoveredNodeId(null);
    };

    return (
        <svg width={800} height={600}>
            {nodes.map((node) => (
                <g key={node.id}>
                    {node.children.map((childId) => {
                        const childNode = nodes.find((n) => n.id === childId);
                        if (!childNode) return null;
                        const dx = childNode.position.x - node.position.x;
                        const dy = childNode.position.y - node.position.y;
                        const angle = Math.atan2(dy, dx);
                        const arrowLength = 10;
                        const arrowX = childNode.position.x - Math.cos(angle) * arrowLength;
                        const arrowY = childNode.position.y - Math.sin(angle) * arrowLength;
                        return (
                            <g key={`${node.id}-${childId}`}>
                                <line
                                    x1={node.position.x}
                                    y1={node.position.y}
                                    x2={childNode.position.x}
                                    y2={childNode.position.y}
                                    style={{ stroke: "#000", strokeWidth: 2 }}
                                />
                                <path
                                    d={`M${arrowX},${arrowY} L${childNode.position.x},${childNode.position.y} L${arrowX},${arrowY}`}
                                    style={{ fill: "#000" }}
                                />
                            </g>
                        );
                    })}
                    <circle
                        cx={node.position.x}
                        cy={node.position.y}
                        r={nodeRadius}
                        style={{
                            fill: "#fff",
                            stroke: hoveredNodeId === node.id ? "purple" : "#000",
                            strokeWidth: 2,
                        }}
                        onMouseEnter={() => handleNodeMouseEnter(node.id)}
                        onMouseLeave={handleNodeMouseLeave}
                    />
                    <text
                        x={node.position.x}
                        y={node.position.y}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize="16"
                        style={{
                            fill: hoveredNodeId === node.id ? "purple" : "#000",
                        }}
                        onMouseEnter={() => handleNodeMouseEnter(node.id)}
                        onMouseLeave={handleNodeMouseLeave}
                    >
                        {node.label}
                    </text>
                </g>
            ))}
        </svg>
    );
}

export default Flowchart;
