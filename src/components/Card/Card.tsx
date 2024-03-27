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
    isSlider?: boolean;
}
export const Card: React.FC<CardProps> = ({
    imgSrc,
    imgAlt,
    title,
    description,
    buttonText,
    link,
    isSlider = true,
}) => {
    const { theme } = useTheme();
    return (
        <div
            className={`container ${styles.container(
                isSlider,
                imgSrc,
                imgAlt,
            )}`}
        >
            {imgSrc && imgAlt && (
                <img src={imgSrc} alt={imgAlt} className={styles.img} />
            )}

            <div
                className={`${
                    isSlider && imgAlt && imgSrc ? "description" : ""
                } ${styles.description(isSlider, imgAlt, imgSrc)}`}
            >
                {title && <h1 className={styles.title}>{title}</h1>}
                {description && (
                    <p
                        className={styles.text(
                            buttonText,
                            link,
                            isSlider,
                            imgAlt,
                            imgSrc,
                        )}
                    >
                        {description}
                    </p>
                )}
                {buttonText && link && (
                    <Button
                        rounded
                        className={styles.buttonText(theme)}
                        content={buttonText}
                    ></Button>
                )}
            </div>
        </div>
    );
};

const styles = {
    container: (isSilder?: boolean, imgSrc?: string, imgAlt?: string) => css`
        width: 15rem;
        height: ${isSilder || !imgAlt || !imgSrc ? "15rem" : "25rem"};
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
        border-radius: 1rem 1rem 0 0;
    `,
    title: css`
        text-align: center;
        margin: 0.5rem 5%;
    `,
    description: (isSilder?: boolean, imgSrc?: string, imgAlt?: string) => css`
        text-align: center;
        position: absolute;
        z-index: 1;
        border-radius: 1rem;
        background-color: #f1c40f;
        top: ${isSilder && imgAlt && imgSrc
            ? "80%"
            : !isSilder && imgAlt && imgSrc
              ? "40%"
              : "0%"};
        height: 100%;
    `,
    buttonText: (theme: Theme) => css`
        border-radius: 5px;
        padding: 0.5rem 1rem;
        color: white;
        text-decoration: none;
        margin: 0.5rem 0.5rem;
        margin-left: auto;
        display: block;
        margin-right: auto;

        &:focus {
            outline: "2px dotted transparent";
            outline-offset: 2px;
            box-shadow:
                0 0 0 2px ${theme.colors.yellow},
                0 0 0px 5px ${theme.colors.primary};
        }
    `,
    text: (
        buttonText?: string,
        link?: string,
        isSlider?: boolean,
        imgSrc?: string,
        imgAlt?: string,
    ) => css`
        overflow: hidden;
        padding: 0 0.5rem;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: ${(isSlider && buttonText && link) ||
        (!isSlider && buttonText && link) ||
        (!imgAlt && buttonText && link) ||
        (!imgSrc && buttonText && link)
            ? 6
            : 8};
        -webkit-box-orient: vertical;
        word-break: break-word;
    `,
};
