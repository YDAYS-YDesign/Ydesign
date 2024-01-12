// import { css } from "@emotion/css";
import React from "react";
import { Button } from "../Button/Button";
import { css, cx } from "@emotion/css";
import { Theme } from "../../theme/theme";
import { useTheme } from "../../hooks/useTheme";
import "./Card.css";

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
        <div className={`container ${styles.container}`}>
            {imgSrc && imgAlt && (
                <img src={imgSrc} alt={imgAlt} className={styles.img} />
            )}
            {title && (
                <div className={`description ${styles.description}`}>
                    {title && <h1 className={styles.title}>{title}</h1>}
                    {description && <p>{description}</p>}
                    {/* {buttonText && link && (
                        <Button rounded className={styles.buttonText(theme)}>
                            {buttonText}
                        </Button>
                    )} */}
                </div>
            )}
        </div>
    );
};

const styles = {
    container: css`
        width: 15rem;
        height: 15rem;
        overflow: hidden;
        border-radius: 1rem;
        box-shadow: 0px 10px 8px #999;
        display: flex;
        flex-direction: column;
        margin: 0.5rem;
        position: relative;
        align-content: center;
    `,
    img: css`
        width: 100%;
        border-radius: 1rem 1rem 0 0;
    `,
    title: css`
        text-align: center;
        margin: 0.5rem 5%;
    `,
    description: css`
        text-align: center;
        width: 15rem;
        position: absolute;
        z-index: 1;
        border-radius: 1rem;
        background-color: #f1c40f;
        top: 80%;
        height: 20rem;
    `,
    buttonText: (theme: Theme) => css`
        position: absolute;
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
