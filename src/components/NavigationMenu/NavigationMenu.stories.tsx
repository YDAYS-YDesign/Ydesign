import React from "react";
import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import { NavigationMenu, NavigationMenuProps } from "./NavigationMenu";
import { NavigationMenuItem } from "./NavigationMenuItem";
import { Button } from "../Button/Button";
import { css } from "@emotion/css";
import logo from "../../assets/logo.png";

const StorybookNavigationMenu: React.FC<NavigationMenuProps> = (props) => {
    return (
        <YDesignWrapper>
            <div
                className={css`
                    width: 100%;
                    height: 90vh;
                `}
            >
                <NavigationMenu className={styles.navigationMenu} items={[]}>
                    <div className={styles.logo}>
                        <img src={logo} alt="YDesign Logo" width={30} />
                        <p>YDesign</p>
                    </div>
                    <NavigationMenuItem
                        items={[
                            {
                                titleParent: "Design language",
                                children: [
                                    {
                                        titleChildren: "Design principles",
                                        url: "/design-principles",
                                    },
                                    {
                                        titleChildren: "Colors",
                                        url: "/colors",
                                    },
                                    {
                                        titleChildren: "Layout",
                                        url: "/layout",
                                    },
                                    {
                                        titleChildren: "Motion",
                                        url: "/motion",
                                    },
                                    {
                                        titleChildren: "Shapes",
                                        url: "/shapes",
                                    },
                                    {
                                        titleChildren: "Typography",
                                        url: "/typography",
                                    },
                                ],
                            },
                        ]}
                    />
                    <NavigationMenuItem
                        items={[
                            {
                                titleParent: "Guidelines",
                                children: [
                                    {
                                        titleChildren: "Accessibility",
                                        url: "/accessibility",
                                    },
                                    {
                                        titleChildren: "Content design",
                                        url: "/content-design",
                                    },
                                    {
                                        titleChildren: "Design token",
                                        url: "/design-token",
                                    },
                                ],
                            },
                        ]}
                    />
                    <NavigationMenuItem
                        items={[
                            {
                                title: "Components",
                                url: "/components",
                            },
                        ]}
                    />
                    <Button content="Get Started" className={styles.button} />
                </NavigationMenu>
            </div>
        </YDesignWrapper>
    );
};

const styles = {
    navigationMenu: css`
        margin: 0;
        padding: 0;
        align-items: end;
        position: relative;
    `,
    logo: css`
        display: flex;
        align-items: center;
        font-family: "Exo", sans-serif;
    `,
    button: css`
        margin-bottom: 10px;
    `,
};

export default {
    title: "NavigationMenu",
    component: StorybookNavigationMenu,
    parameters: {
        backgrounds: { disable: true },
    },
    items: [
        {
            title: "Home",
            url: "/home",
        },
    ],
};

export const NavigationMenuStory = () => <StorybookNavigationMenu items={[]} />;
