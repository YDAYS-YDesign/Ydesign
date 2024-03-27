import { css } from "@emotion/css";

interface FooterCompanyProps {
    companyName: string;
    companyCreationDate?: string;
}

const FooterCompany = ({
    companyName,
    companyCreationDate,
}: FooterCompanyProps) => {
    let actualDate = new Date();
    let year = actualDate.getFullYear().toString();
    return (
        <p className={styles.footerCompany}>
            {companyName} ©{" "}
            {companyCreationDate && companyCreationDate != year
                ? companyCreationDate + "-" + year
                : year}
        </p>
    );
};

const styles = {
    footerCompany: css`
        height: fit-content;
        margin: auto 0;
        @media (max-width: 1024px) {
            display: flex;
            justify-content: center;
            width: 100%;
            order: 5;
        }
    `,
};
export default FooterCompany;
