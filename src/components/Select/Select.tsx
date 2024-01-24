import React, { useRef, useState, useEffect } from "react";
import { css, cx } from "@emotion/css";
import { theme } from "../../theme/theme";
import { Icon } from "../Icon/Icon";

enum Size {
    small = 1,
    medium = 2,
    big = 3,
}

export interface SelectProps {
    title?: string;
    options: string[];
    darkMode?: boolean;
    size?: Size;
    disabled?: boolean;
    block?: boolean;
    onSelect: (selectedValue: string) => void;
    className?: string;
}

export const Select: React.FC<SelectProps> = ({
    title,
    options,
    darkMode,
    disabled,
    onSelect,
    block,
    className,
    size,
}) => {
    darkMode = darkMode || false;
    size = size || Size.medium;
    disabled = disabled || false;
    block = block || true;
    let transf;

    if (block) {
        if (size === 1) {
            transf = "top: -27px;";
        } else if (size === 3) {
            transf = "top: -55px;";
        } else {
            transf = "top: -40px;";
        }
    } else {
        if (size === 1) {
            transf = "transform:translateY(-31px);";
        } else if (size === 3) {
            transf = "transform:translateY(-52px);";
        } else {
            transf = "transform:translateY(-43px);";
        }
    }

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string|null>(null);
    const ref = useRef<HTMLDivElement>(null);

    const handleToggle = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
        }
    };
    let handleSelection = (option: string) => {
        if (!disabled) {
            setIsOpen(!isOpen);
            setSelectedOption(option);
            onSelect(option);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                if (isOpen) {
                    setIsOpen(false);
                }
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            className={cx(
                className,
                styles.select(darkMode, block, disabled, size, transf),
            ) }
        >
            <div className="custom-select">
                <div className="select-header" onClick={handleToggle} ref={ref}>
                    <input
                        className="inputHead"
                        type="text"
                        value={selectedOption || title}
                    />
                    <div className={isOpen ? "rotate chevron" : "chevron"}>
                        <Icon
                            iconName={"chevron-down"}
                            color={
                                disabled
                                    ? theme.colors.white
                                    : darkMode
                                      ? theme.colors.white
                                      : theme.colors.black
                            }
                        />
                    </div>
                </div>
                {isOpen && (
                    <ul className="select-list">
                        {options.map((option, index) => (
                            <div key={index} className="liDiv">
                                <li onClick={() => handleSelection(option) }>
                                    {option}
                                </li>
                            </div>
                        )) }
                    </ul>
                ) }
            </div>
        </div>
    );
};

const styles = {
    select: (
        darkMode: boolean,
        block: boolean,
        disabled: boolean,
        size: Size,
        transf: string,
    ) => {
        return css`
            @keyframes fadeIn {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }

            .custom-select {
                margin: 3px;
                font-family: "Exo", sans-serif;
            }
            .select-header {
                position: relative;
                z-index: 2;
                display: flex;
                align-items: center;
                width: ${size == 2 ? "253px" : size == 3 ? "400px" : "125px"};
                height: ${size == 2 ? "35px" : size == 3 ? "60px" : "23px"};
                background-color: ${disabled
                    ? theme.colors.disabled
                    : darkMode
                      ? theme.colors.black
                      : theme.colors.white};
                border: 2px solid
                    ${disabled ? theme.colors.disabled : theme.colors.primary};
                border-radius: ${size == 2
                    ? "25px"
                    : size == 3
                      ? "30px"
                      : "20px"};
                margin: 5px;
                margin-bottom: 0;
            }
            .inputHead {
                width: 80%;
                height: 80%;
                margin: 0;
                font-family: ${theme.font.family};
                color: ${disabled
                    ? theme.colors.white
                    : darkMode
                      ? theme.colors.white
                      : theme.colors.black};
                font-size: ${size == 2 ? " 16px" : size == 3 ? "35px" : "9px"};
                padding-left: ${size == 2
                    ? " 25px"
                    : size == 3
                      ? "30px"
                      : "10px"};
                cursor: ${disabled ? "not-allowed" : "auto;"};
                background-color: ${disabled
                    ? theme.colors.disabled
                    : darkMode
                      ? theme.colors.black
                      : theme.colors.white};
                border: 0px solid
                    ${disabled ? theme.colors.disabled : theme.colors.primary};
                border-radius: ${size == 2
                    ? "25px"
                    : size == 3
                      ? "30px"
                      : "20px"};
            }
            .inputHead: focus {
                outline: none;
            }
            .chevron svg {
                position: absolute;
                top: calc(${size == 2 ? " 15%" : size == 3 ? "19%" : "13%"});
                right: 10px;
                width: ${size == 2 ? " 28px" : size == 3 ? "50px" : "17px"};
                height: ${size == 2 ? " 28px" : size == 3 ? "38px" : "17px"};
                transition: transform 0.5s ease;
                z-index: 2;
            }
            .rotate svg {
                transform: rotate(180deg);
            }
            .select-header:hover {
                border: 2px solid
                    ${disabled ? theme.colors.disabled : theme.colors.primary};
            }
            .select-list {
                animation: fadeIn 1s forwards;
                z-index: 1;
                position: ${block ? "relative" : "absolute"};
                ${transf}
                list-style-type: none;
                width: ${size == 2 ? "253px" : size == 3 ? "400px" : "125px"};
                border: 2px solid ${theme.colors.primary};
                border-radius: ${size == 2
                    ? " 25px"
                    : size == 3
                      ? "40px"
                      : "20px"};
                color: ${darkMode ? theme.colors.black : theme.colors.white};
                margin: 0 5px -40px 5px;
                padding: ${size == 1
                    ? "30px 0 13px 0 "
                    : size === 2
                      ? "38px 0 20px 0"
                      : "60px 0 30px 0"};
                background-color: ${darkMode
                    ? theme.colors.black
                    : theme.colors.white};
            }

            .liDiv {
                background-color: ${disabled
                    ? theme.colors.disabled
                    : darkMode
                      ? theme.colors.black
                      : theme.colors.white};
                padding: 0;
                width: 100%;
                height: ${size == 2 ? " 32px" : size == 3 ? "60px" : "23px"};
            }
            .liDiv:hover {
                background-color: ${disabled
                    ? theme.colors.disabled
                    : theme.colors.primary};
            }

            li {
                display: flex;
                align-items: center;
                width: 100%;
                height: 100%;
                cursor: pointer;
                color: ${darkMode ? theme.colors.white : theme.colors.black};
                padding-left: ${size == 2
                    ? " 25px"
                    : size == 3
                      ? "30px"
                      : "10px"};
                font-size: ${size == 2 ? " 16px" : size == 3 ? "35px" : "9px"};
            }
            li:hover {
                color: ${theme.colors.black};
            }
        `;
    },
};