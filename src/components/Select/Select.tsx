import React, { useRef, useState, useEffect } from "react";
import { css, cx } from "@emotion/css";
import { theme } from "../../theme/theme";
import { Icon } from "../Icon/Icon";

enum Size {
    small = 1,
    medium = 2,
    big = 3,
}

export interface SelectV2Props {
    title?: string;
    options: string[];
    darkMode?: boolean;
    size?: Size;
    disabled?: boolean;
    className?: string;
    multiChoise?: boolean;
    onSelect: (selectedValue: string[]) => void;
}

export const SelectVDeux: React.FC<SelectV2Props> = ({
    title,
    options: initialOptions,
    darkMode,
    disabled,
    className,
    multiChoise,
    onSelect,
}) => {
    darkMode = darkMode || false;
    disabled = disabled || false;
    const [isOpen, setIsOpen] = useState(false);
    const [valueInput, setValueInput] = useState(title);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [options, setOptions] = useState<string[]>(initialOptions);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueInput(event.target.value);
        const sortedOptions = initialOptions.filter((option) =>
            option.toLowerCase().includes(event.target.value.toLowerCase()),
        );
        setOptions(sortedOptions);
    };

    const handleOptionClick = (option: string) => {
        if (multiChoise) {
            setValueInput(option);
            if (selectedOptions.includes(option)) {
                setSelectedOptions(
                    selectedOptions.filter(
                        (selectedOption) => selectedOption !== option,
                    ),
                );
            } else {
                setSelectedOptions([...selectedOptions, option]);
            }
            setOptions(initialOptions);
        } else {
            setValueInput(option);
            setIsOpen(!isOpen);
            setSelectedOptions([option]);
            setOptions(initialOptions);
        }
    };

    const getOptionClassName = (option: string) => {
        onSelect(selectedOptions);
        return selectedOptions.includes(option) ? "selected" : "";
    };
    return (
        <div className={cx(className, styles.select(darkMode, disabled))}>
            <div className="head">
                <input
                    type="text"
                    value={valueInput}
                    onChange={handleInputChange}
                    onClick={() => setIsOpen(true)}
                    readOnly={!isOpen}
                />
                <span
                    className={
                        disabled
                            ? "chevron"
                            : isOpen
                              ? "chevron rotate"
                              : "chevron"
                    }
                    onClick={() => setIsOpen(!isOpen)}
                >
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
                </span>
            </div>
            {isOpen && !disabled && (
                <div className="container">
                    <div className="scrollBarContainer">
                        {options.map((option) => (
                            <div
                                key={option}
                                className={`option ${getOptionClassName(option)}`}
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {
    select: (darkMode: boolean, disabled: boolean) => {
        return css`
            @keyframes fadeIn {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
            .chevron svg {
                transition: transform 0.5s ease;
            }
            .rotate svg {
                transform: rotate(180deg);
            }
            .head {
                display: flex;
                position: relative;
                align-items: center;
                justify-content: space-between;
                padding: 5px;
                padding-left: 10px;
                background-color: ${disabled
                    ? theme.colors.disabled
                    : darkMode
                      ? theme.colors.black
                      : theme.colors.white};
                border: 2px solid
                    ${disabled
                        ? theme.colors.disabled
                        : darkMode
                          ? theme.colors.primary
                          : theme.colors.primary};
                border-radius: 25px;
                z-index: 9;
            }
            .head input {
                flex: 1;
                background-color: ${disabled
                    ? theme.colors.disabled
                    : darkMode
                      ? theme.colors.black
                      : theme.colors.white};
                border: none;
                color: ${!darkMode ? theme.colors.black : theme.colors.white};
                outline: none;
            }
            .chevron {
                width: 100%;
                cursor: pointer;
                transform: translateY(3px);
            }
            .container {
                opacity: 0;
                animation: fadeIn 1s forwards;
                background-color: ${disabled
                    ? theme.colors.disabled
                    : darkMode
                      ? theme.colors.black
                      : theme.colors.white};
                border: 1.5px solid
                    ${disabled
                        ? theme.colors.disabled
                        : darkMode
                          ? theme.colors.primary
                          : theme.colors.primary};
                border-radius: 25px;
                padding: 17% 1px 16px 0px;
                transform: translateY(-17%);
                z-index: 2;
                max-height: 150px;
                max-width: 400px;
            }
            .scrollBarContainer {
                width: 100%;
                display: block;
                max-height: 150px;
                max-width: 400px;
                overflow: auto;
            }
            .option {
                padding: 5px;
                cursor: pointer;
                padding-left: 10px;
                margin-right: 1px;
                color: ${!darkMode ? theme.colors.black : theme.colors.white};
            }
            .option:hover {
                background-color: ${theme.colors.primary};
                color: ${theme.colors.black};
            }
            .selected {
                color: ${theme.colors.black};
                background-color: ${theme.colors.primary};
            }
            .selected:hover {
                color: ${theme.colors.white};
            }
            .scrollBarContainer::-webkit-scrollbar {
                width: 4px;
                overflow: hidden;
            }
            .scrollBarContainer::-webkit-scrollbar-track {
                background: ${darkMode
                    ? theme.colors.black
                    : theme.colors.white};
                heigth: 20px;
            }
            .scrollBarContainer::-webkit-scrollbar-thumb {
                background: ${theme.colors.primary};
                border-radius: 70px;
            }
            .scrollBarContainer::-webkit-scrollbar-thumb:hover {
                background: ${!darkMode
                    ? theme.colors.black
                    : theme.colors.white};
            }
        `;
    },
};
export default SelectVDeux;
