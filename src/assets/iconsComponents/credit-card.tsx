import * as React from "react";
import type { SVGProps } from "react";
const SvgCreditCard = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="credit-card_svg__feather credit-card_svg__feather-credit-card"
        {...props}
    >
        <rect width={22} height={16} x={1} y={4} rx={2} ry={2} />
        <path d="M1 10h22" />
    </svg>
);
export default SvgCreditCard;
