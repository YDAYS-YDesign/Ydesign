import React from "react";

import { css } from "@emotion/css";
import { Icon, IconProps } from "./Icon";
import { IconType } from "../../types/IconType";
import { IconsArray } from "../../types/IconsArray";
import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import { useTheme } from "../../hooks/useTheme";
import { Meta, StoryObj } from "@storybook/react";
import { theme } from "../../theme/theme";

const SearchableIconStory = (props: { args: IconProps }) => {
    const [search, setSearch] = React.useState("");
    const filteredIcons = IconsArray.filter((iconName) =>
        iconName.toLowerCase().includes(search.toLowerCase()),
    );
    const { isDarkMode } = useTheme();

    const handleCopy = (iconName: string) => {
        navigator.clipboard.writeText(iconName);
    };

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />
            <span className={styles.comment}>
                Click name to copy to clipboard
            </span>
            <div className={styles.searchable.container}>
                {filteredIcons.map((iconName) => (
                    <div className={styles.searchable.iconContainer}>
                        <Icon
                            color={props.args.color}
                            size={props.args.size}
                            iconName={iconName as IconType}
                        />
                        <button
                            className={styles.searchable.iconName(isDarkMode)}
                            onClick={() => handleCopy(iconName)}
                        >
                            {iconName}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    comment: css`
        margin-top: 10px;
        display: block;
        font-size: 12px;
        color: grey;
    `,
    single: {
        container: css`
            width: 100%;
            height: 90vh;
            display: flex;
            justify-content: center;
            align-items: center;
        `,
    },
    searchable: {
        container: css`
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin-top: 20px;
        `,
        iconContainer: css`
            width: 110px;
            height: 70px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 5px;
            gap: 10px;
            white-space: nowrap;
            border: 1px solid grey;
        `,
        iconName: (isDarkMode: boolean) => css`
            // remove all styles from button
            background: none;
            border: none;
            padding: 0;
            outline: inherit;
            text-align: center;
            overflow: hidden;

            text-overflow: ellipsis;
            font-size: 12px;
            font-family: "Gill Sans", sans-serif;
            color: ${isDarkMode ? "grey" : "black"};
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            border-radius: 5px;
            &:hover {
                color: ${isDarkMode ? "white" : "grey"};
            }
            &:focus {
                outline: "1px dotted transparent";
                box-shadow: 0 0 0px 2px ${theme.colors.primary};
                border: 1px solid transparent !important;
                color: ${isDarkMode ? "white" : "grey"};
            }
        `,
    },
};

const meta: Meta<typeof Icon> = {
    title: "Icon", // Add a title for your component
    parameters: {
        backgrounds: { disable: true },
    },
    component: (args) => (
        <YDesignWrapper>
            <SearchableIconStory args={args} />
        </YDesignWrapper>
    ),
};

type Story = StoryObj<typeof meta>;

export const IconStory: Story = {
    args: {
        size: "medium",
        color: "grey",
    },
    argTypes: {
        size: {
            control: "select",
            options: ["small", "medium", "large"],
        },
        color: {
            control: "color",
        },
    },
};

export default meta;
