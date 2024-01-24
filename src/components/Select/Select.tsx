import React, { useRef,useState, useEffect } from 'react';
import { css , cx } from "@emotion/css";
import { theme } from "../../theme/theme";
import { Icon } from "../Icon/Icon";

// ------------------------------------------------------
export interface SelectProps {
  title?:string
  options: string[] 
  isDarkMode?:boolean 
  disabled: boolean
  onSelect: (selectedValue: string) => void
  isBlock?:boolean
  className?: string;
  
  
}
// ------------------------------------------------------
export const Select: React.FC<SelectProps> = ({ title, options, isDarkMode , disabled, onSelect , isBlock , className }) => {
  isDarkMode = isDarkMode || false;
  isBlock = isBlock || true;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  // ------------------------------------------------------
  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };
  const handleSelection = (option: string) => {
    if (!disabled){

      setIsOpen(!isOpen);
      setSelectedOption(option);
      onSelect(option)
    }
    };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        if (isOpen){
          setIsOpen(false);
          }
      }
    };

    // Attach the listeners on component mount.
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // ------------------------------------------------------
  return (
    <div className={cx(
      className,
      styles.select(isDarkMode , isBlock ,disabled ),
  )}>
    <div className="custom-select" >
      <div className= 'select-header'onClick={handleToggle}  ref={ref}  >
      <input className= 'inputHead' type="text" value={selectedOption || title} />
        <div className={isOpen ? 'rotate chevron' : 'chevron'}>
        <Icon iconName={'chevron-down'} color={disabled ? theme.colors.white : isDarkMode ? theme.colors.white : theme.colors.black} />
        </div>
      </div>
      {isOpen && (
        <ul className='select-list'>
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
// ------------------------------------------------------
const styles = {
  select: (
      isDarkMode: boolean,
      isBlock : boolean,
      disabled :boolean,
  ) => {
    return css`@keyframes fadeIn {
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
      width: 253px;
      height : 35px ;
      background-color: ${disabled ? theme.colors.disabled : isDarkMode ? theme.colors.black : theme.colors.white};
      border: 2px solid ${disabled ? theme.colors.disabled :theme.colors.primary};
      border-radius: 25px;
      margin: 5px;
      
      margin-bot:0;
    } 
    .inputHead{
      cursor: ${disabled ? "not-allowed" : "cursor: auto;" };
      font-family:${theme.font.family} ;
      color: ${disabled ? theme.colors.white : isDarkMode ? theme.colors.white : theme.colors.black};
      font-size: 16px;
      padding-left:25px;
      height: 100%;
      width: 100%;
      border-radius: 25px;
      background-color: ${disabled ? theme.colors.disabled : isDarkMode ? theme.colors.black : theme.colors.white};
      margin: 0;
      border: 1px solid ${disabled ? theme.colors.disabled :theme.colors.primary};
    }
    .inputHead:focus {
      outline: none;
  }
    .chevron svg {
      position: absolute;
      top: calc(25%); 
      right: 10px; 
      width: 28px;
      transition: transform 0.5s ease;
      z-index:2;
    }
    .rotate svg {
      transform: rotate(180deg);
    }

    .select-header:hover{
      border: 2px solid ${disabled ? theme.colors.disabled :theme.colors.primary};
    }
    .select-list {
      animation: fadeIn 1s forwards;
      z-index: 1;
      position: ${isBlock ? 'relative' : 'absolute'}; 
      ${isBlock ? ' top: -40px;' :" transform: translateY(-40px);"}  
      list-style-type: none;
      width: 253px;
      border: 2px solid ${theme.colors.primary};
      border-radius: 25px;
      color: ${isDarkMode ?  theme.colors.black : theme.colors.white};
      margin:0 5px -40px 5px;
      padding:38px 0  20px 0;
      background-color: ${isDarkMode ? theme.colors.black : theme.colors.white};
    }
    
    .liDiv{
      background-color: ${disabled ? theme.colors.disabled :isDarkMode ? theme.colors.black : theme.colors.white};
      padding:0;
      width:100%;
      height :35px ;
    }
    .liDiv:hover{
      background-color:${disabled ? theme.colors.disabled : theme.colors.primary};
    }
    
    li{
      display: flex;
      align-items: center; 
      width:100%;
      height:100%;
      cursor: pointer;
      color: ${isDarkMode ? theme.colors.white : theme.colors.black};
      padding-left:25px;
      font-size: 16px;
    }
    li:hover{
      color:${theme.colors.black};
    }`;
  }}