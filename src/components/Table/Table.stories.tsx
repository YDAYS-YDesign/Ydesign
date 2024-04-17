import React from "react";
import { Table, TableProps } from "./Table";
import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";

import { css } from "@emotion/css";

interface Aliment {
    id: string;
    nom: string;
    poids_g: number;
    cal: number;
    prot: number;
    graisses: number;
    glucides_g: number;
    fibres_g: number;
}

const TableStory: React.FC<TableProps<Aliment>> = (props) => {
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
                <Table {...props} />
            </div>
        </YDesignWrapper>
    );
};

const aliments: Aliment[] = [
    {
        id: "1",
        nom: "Pomme",
        poids_g: 100,
        cal: 52,
        prot: 0.3,
        graisses: 0.2,
        glucides_g: 14,
        fibres_g: 2.4,
    },
    {
        id: "2",
        nom: "Banane",
        poids_g: 100,
        cal: 89,
        prot: 1.1,
        graisses: 0.3,
        glucides_g: 23,
        fibres_g: 2.6,
    },
    {
        id: "3",
        nom: "Avocat",
        poids_g: 50,
        cal: 160,
        prot: 2,
        graisses: 15,
        glucides_g: 9,
        fibres_g: 7,
    },
    {
        id: "4",
        nom: "Poulet",
        poids_g: 100,
        cal: 165,
        prot: 31,
        graisses: 3.6,
        glucides_g: 0,
        fibres_g: 0,
    },
    {
        id: "5",
        nom: "Saumon",
        poids_g: 75,
        cal: 208,
        prot: 20,
        graisses: 13,
        glucides_g: 0,
        fibres_g: 0,
    },
    {
        id: "6",
        nom: "Brocoli",
        poids_g: 120,
        cal: 50,
        prot: 4.2,
        graisses: 0.5,
        glucides_g: 9.6,
        fibres_g: 5.2,
    },
    {
        id: "7",
        nom: "Yaourt",
        poids_g: 150,
        cal: 150,
        prot: 6,
        graisses: 8,
        glucides_g: 12,
        fibres_g: 0,
    },
    {
        id: "8",
        nom: "Riz Basmati",
        poids_g: 150,
        cal: 205,
        prot: 4.3,
        graisses: 0.5,
        glucides_g: 45,
        fibres_g: 0.6,
    },
    {
        id: "9",
        nom: "Épinards",
        poids_g: 100,
        cal: 23,
        prot: 2.9,
        graisses: 0.4,
        glucides_g: 3.6,
        fibres_g: 2.2,
    },
    {
        id: "10",
        nom: "Lentilles",
        poids_g: 100,
        cal: 116,
        prot: 9,
        graisses: 0.4,
        glucides_g: 20,
        fibres_g: 8,
    },
    {
        id: "11",
        nom: "Oeuf",
        poids_g: 50,
        cal: 78,
        prot: 6.3,
        graisses: 5.3,
        glucides_g: 0.6,
        fibres_g: 0,
    },
];

export default {
    title: "Table",
    component: TableStory,
    parametres: {
        background: { disable: true },
    },
    items: {
        control: {
            type: "array",
            of: { type: "Objet" },
        },
        perPage: {
            control: "number",
        },
        title: { control: "string" },
    },
};

const Template = (args: TableProps<Aliment>) => <TableStory {...args} />;

export const Page = Template.bind({});
Page.args = {
    title: "Table Page",
    items: aliments,
    perPage: 3,
};

export const NoPage = Template.bind({});
NoPage.args = {
    title: "Table No page",
    items: aliments,
    perPage: -1,
};
