import { css } from '@emotion/css';

interface FooterGroupRowProps {
    children: React.ReactNode;
}

const FooterGroupRow = ({children}: FooterGroupRowProps) => {
    return (
        <div className={styles.footerGroupRow}>
            {children}
        </div>
    );
}

const styles = {
    footerGroupRow: css`
        display: flex;
        justify-content: space-between;
        width: 80%;
        padding-bottom: 20px;
        @media (max-width: 768px) {
            flex-direction: column; 
            align-items: center; 
            width: 100%; 
        }
`,
};
export default FooterGroupRow;