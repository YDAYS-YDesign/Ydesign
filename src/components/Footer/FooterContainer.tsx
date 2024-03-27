import { css } from "@emotion/css";

interface FooterContainerProps {
    children: React.ReactNode;
}

const FooterContainer = ({ children }: FooterContainerProps) => {
    return <div className={styles.footerContainer}>{children}</div>;
};

const styles = {
    footerContainer: css`
        background-color: #f5f5f5;
        padding: 40px 60px;
        color: #333;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (max-width: 768px) {
            padding: 20px 30px;
            border-bottom: 30px solid #a58cff;
        }
    `,
};

export default FooterContainer;
