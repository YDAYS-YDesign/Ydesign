import React from "react";
import { Select , SelectProps} from "./Select";
import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import { Meta, StoryObj } from "@storybook/react";
import { css } from "@emotion/css";


const handleSelect: SelectProps['onSelect'] = (selectedValue) => {
    console.log('Selected values:', selectedValue);
    
};

const meta: Meta<typeof Select> = {
    
    title: "Select",
    parameters: {
        backgrounds: { disable: true },
    },
    
    component: (args) => (
        
        <YDesignWrapper>
            <div
                className={css`
                    width: 100%;
                    height: 90vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                `}
            >
                <Select  {...args} />

            </div>
        </YDesignWrapper>
    ),
};

type Story = StoryObj<typeof meta>;

export const multipleChoice: Story = {
    args: {
        title: "Select an option",
         options :[
            "Interstellar", "The  Redemption", "The Godfather", "Pulp Fiction",  "Inception", "The Matrix", "The Lord of the of the Ring",
            "The Lord  the ", "The Lord of the King", "The Avengers",
            "Titanic",
          ],
        disabled: false,
        darkMode: false,
        onSelect : handleSelect ,
        multiChoise:true,
    },
    argTypes: {
        disabled: {
            control: "boolean",
        },
        darkMode: {
            control: "boolean",
        },
        multiChoise: {
            control: "boolean",
        },
    },
};
export const uniqueChoice: Story = {
    args: {
        title: "Select an option",
         options :[
            "Interstellar", "The Lord of the King", "The Avengers",
            "Titanic"
          ],
        disabled: false,
        darkMode: true,
        onSelect : handleSelect ,
        multiChoise:false,
    },
    argTypes: {
        disabled: {
            control: "boolean",
        },
        darkMode: {
            control: "boolean",
        },
        multiChoise: {
            control: "boolean",
        },
    },
};

export default meta;