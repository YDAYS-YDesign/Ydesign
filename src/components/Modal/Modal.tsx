import React, { useEffect } from "react";
import { css, cx } from "@emotion/css";
export interface ModalProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    rounded?: boolean;
    title: string;
    description: string;
    onClose: () => void;
    isOpen: boolean;
}

export const Modal: React.FC<ModalProps> = ({
    rounded = true,
    title,
    description,
    onClose,
    isOpen,
}: ModalProps) => {
    const handleClose = () => {
        onClose();
    };

    return (
        <>
            {isOpen && (
                <div
                    className={cx(
                        styles.modal(rounded, isOpen),
                        styles.content,
                    )}
                >
                    <div className={styles.header}>
                        <span className={styles.title}>{title}</span>
                        <button
                            className={styles.closeButton}
                            onClick={handleClose}
                        >
                            &times;
                        </button>
                    </div>
                    <div className={styles.body}>{description}</div>
                </div>
            )}
        </>
    );
};

const styles = {
    modal: (rounded: boolean, isOpen: boolean) => css`
        position: fixed;
        top: 50;
        left: 50;
        display: flex;
        justify-content: center;
        flex-direction: column;
        z-index: 999;
        background: #78abd9;
        border-radius: ${rounded ? "10px" : "0px"};
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        width: ${isOpen ? "80%" : "30%"};
        max-width: 600px;
        overflow: hidden;
    `,
    fadeInOut: css`
        @keyframes fadeInOut {
            0% {
                opacity: 0;
                transform: translateY(-200px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
        animation: fadeInOut 0.8s;
    `,
    fadeOut: css`
        @keyframes fadeOut {
            0% {
                opacity: 1;
                transform: translateY(0);
            }
            100% {
                opacity: 0;
                transform: translateY(-200px);
            }
        }
        animation: fadeOut 0.8s;
    `,
    content: css`
        padding: 20px;
    `,
    header: css`
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid #333;
        padding-bottom: 10px;
        margin-bottom: 10px;
    `,
    title: css`
        font-size: 1.2em;
        font-weight: bold;
    `,
    body: css`
        font-size: 1em;
    `,
    closeButton: css`
        background: none;
        border: none;
        font-size: 1.5em;
        cursor: pointer;
        color: #000000;
    `,
};
