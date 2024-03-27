import { action } from "@storybook/addon-actions";
import React from "react";
import {  Table , TableProps  } from "./Table";
import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import { Meta, StoryObj } from "@storybook/react";
import { css } from "@emotion/css";

const meta: Meta<typeof Table> = {
    title: "Table",
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
                <Table {...args} />
            </div>
        </YDesignWrapper>
    ),
};

type Story = StoryObj<typeof meta>;

interface Aliment {
    id : string;
    nom: string;
    poids_g: number;
    calories: number;
    proteines_g: number;
    graisses_g: number;
    glucides_g: number;
    fibres_g: number
}

export const DefaultSelect: Story = (args: TableProps<Aliment>) => {
   

    return (
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
                <Table
                    {...args}
                />
            </div>
        </YDesignWrapper>
    );
};

const aliments: Aliment[] = [
    {
        id : "1",
        nom: "z",
        poids_g: 100,
        calories: 52,
        proteines_g: 0.3,
        graisses_g: 0.2,
        glucides_g: 14,
        fibres_g: 2.4
    },
    {
        id : "2",
        nom: "g",
        poids_g: 100,
        calories: 89,
        proteines_g: 1.1,
        graisses_g: 0.3,
        glucides_g: 23,
        fibres_g: 2.6
    },
    {
        id : "3",
        nom: "a",
        poids_g: 50,
        calories: 72,
        proteines_g: 6.3,
        graisses_g: 4.8,
        glucides_g: 0.4,
        fibres_g: 0
    },
    {
        id : "4",
        nom: "p",
        poids_g: 100,
        calories: 239,
        proteines_g: 18.3,
        graisses_g: 17.5,
        glucides_g: 0,
        fibres_g: 0
    },
  
]

DefaultSelect.args = {
    title: "Titre d",
    items: aliments,
    isDarkMode: false,

};

DefaultSelect.argTypes = {
    title: {
        control: "string",
    },
    items: {
        control: {
            type: "array",
            of: { type: "Objet" },
        },
    },
    isDarkMode: {
        control: "boolean",
    },
    isDisabled : {
        control : "boolean"
    }

   
};

export default meta;
