import React, { useRef, useState, useEffect } from "react";
import { css, cx } from "@emotion/css";
import { theme } from "../../theme/theme";
import { Icon } from "../Icon/Icon";
import { t } from "@storybook/theming/dist/create-df04f5c3";

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
    onSelect: (selectedValue: string[]) => void;
}

export const SelectVDeux: React.FC<SelectV2Props> = ({
    title,
    options: initialOptions,
    darkMode,
    disabled,
    className,
    size,
    onSelect
}) => {
    darkMode = darkMode || false;
    size = size || 2;
    disabled = disabled || false;
    const [isOpen, setIsOpen] = useState(false);
    const [valueInput, setValueInput] = useState(title);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [options, setOptions] = useState<string[]>(initialOptions);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueInput(event.target.value);
        const sortedOptions = initialOptions.filter(option =>
            option.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setOptions(sortedOptions);
    };

    
    const handleOptionClick = (option: string) => {
        console.log("cc")
        setValueInput(option);
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter(selectedOption => selectedOption !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]); 
        }
        setOptions(initialOptions)
    };
    
    
    const getOptionClassName = (option: string) => {
        onSelect(selectedOptions)
        return selectedOptions.includes(option) ? 'selected' : '';
      
    };
    return (
        <div className={cx(
            className,
            styles.select(darkMode, disabled,size),
        ) }>
            <div className="head">
            <input type="text" value={valueInput}  onChange={handleInputChange} onClick={() => setIsOpen(true)} readOnly={!isOpen}  />
            <span className={disabled ? "chevron" : isOpen ? "chevron rotate" : "chevron"} onClick={() => setIsOpen(!isOpen)}>
                        <Icon iconName={"chevron-down"} color={
                                disabled
                                    ? theme.colors.white
                                    : darkMode
                                      ? theme.colors.white
                                      : theme.colors.black
                            } />
                    </span>
            </div>
            {isOpen && !disabled && (
                <div className="container">
                    {options.map((option) => (
                        <div key={option}   className={`option ${getOptionClassName(option)}`}  onClick={() => handleOptionClick(option) }>
                            {option}
                        </div>
                    ))}
                </div>
            )}
            </div>
    );
};

const styles = {
    select: (darkMode: boolean, disabled: boolean, size: Size ) => {
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
            padding-left:10px;
            background-color: ${disabled ? theme.colors.disabled : darkMode ? theme.colors.black : theme.colors.white};
            border: 2px solid ${disabled ? theme.colors.disabled : darkMode ? theme.colors.primary : theme.colors.primary};
            border-radius: 25px;
            z-index:9;
        }
        
        .head input {
            flex: 1;
            background-color: ${disabled ? theme.colors.disabled : darkMode ? theme.colors.black : theme.colors.white};
            border: none;
            color: ${!darkMode
                  ? theme.colors.black
                  : theme.colors.white};
            outline: none;
        }
        
        .chevron {
            width:100%;
            cursor: pointer;
            transform:translateY(3px)
        }
        
    
        .container {
            background-color: ${disabled ? theme.colors.disabled : darkMode ? theme.colors.black : theme.colors.white};
            border: 1px solid ${disabled ? theme.colors.disabled : darkMode ? theme.colors.primary : theme.colors.primary};
            border-radius: 25px;
            padding: 17% 0 15px 0px;
            transform:translateY(-17%);
            z-index:2;
            max-height: 150px;
            max-width: 400px;
            overflow: auto;
        }
        .container::-webkit-scrollbar {
            width: 4px; 
            height:20%; 
        }
        
        
        .container::-webkit-scrollbar-track {
            background: ${darkMode ? theme.colors.black : theme.colors.white}; 
        }
        
        .container::-webkit-scrollbar-thumb {
            background: ${theme.colors.primary};
            border-radius: 5px; 
        }
        
        .container::-webkit-scrollbar-thumb:hover {
            background: ${!darkMode ? theme.colors.black : theme.colors.white}; 
        }
        .option {
            padding: 5px;
            cursor: pointer;
            padding-left:10px;
            color: ${!darkMode
                ? theme.colors.black
                : theme.colors.white};
        }
        
        .option:hover {
            background-color: ${theme.colors.primary};
            color:${theme.colors.black};
        }
        
        .selected{
            color:${theme.colors.black};
            background-color: ${theme.colors.primary};
         }
         .selected:hover{
            color:${theme.colors.white};
            
         }
        `;
    },
};
export default SelectVDeux;