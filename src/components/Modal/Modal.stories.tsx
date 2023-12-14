import React from 'react';

import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import { Modal, ModalProps } from './Modal';
import { Meta, StoryObj } from "@storybook/react";
import { css } from "@emotion/css";

const StorybookModal: React.FC<ModalProps> = (props) => {
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
                <Modal {...props}></Modal>
            </div>
        </YDesignWrapper>
    );
}

export default {
    title: "Modal",
    component: StorybookModal,
    parameters: {
        backgrounds: { disable: true },
    },
    argTypes: {
        rounded: { control: "boolean" },
        title: { control: "text" },
        description: { control: "text" },
        onClose: { action: "onClose" },
        isOpen: { control: "boolean" },
    },
};

const Template = (args: ModalProps) => <StorybookModal {...args} />;

export const DefaultModal = Template.bind({});
DefaultModal.args = {
    rounded: false,
    title: "Modal Title",
    description: "Modal Description",
    onClose: () => {},
    isOpen: true,
};

export const RoundedModal = Template.bind({});
RoundedModal.args = {
    rounded: true,
    title: "Modal Title",
    description: "Modal Description",
    onClose: () => {},
    isOpen: true,
};
