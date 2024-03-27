import { css } from "@emotion/css";
import React from "react";

interface FooterGroupTitleProps {
    title: string;
}

const FooterGroupTitle = ({ title }: FooterGroupTitleProps) => {
    return <h5 className={styles.title}>{title}</h5>;
};

const styles = {
    title: css`
        margin-bottom: 15px;
        font-size: 18px;
        color: #000;
    `,
};
export default FooterGroupTitle;
