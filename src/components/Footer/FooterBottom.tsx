import { css } from '@emotion/css';

interface FooterBottomProps {
    children: React.ReactNode;
}

const FooterBottom = ({children}: FooterBottomProps) => {
    return (
        <div className={styles.footerBottom}>
            {children}
        </div>
    );
}

const styles = {
    footerBottom: css`
    text-align: left;
    width: 100%;
    font-family: "Exo", sans-serif;
    bottom: 50px; 
    display: flex;
    justify-content: space-between;
    height : 60px;
    background-color: #A58CFF;

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100px;
    }
`,
};

export default FooterBottom;
