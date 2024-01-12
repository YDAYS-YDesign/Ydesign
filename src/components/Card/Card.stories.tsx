import React from "react";
import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import { css } from "@emotion/css";
import { Icon } from "../Icon/Icon";
import { Card, CardProps } from "./Card";

const CardStory: React.FC<CardProps> = (props) => {
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
                <Card {...props} />
            </div>
        </YDesignWrapper>
    );
};

export default {
    title: "Card",
    component: CardStory,
    parameters: {
        backgrounds: { disable: true },
    },
    argTypes: {
        imgSrc: { control: "text" },
        imgAlt: { control: "text" },
        title: { control: "text" },
        description: { control: "text" },
        //     buttonText: { control: "text" },
        //     link: { control: "text" },
    },
};

// Define default properties for your stories
// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args: CardProps) => <CardStory {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
    imgSrc: "https://media.newyorker.com/photos/65527dfc8891bf3f2830ffd7/1:1/w_1709,h_1709,c_limit/Robin-Pandas-Leave.jpg",
    imgAlt: "panda",
    title: "Panda Géant",
    description:
        "Le Panda géant est un mammifères de la famille des Ursidés, endémique de Chine centrale. Il fait partie de l'ordre des Carnivores, même si son régime alimentaire est constitué à 99 % de végétaux, principalement de bambou",
    // buttonText: "En Savoir Plus",
    // link: "https://www.google.com",
};
