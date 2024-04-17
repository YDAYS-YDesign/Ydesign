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
    cal: number;
    prot: number;
    gais: number;
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
        cal: 52,
        prot: 0.3,
        gais: 0.2,
        glucides_g: 14,
        fibres_g: 2.4
    },
    {
        id : "2",
        nom: "g",
        poids_g: 100,
        cal: 89,
        prot: 1.1,
        gais: 0.3,
        glucides_g: 23,
        fibres_g: 2.6
    },
    {
        id : "3",
        nom: "a",
        poids_g: 50,
        cal: 72,
        prot: 6.3,
        gais: 4.8,
        glucides_g: 0.4,
        fibres_g: 0
    },
    {
        id : "4",
        nom: "p",
        poids_g: 100,
        cal: 239,
        prot: 18.3,
        gais: 17.5,
        glucides_g: 0,
        fibres_g: 0
    },
    {
        id: "5",
        nom: "s",
        poids_g: 75,
        cal: 120,
        prot: 9.5,
        gais: 7.2,
        glucides_g: 4.3,
        fibres_g: 1.8
    },
    {
        id: "6",
        nom: "t",
        poids_g: 120,
        cal: 180,
        prot: 15.6,
        gais: 11.2,
        glucides_g: 6.7,
        fibres_g: 2.3
    },
    {
        id: "7",
        nom: "b",
        poids_g: 50,
        cal: 65,
        prot: 5.3,
        gais: 3.9,
        glucides_g: 2.8,
        fibres_g: 1.1
    }
  
]

DefaultSelect.args = {
    title: "TITRE",
    items: aliments,
    perPage : 3 , 

};

DefaultSelect.argTypes = {
    title: {
        control:{
            type : "string",
        },
    },
    items: {
        control: {
            type: "array",
            of: { type: "Objet" },
        },
    },perPage : {
        control: "number"
    }

   
};

export default meta;
