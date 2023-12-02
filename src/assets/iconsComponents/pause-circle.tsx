import * as React from "react";
import type { SVGProps } from "react";
const SvgPauseCircle = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="pause-circle_svg__feather pause-circle_svg__feather-pause-circle"
        {...props}
    >
        <circle cx={12} cy={12} r={10} />
        <path d="M10 15V9M14 15V9" />
    </svg>
);
export default SvgPauseCircle;
