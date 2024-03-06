import { css } from '@emotion/css';
import { FaFacebookF, FaInstagram, FaDiscord, FaTwitch, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const FooterIcons = () => {
    return (
        <div className={styles.socials}>
            <FaFacebookF className={styles.socialIcon} />
            <FaInstagram className={styles.socialIcon} />
            <FaDiscord className={styles.socialIcon} />
            <FaTwitch className={styles.socialIcon} />
            <FaTwitter className={styles.socialIcon} />
        </div>
    )
}

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
}

export default FooterIcons;