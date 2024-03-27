import { css } from "@emotion/css";
import React from "react";

const FooterLine = () => {
    return <div className={styles.footerLine}></div>;
};
const styles = {
    footerLine: css`
        width: 50%;
        border-bottom: 1px solid #000;
        padding-bottom: 20px;
        margin-bottom: 20px;
    `,
};
export default FooterLine;
