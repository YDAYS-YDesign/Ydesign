// import React, { useState } from "react";
// import { css } from "@emotion/css";
// import { useTheme } from "../../hooks/useTheme";
// import { Theme } from "../../theme/theme";
// import { Icon, IconProps } from "../Icon/Icon";
// import NavigationLink from "./NavigationLink";

// interface ParentItem {
//     titleParent: string;
//     children: ChildItem[];
// }

// interface ChildItem {
//     titleChildren: string;
//     url: string;
// }

// interface Item {
//     title: string;
//     url: string;
// }

// export interface NavigationMenuItemProps {
//     className?: string;
//     isMobile?: boolean;
//     color?: string;
//     items: (Item | ParentItem)[];
// }

// export const NavigationMenuItem: React.FC<NavigationMenuItemProps> = ({
//     color,
//     items,
//     isMobile,
// }: NavigationMenuItemProps) => {
//     const { isDarkMode, theme } = useTheme();
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleItemIcon = () => {
//         setIsOpen(!isOpen);
//     };

//     const chevronIconProps: IconProps = {
//         iconName: isOpen ? "chevron-up" : "chevron-down",
//         size: "medium",
//         color: isDarkMode ? theme.colors.white : theme.colors.black,
//         isClickable: true,
//     };

//     const chevronIconPropsMobile: IconProps = {
//         iconName: isOpen ? "chevron-up" : "chevron-left",
//         size: "medium",
//         color: isDarkMode ? theme.colors.white : theme.colors.black,
//         isClickable: true,
//     };

//     const bgColor = isOpen ? "#e8e2ff;" : "none";

//     return (
//         <div>
//             {items.map((item, index) => {
//                 if ("titleParent" in item) {
//                     const parentItem = item as ParentItem;
//                     return (
//                         <div
//                             key={index}
//                             className={styles.menu}
//                             onClick={toggleItemIcon}
//                         >
//                             <div
//                                 className={styles.menuLine(
//                                     theme,
//                                     color,
//                                     isOpen,
//                                     isDarkMode,
//                                     bgColor,
//                                 )}
//                             >
//                                 <div
//                                     className={styles.menuTitleParent(
//                                         theme,
//                                         isDarkMode,
//                                     )}
//                                 >
//                                     {parentItem.titleParent}
//                                 </div>
//                                 <Icon
//                                     {...(isMobile
//                                         ? chevronIconPropsMobile
//                                         : chevronIconProps)}
//                                 />
//                             </div>
//                             <div
//                                 className={styles.menuContent(
//                                     isOpen,
//                                     isDarkMode,
//                                     theme,
//                                 )}
//                             >
//                                 {parentItem.children.map(
//                                     (child, childIndex) => (
//                                         <p
//                                             key={childIndex}
//                                             className={styles.menuTitleChildren(
//                                                 theme,
//                                                 color,
//                                                 isDarkMode,
//                                             )}
//                                         >
//                                             <NavigationLink
//                                                 url={child.url}
//                                                 title={child.titleChildren}
//                                             />
//                                         </p>
//                                     ),
//                                 )}
//                             </div>
//                         </div>
//                     );
//                 } else {
//                     const singleItem = item as Item;
//                     return (
//                         <div key={index} className={styles.menu}>
//                             <div
//                                 className={styles.menuLine(
//                                     theme,
//                                     color,
//                                     isOpen,
//                                     isDarkMode,
//                                     bgColor,
//                                 )}
//                             >
//                                 <div
//                                     className={styles.menuTitle(
//                                         theme,
//                                         isDarkMode,
//                                     )}
//                                 >
//                                     <NavigationLink
//                                         url={singleItem.url}
//                                         title={singleItem.title}
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     );
//                 }
//             })}
//         </div>
//     );
// };

// const styles = {
//     menu: css`
//         margin: 20px;
//         margin-bottom: 0;
//         width: min-content;
//         cursor: pointer;
//         font-family: "Exo", sans-serif;
//         position: relative;
//     `,
//     menuLine: (
//         theme: Theme,
//         color: string | undefined,
//         isOpen: Boolean,
//         isDarkMode: Boolean,
//         bgColor: string,
//     ) => css`
//         display: flex;
//         align-items: center;
//         padding: 10px;
//         border-bottom: ${isOpen
//             ? `2px solid ${color || theme.colors.primary}`
//             : "2px solid transparent;"};
//         background-color: ${isDarkMode ? "none" : bgColor};
//         :hover {
//             border-bottom: 2px solid ${color || theme.colors.primary};
//         }
//     `,
//     menuTitleParent: (theme: Theme, isDarkMode: Boolean) => css`
//         margin: 0;
//         color: ${isDarkMode ? theme.colors.white : theme.colors.black};
//         padding-right: 10px;
//         width: max-content;
//     `,
//     menuTitleChildren: (
//         theme: Theme,
//         color: string | undefined,
//         isDarkMode: Boolean,
//     ) => css`
//         max-width: 100%;
//         text-align: justify;
//         color: ${isDarkMode ? theme.colors.white : theme.colors.black};
//         border-bottom: 2px solid transparent;
//         word-wrap: break-word;
//         padding-bottom: 10px;
//         padding-top: 10px;
//         margin: 0;
//         :hover {
//             border-bottom: 2px solid ${color || theme.colors.primary};
//         }
//     `,
//     menuTitle: (theme: Theme, isDarkMode: Boolean) => css`
//         color: ${isDarkMode ? theme.colors.white : theme.colors.black};
//     `,
//     menuContent: (isOpen: Boolean, isDarkMode: Boolean, theme: Theme) => css`
//         position: absolute;
//         width: 100%;
//         color: ${isDarkMode ? theme.colors.white : theme.colors.black};
//         overflow: hidden;
//         max-height: ${isOpen ? "400px" : "0"};
//         transition: max-height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
//         box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
//     `,
// };
