import React, { Suspense, lazy, FunctionComponent } from "react";
import { IconType } from "../../types/IconType";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    iconName: IconType;
    size?: "small" | "medium" | "large";
    color: string;
}
// Composant IconWrapper modifié
export const Icon = ({
    iconName,
    size = "medium",
    color = "currentColor",
    ...props
}: IconProps) => {
    const getSizes = (size: string) => {
        switch (size) {
            case "small":
                return {
                    width: "15",
                    height: "15",
                };
            case "medium":
                return {
                    width: "20",
                    height: "20",
                };
            case "large":
                return {
                    width: "25",
                    height: "25",
                };
            default:
                return {
                    width: "20",
                    height: "20",
                };
        }
    };
    const IconComponent: FunctionComponent<React.SVGProps<SVGSVGElement>> =
        lazy(() =>
            import(`../../assets/iconsComponents/${iconName}.tsx`).catch(
                () => ({
                    default: () => <span>Icon not found</span>,
                }),
            ),
        );

    return (
        <Suspense>
            <IconComponent
                {...props}
                stroke={color}
                fill="none"
                viewBox="0 0 24 24"
                {...getSizes(size)}
            />
        </Suspense>
    );
};
