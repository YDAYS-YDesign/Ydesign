import React from "react";
import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import { Accordion, AccordionProps } from "./Accordion";
import { css } from "@emotion/css";

const StorybookAccordion: React.FC<AccordionProps> = (props) => {
    return (
        <YDesignWrapper>
            <div
                className={css`
                    width: 100%;
                    height: 90vh;
                    justify-content: center;
                    align-items: center;
                `}
            >
                <Accordion {...props}></Accordion>
                <Accordion {...props}></Accordion>
            </div>
        </YDesignWrapper>
    );
};

export default {
    title: "Accordion",
    component: StorybookAccordion,
    parameters: {
        backgrounds: { disable: true },
    },
    argTypes: {
        title: { control: "text" },
        description: { control: "text" },
    },
};

const Template = (args: AccordionProps) => <StorybookAccordion {...args} />;

export const AccordionDefault = Template.bind({});
AccordionDefault.args = {
    title: "un bouton",
    description : "description",
};

