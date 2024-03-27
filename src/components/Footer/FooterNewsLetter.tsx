import { css } from "@emotion/css";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import React from "react";

const FooterNewsLetter = () => {
    return (
        <div className={styles.newsletter}>
            <p className={styles.footerP}>Newsletter</p>
            <Input placeholder="Enter your email" />
            <Button content="Subscribe" />
        </div>
    );
};

const styles = {
    newsletter: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;
    `,
    footerP: css`
        font-family: "Exo", sans-serif;
    `,
};

export default FooterNewsLetter;
