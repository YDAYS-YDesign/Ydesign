import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDownLeft = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="arrow-down-left_svg__feather arrow-down-left_svg__feather-arrow-down-left"
        {...props}
    >
        <path d="M17 7 7 17M17 17H7V7" />
    </svg>
);
export default SvgArrowDownLeft;
