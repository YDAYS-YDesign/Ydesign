import { css } from "@emotion/css";
import React from "react";

interface FooterGroupRowProps {
    children: React.ReactNode;
}

const FooterGroupRow = ({ children }: FooterGroupRowProps) => {
    return <div className={styles.footerGroupRow}>{children}</div>;
};

const styles = {
    footerGroupRow: css`
        display: flex;
        justify-content: space-between;
        width: 80%;
        padding-bottom: 20px;
        margin: 20px;
        gap: 35px;
        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            width: 100%;
            gap: 20px;
        }
    `,
};
export default FooterGroupRow;
