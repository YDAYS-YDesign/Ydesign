import { css } from "@emotion/css";
import React from "react";
import { Icon } from "../Icon/Icon";
import { theme } from "../../theme/theme";

import {
    FaFacebookF,
    FaInstagram,
    FaDiscord,
    FaTwitch,
    FaTwitter,
} from "react-icons/fa";

const FooterIcons = () => {
    return (
        <div className={styles.socials}>
            <Icon iconName={"twitter"} color={theme.colors.black} />
            <Icon iconName={"facebook"} color={theme.colors.black} />
            <Icon iconName={"instagram"} color={theme.colors.black} />
            <Icon iconName={"twitch"} color={theme.colors.black} />
        </div>
    );
};

const styles = {
    socials: css`
        display: flex;
        height: fit-content;
        margin: auto 0;

        @media (max-width: 1024px) {
            position: static;
            margin: 20px auto;
            order: 3;
        }
    `,
    socialIcon: css`
        margin-right: 10px;
        font-size: 24px;
        color: #333;
        cursor: pointer;
        @media (max-width: 767px) {
            margin-right: 5px;
        }
    `,
};

export default FooterIcons;
