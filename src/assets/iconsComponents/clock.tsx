import * as React from "react";
import type { SVGProps } from "react";
const SvgClock = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="clock_svg__feather clock_svg__feather-clock"
        {...props}
    >
        <circle cx={12} cy={12} r={10} />
        <path d="M12 6v6l4 2" />
    </svg>
);
export default SvgClock;
