import * as React from "react";
import type { SVGProps } from "react";
const SvgDisc = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="disc_svg__feather disc_svg__feather-disc"
        {...props}
    >
        <circle cx={12} cy={12} r={10} />
        <circle cx={12} cy={12} r={3} />
    </svg>
);
export default SvgDisc;
