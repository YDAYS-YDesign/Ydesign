import { css, keyframes } from "@emotion/css";
import React from "react";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
interface Props {
    color?: string;
    size?: number;
}
export const Loader = ({ color = "#000000", size = 20 }: Props) => (
    <div className={styles.loader(color, size)} />
);

const styles = {
    loader: (color: string, size: number) => css`
        border: ${size * 0.2}px solid #f3f3f3;
        border-top: ${size * 0.2}px solid ${color};
        border-radius: 50%;
        width: ${size}px;
        height: ${size}px;
        animation: ${spin} 1s linear infinite;
    `,
};
