import React, { useState } from "react";
import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import { NavigationMenu, NavigationMenuProps } from "./NavigationMenu";
import NavigationMenuItem from "./NavigationMenuItem";
import { Button } from "../Button/Button";
import { css } from "@emotion/css";
import logo from "../../assets/logo.png";
import NavigationLink from "./NavigationLink";
import NavigationMenuItemGroup from "./NavigationMenuItemGroup";

const StorybookNavigationMenu: React.FC<NavigationMenuProps> = () => {
    const [designLanguageOpen, setDesignLanguageOpen] = useState(false);
    const [guidelinesOpen, setGuidelinesOpen] = useState(false);

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
                    <NavigationMenuItemGroup
                        menuItemProps={{
                            color: "",
                            hasIcon: true,
                            text: "Design language",
                        }}
                        groupChildProps={{
                            color: "",
                        }}
                        isOpen={designLanguageOpen}
                        onClick={() =>
                            setDesignLanguageOpen(!designLanguageOpen)
                        }
                    >
                        <NavigationLink
                            title="Design principles"
                            url="/design-principles"
                            color=""
                        />
                        <NavigationLink title="Colors" url="/colors" color="" />
                        <NavigationLink title="Layout" url="/layout" color="" />
                        <NavigationLink title="Motion" url="/motion" color="" />
                        <NavigationLink title="Shapes" url="/shapes" color="" />
                        <NavigationLink
                            title="Typography"
                            url="/typography"
                            color=""
                        />
                    </NavigationMenuItemGroup>
                    <NavigationMenuItemGroup
                        menuItemProps={{
                            color: "",
                            hasIcon: true,
                            text: "Guidelines",
                        }}
                        groupChildProps={{
                            color: "",
                        }}
                        isOpen={guidelinesOpen}
                        onClick={() => setGuidelinesOpen(!guidelinesOpen)}
                    >
                        <NavigationLink
                            title="Accessibility"
                            url="/accessibility"
                            color=""
                        />
                        <NavigationLink
                            title="Content design"
                            url="/content-design"
                            color=""
                        />
                        <NavigationLink
                            title="Design token"
                            url="/design-token"
                            color=""
                        />
                    </NavigationMenuItemGroup>
                    <NavigationMenuItem
                        color=""
                        hasIcon={false}
                        isOpen={false}
                        isMobile={false}
                        url="/components"
                        text="Components"
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
        margin-bottom: 15px;

        @media screen and (max-width: 768px) {
            margin: 20px 10px;
        }
    `,
};

export default {
    title: "NavigationMenu",
    component: StorybookNavigationMenu,
    parameters: {
        backgrounds: { disable: true },
    },
};

export const NavigationMenuStory = () => <StorybookNavigationMenu items={[]} />;
