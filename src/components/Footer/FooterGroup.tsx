import { css } from "@emotion/css";
import FooterGroupTitle from "./FooterGroupTitle";

interface FooterGroupProps {
    title: string;
    children: React.ReactNode;
}

const FooterGroup = ({ title, children }: FooterGroupProps) => {
    return (
        <div className={styles.footerGroup}>
            <FooterGroupTitle title={title} />
            {children}
        </div>
    );
};

const styles = {
    footerGroup: css`
        display: flex;
        flex-direction: column;
        font-family: "Exo", sans-serif;
        @media (max-width: 768px) {
            margin-bottom: 20px;
        }
    `,
};

export default FooterGroup;
