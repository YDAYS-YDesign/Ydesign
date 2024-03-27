import { css } from "@emotion/css";
import FooterGroupRow from "./FooterGroupRow";
import FooterGroup from "./FooterGroup";
import FooterGroupItem from "./FooterGroupItem";
import FooterCompany from "./FooterCompany";
import FooterImage from "./FooterImage";
import FoooterLine from "./FooterLine";
import FooterNewsLetter from "./FooterNewsLetter";
import FooterIcons from "./FooterIcons";
import FooterContainer from "./FooterContainer";
import FooterBottom from "./FooterBottom";
import React from "react";

export interface FooterProps {
    footerImg?: string;
    footerNewsLetter: boolean;
}

const Footer = ({ footerImg, footerNewsLetter }: FooterProps) => {
    return (
        <footer className={styles.footer}>
            <FooterContainer>
                {footerImg && <FooterImage footerImg={footerImg} />}
                <FoooterLine />
                <FooterGroupRow>
                    <FooterGroup title="Company">
                        <FooterGroupItem href="/about" text="About" />
                        <FooterGroupItem href="/careers" text="Careers" />
                        <FooterGroupItem
                            href="/brandCenter"
                            text="Brand Center"
                        />
                        <FooterGroupItem href="/blog" text="Blog" />
                    </FooterGroup>
                    <FooterGroup title="Help Center">
                        <FooterGroupItem href="/faq" text="FAQ" />
                        <FooterGroupItem href="/reviews" text="Reviews" />
                        <FooterGroupItem href="/blog" text="Blog" />
                        <FooterGroupItem href="/contactUs" text="Contact Us" />
                    </FooterGroup>
                    <FooterGroup title="Legal">
                        <FooterGroupItem
                            href="/privacyPolicy"
                            text="Privacy Policy"
                        />
                        <FooterGroupItem href="/licensing" text="Licensing" />
                        <FooterGroupItem
                            href="/termsConditions"
                            text="Terms & Conditions"
                        />
                    </FooterGroup>
                    <FooterGroup title="Contact Us">
                        <FooterGroupItem text="+33678954367" />
                        <FooterGroupItem text="ydesign@gmail.com" />
                        <FooterGroupItem text="16 rue height valley" />
                        <FooterGroupItem text="Lyon 69009" />
                    </FooterGroup>
                </FooterGroupRow>
                <FoooterLine />
                {footerNewsLetter && <FooterNewsLetter />}
            </FooterContainer>
            <FooterBottom>
                <FooterCompany
                    companyName="YDesign"
                    companyCreationDate="2024"
                />
                <FooterIcons />
            </FooterBottom>
        </footer>
    );
};

const styles = {
    footer: css`
        display: flex;
        flex-direction: column;
    `,
};

export default Footer;
