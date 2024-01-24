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
        margin-top: 20px;
        overflow: hidden;
        display: none;
        animation: 0.8s ${isOpen ? "slideDown" : "slideUp"};
        display: ${isOpen ? "block" : "none"};
        @keyframes slideDown {
            0% {
                max-height: 0px;
            }
            100% {
                max-height: 100px;
            }
        }
        @keyframes slideUp {
            0% {
                max-height: 100px;
            }
            100% {
                max-height: 0px;
            }
        }
    `,
    hidden: css`
        display: none;
    `,
    accordionDescription: css`
        max-width: 100%;
        word-wrap: break-word;
        text-align: justify;
    `,
};

export default Accordion;
