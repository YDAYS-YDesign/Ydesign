import { css } from "@emotion/css";
import React from "react";

interface FooterImageProps {
    footerImg: string;
}

const FooterImage = ({ footerImg }: FooterImageProps) => {
    return <img src={footerImg} className={styles.footerImage} />;
};

const styles = {
    footerImage: css`
        display: block;
        max-width: 200px;
        margin: 0 auto 20px;
    `,
};

export default FooterImage;
