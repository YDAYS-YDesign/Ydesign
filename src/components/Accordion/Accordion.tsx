import React, { useState } from "react";
import { Icon, IconProps } from "../Icon/Icon";
import { css, cx } from "@emotion/css";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../theme/theme";

export interface AccordionProps {
    title: string;
    description: string;
}

export const Accordion: React.FC<AccordionProps> = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { isDarkMode, theme } = useTheme();

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const chevronIconProps: IconProps = {
        iconName: isOpen ? "chevron-up" : "chevron-down",
        size: "medium",
        color: isDarkMode ? theme.colors.white : theme.colors.black,
        isClickable: true,
    };

    return (
        <div className={styles.accordion} onClick={toggleAccordion}>
            <div className={styles.accordionLine}>
                <div className={styles.accordionTitle(isDarkMode, theme)}>
                    {title}
                </div>
                <Icon {...chevronIconProps} />
            </div>
            <div className={styles.accordionContent(isOpen, isDarkMode, theme)}>
                <p className={styles.accordionDescription}>{description}</p>
            </div>
        </div>
    );
};

const styles = {
    accordion: css`
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        padding: 30px;
        width: 100%;
        box-sizing: border-box;
        cursor: pointer;
    `,
    accordionLine: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,
    accordionTitle: (isDarkMode: Boolean, theme: Theme) => css`
        margin: 0;
        font-family: "Gill Sans", sans-serif;
        color: ${isDarkMode ? theme.colors.white : theme.colors.black};
    `,
    accordionContent: (
        isOpen: Boolean,
        isDarkMode: Boolean,
        theme: Theme,
    ) => css`
        font-family: "Gill Sans", sans-serif;
        color: ${isDarkMode ? theme.colors.white : theme.colors.black};
        overflow: hidden;
        max-height: ${isOpen ? "400px" : "0"};
        transition: max-height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    `,
    accordionDescription: css`
        max-width: 100%;
        word-wrap: break-word;
        text-align: justify;
    `,
};

export default Accordion;
