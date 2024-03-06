import React from "react";
import NavigationMenuItem from "./NavigationMenuItem";
import NavigationMenuItemGroupChild from "./NavigationMenuItemGroupChild";

interface NavigationMenuItemGroupProps {
    menuItemProps: {
        color: string;
        hasIcon: boolean;
        text: string;
    };
    groupChildProps: {
        color: string;
    };
    children: React.ReactNode;
    isOpen: boolean;
    onClick?: () => void;
}

const NavigationMenuItemGroup: React.FC<NavigationMenuItemGroupProps> = ({
    menuItemProps,
    groupChildProps,
    children,
    isOpen,
    onClick,
}) => {
    return (
        <>
            <NavigationMenuItem
                {...menuItemProps}
                isOpen={isOpen}
                onClick={onClick}
            />
            <NavigationMenuItemGroupChild {...groupChildProps} isOpen={isOpen}>
                {children}
            </NavigationMenuItemGroupChild>
        </>
    );
};

export default NavigationMenuItemGroup;
