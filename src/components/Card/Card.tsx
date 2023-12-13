// import { css } from "@emotion/css";
import React from "react";
import { Button } from "../Button/Button";
import { css } from "@emotion/css";
import { Theme } from "../../theme/theme";
import { useTheme } from "../../hooks/useTheme";

export interface CardProps {
    imgSrc?: string;
    imgAlt?: string;
    title?: string;
    description?: string;
    buttonText?: string;
    link?: string;
}

export const Card: React.FC<CardProps> = ({
    imgSrc,
    imgAlt,
    title,
    description,
    buttonText,
    link,
}) => {
    const { theme } = useTheme();
    return (
        <div className={styles.container}>
            {imgSrc && imgAlt && (
                <img src={imgSrc} alt={imgAlt} className={styles.img} />
            )}
            {title && <h1 className={styles.title}>{title}</h1>}
            {description && <p className={styles.description}>{description}</p>}
            {buttonText && link && (
                <Button rounded className={styles.buttonText(theme)}>
                    {buttonText}
                </Button>
            )}
        </div>
    );
};

const styles = {
    container: css`
        width: 15rem;
        border-radius: 1rem;
        box-shadow: 0px 10px 8px #999;
        display: flex;
        flex-direction: column;
        margin: 0.5rem;
        background-color: #ffefa3;
        height: fit-content;
    `,
    img: css`
        width: 100%;
        border-radius: 1rem 1rem 0 0;
    `,
    title: css`
        margin: 0.5rem 5%;
    `,
    description: css`
        margin: 0.5rem 5%;
    `,
    buttonText: (theme: Theme) => css`
        text-align: left;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        color: white;
        text-decoration: none;
        margin: 0.5rem 0.5rem;
        &:focus {
            outline: "2px dotted transparent";
            outline-offset: 2px;
            box-shadow:
                0 0 0 2px ${theme.colors.yellow},
                0 0 0px 5px ${theme.colors.primary};
        }
    `,
};
