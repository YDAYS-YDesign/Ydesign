import React, { useState } from 'react';
import { css } from "@emotion/css";
import { useTheme } from "../../hooks/useTheme";
import { Sizes, getSizeStyles } from "../../theme/commonStyling";
import { theme } from "../../theme/theme";
import { Icon } from "../Icon/Icon";
import { themes } from "@storybook/theming/dist";

export interface SelectProps {
  title:string
  options: string[] 
  themeUser:string 
  onSelect: (selectedValue: string) => void
  isBlock:boolean
}
export const Select: React.FC<SelectProps> = ({ title, options, themeUser , onSelect,isBlock }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
    setIsOpen(!isOpen);
  };
  const handleSelection = (option: string) => {
    setIsActive(!isActive);
    setSelectedOption(option);
    onSelect(option)
    setIsOpen(false);
  };

  
// ----------------------------------------------------------------


  var colorBackGround=theme.colors.white
  
  var colorMainText= theme.colors.black
  if (themeUser==="darck"){
    colorBackGround= theme.colors.black
    colorMainText=theme.colors.white
  }else if (themeUser==="disabled"){
    colorBackGround=theme.colors.disabled
    colorMainText=theme.colors.white
}
// --------------------------------------------------------------------


  return (
    <div className={css`
    @keyframes fadeIn {
      from {
        opacity: 0; 
      }
      to {
        opacity: 1; 
      }
    }
    .custom-select{
      margin: 3px;
      font-family: 'Exo', sans-serif;
    } 
    .select-header{
      position: relative; 
      z-index: 2;
      display: flex;
      align-items: center; 
      width: 228px;
      height : 35px ;
      background-color: ${colorBackGround};
      border: 2px solid ${theme.colors.primary};
      padding-left:25px;
      border-radius: 25px;
      color: ${colorMainText};
      font-size: 16px;
      margin:5px;
      margin-bot:0;

    } 
    .rotate::after {
      transform: rotate(180deg);
    }

    .select-header:hover{
      border: 2px solid ${theme.colors.primary};
    }
    .select-list-relative {
      animation: fadeIn 1s forwards;
      z-index: 1;
      position: relative; 
      top: -40px;
      list-style-type: none;
      width: 253px;
      border: 2px solid ${theme.colors.primary};
      border-radius: 25px;
      color: ${colorMainText};
      margin:0 5px -40px 5px;
      padding:38px 0  20px 0;
      background-color: ${colorBackGround};
    }
    .select-list-absolute {
      animation: fadeIn 1s forwards;
      z-index:1;
      position: absolute; 
      transform: translateY(-40px);
      list-style-type: none;
      width: 253px;
      border: 2px solid ${theme.colors.primary};
      border-radius: 25px;
      color: ${colorMainText};
      margin:0 5px -40px 5px;
      padding:38px 0  20px 0;
      background-color: ${colorBackGround};
    }
    
    .liDiv{
      background-color: ${colorBackGround};
      padding:0;
      width:100%;
      height :35px ;
    }
    .liDiv:hover{
      background-color:${theme.colors.primary};
    }
    
    li{
      display: flex;
      align-items: center; 
      width:100%;
      height:100%;
      cursor: pointer;
      color: ${colorMainText};
      padding-left:25px;
      font-size: 16px;
    }
    li:hover{
      color:${theme.colors.black};
    }
    `}>

    <div className="custom-select" >
      <div className= {isActive ? 'rotate select-header' : 'select-header'} onClick={handleToggle}>
        {selectedOption || title}
        <Icon iconName={'chevron-down'} color={colorMainText} />
      </div>
      {isOpen && (
        <ul className={isBlock ? 'select-list-relative' : 'select-list-absolute'}>
          {options.map((option, index) => (
            <div key={index} className='liDiv'>
            <li  onClick={() => handleSelection(option)}>
              {option}
            </li>
            </div>
          ))}
        </ul>
      )}
        </div>
    </div>
  );
};
