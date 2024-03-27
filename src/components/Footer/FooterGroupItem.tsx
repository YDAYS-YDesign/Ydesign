import { css } from "@emotion/css";

interface FooterGroupItemProps {
    href?: string;
    text: string;
}

const FooterGroupItem = ({ href, text }: FooterGroupItemProps) => {
    if (!href) {
        return <p className={styles.footerGroupText}>{text}</p>;
    } else {
        return (
            <a href={href} className={styles.footerGroupLink}>
                {text}
            </a>
        );
    }
};

const styles = {
    footerGroupLink: css`
        font-size: 16px;
        color: #333;
        text-decoration: none;
        width: fit-content;
        &:hover {
            text-decoration: underline;
        }
    `,
    footerGroupText: css`
        font-size: 16px;
        color: #333;
        width: fit-content;
        margin: 0;
    `,
};

export default FooterGroupItem;
