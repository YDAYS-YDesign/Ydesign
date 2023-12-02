import * as React from "react";
import type { SVGProps } from "react";
const SvgCircle = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="circle_svg__feather circle_svg__feather-circle"
        {...props}
    >
        <circle cx={12} cy={12} r={10} />
    </svg>
);
export default SvgCircle;
