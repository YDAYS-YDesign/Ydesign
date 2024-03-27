import React, { useEffect, useState } from "react";
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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <>
            {isMobile ? (
                <>
                    <NavigationMenuItem
                        {...menuItemProps}
                        isOpen={isOpen}
                        isMobile={isMobile}
                        onClick={onClick}
                    />
                    <NavigationMenuItemGroupChild
                        {...groupChildProps}
                        isOpen={isOpen}
                        isMobile={isMobile}
                    >
                        {children}
                    </NavigationMenuItemGroupChild>
                </>
            ) : (
                <NavigationMenuItem
                    {...menuItemProps}
                    isOpen={isOpen}
                    isMobile={isMobile}
                    onClick={onClick}
                >
                    <NavigationMenuItemGroupChild
                        {...groupChildProps}
                        isOpen={isOpen}
                        isMobile={isMobile}
                    >
                        {children}
                    </NavigationMenuItemGroupChild>
                </NavigationMenuItem>
            )}
        </>
    );
};

export default NavigationMenuItemGroup;
