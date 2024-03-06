import * as React from "react";
import type { SVGProps } from "react";
const SvgStopCircle = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="stop-circle_svg__feather stop-circle_svg__feather-stop-circle"
        {...props}
    >
        <circle cx={12} cy={12} r={10} />
        <path d="M9 9h6v6H9z" />
    </svg>
);
export default SvgStopCircle;
