import { css } from '@emotion/css';
import { FaFacebookF, FaInstagram, FaDiscord, FaTwitch, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import footerImage from './Ydes.png';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { Icon, IconProps } from "../Icon/Icon";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={footerImage} className={styles.footerImage} />
            <div className={styles.footerLine}></div>
            <div className={styles.footerSections}>
                {sectionsData.map(section => (
                    <Section key={section.title} title={section.title} items={section.items} />
                ))}
            </div>
            <div className={styles.footerLine}></div>
            <div className={styles.newsletter}>
                <p className={styles.footerP}>Newsletter</p>
                <Input placeholder="Enter your email"  />
                <Button content="Subscribe" />
            </div>
            <div className={styles.socials}>
                <FaFacebookF className={styles.socialIcon} />
                <FaInstagram className={styles.socialIcon} />
                <FaDiscord className={styles.socialIcon} />
                <FaTwitch className={styles.socialIcon} />
                <FaTwitter className={styles.socialIcon} />
            </div>
            <div className={styles.footerBottom}>
                <div className={styles.footerCompany}>
                    company name © 2023
                </div>
            </div>
        </footer>
    );
};

const Section = ({ title, items }) => (
    <div className={styles.section}>
        <h5 className={styles.title}>{title}</h5>
        <ul className={styles.list}>
            {items.map((item, index) => {
                if (typeof item === 'object') {
                    return (
                        <li className={styles.listItem} key={index}>
                            {item.icon && <item.icon className={styles.icon} />}
                            {item.text}
                        </li>
                    );
                } else {
                    return <li className={styles.listItem} key={item}>{item}</li>;
                }
            })}
        </ul>
    </div>
);
const sectionsData = [
    {
        title: 'COMPANY',
        items: ['About', 'Careers', 'Brand Center', 'Blog']
    },
    {
        title: 'HELP CENTER',
        items: ['FAQ', 'Reviews', 'Blog', 'Contact Us']
    },
    {
        title: 'LEGAL',
        items: ['Privacy Policy', 'Licensing', 'Terms & Conditions']
    },
    {
        title: 'CONTACT US',
        items:  [
            { icon: FaPhone, text: ' +33678954367' },
            { icon: FaEnvelope, text: ' ydesign@gmail.com' },
            { icon: FaMapMarkerAlt, text: ' 16 rue height valley Lyon 69009' }
          ]
    }
];

const styles = {
    footer: css`
        background-color: #f5f5f5;
        padding: 40px 60px;
        color: #333;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-bottom: 50px solid #A58CFF;
        @media (max-width: 768px) {
            padding: 20px 30px; 
            border-bottom: 30px solid #A58CFF;
        }
    `,
    footerSections: css`
        display: flex;
        justify-content: space-between;
        width: 80%;
        padding-bottom: 20px;
        @media (max-width: 768px) {
            flex-direction: column; // Empiler les sections verticalement
            align-items: center; 
            width: 100%; 
        }
    `,
    section: css`
        display: flex;
        flex-direction: column;
        font-family: "Exo", sans-serif;
        @media (max-width: 768px) {
            margin-bottom: 20px;
        }
    `,
    title: css`
        margin-bottom: 15px;
        font-size: 18px;
        color: #000;
    `,
    list: css`
        list-style-type: none;
        padding: 0;
    `,
    listItem: css`
        margin-bottom: 10px;
        font-size: 16px;
    `,
    newsletter: css`
        display: flex;
        flex-direction: row; 
        align-items: center; /
        justify-content: center; 
        gap: 10px;
        `,
    input: css`
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        outline: none;
        font-family: "Exo", sans-serif;
    `,
    button: css`
       padding: 10px 20px;
        background-color: #A58CFF;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-family: "Exo", sans-serif;
    `,
    socials: css`
        display: flex;
        position: absolute;
        bottom: 50px; 
        right: 60px; 
        height : 60px;

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
  footerBottom: css`
        text-align: left;
        width: 100%;
        font-family: "Exo", sans-serif;
        bottom: 50px; 
        position: absolute; 
        display: flex;
        margin-left: 100px;
        height : 60px;

        @media (max-width: 1024px) {
            position: static;
            margin: 20px auto;
            order: 3;
        }
    `,
    footerImage: css`
        display: block;
        max-width: 200px;
        margin: 0 auto 20px;
    `,
    footerLine: css`
        display: flex;
        justify-content: space-between;
        width: 50%;
        border-bottom: 1px solid #000;
        padding-bottom: 20px;
        margin-bottom: 20px;
    `,
    footerP: css`
        font-family: "Exo", sans-serif;
    `,
    footerCompany: css`
        @media (max-width: 1024px) { 
            display: flex; 
            justify-content: center; 
            align-items: 
            width: 100%; 
            order: 5;`
};

export default Footer;
