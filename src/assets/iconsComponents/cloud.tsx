import * as React from "react";
import type { SVGProps } from "react";
const SvgCloud = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="cloud_svg__feather cloud_svg__feather-cloud"
        {...props}
    >
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10" />
    </svg>
);
export default SvgCloud;
