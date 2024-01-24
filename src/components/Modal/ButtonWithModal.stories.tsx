import React, { useState } from 'react';
import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import { Modal, ModalProps } from './Modal';
import { Button, ButtonProps } from './../Button/Button'
import { css } from "@emotion/css";

const ButtonWithModal: React.FC<ButtonProps & { onCloseModal: () => void }> = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

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
                <Button onClick={handleOpenModal} {...props}>
                    Open Modal
                </Button>
                <Modal
                    onClose={handleCloseModal}
                    isOpen={isModalOpen}
                    title="Modal Title"
                    description="Modal Description"
                />  
            </div>
        </YDesignWrapper>
    );
};

export default {
    title: 'ButtonWithModal',
    component: ButtonWithModal,
    parameters: {
        backgrounds: { disable: true },
    },
    argTypes: {
        rounded: { control: 'boolean' },
        title: { control: 'text' },
        description: { control: 'text' },
        onCloseModal: { action: 'onCloseModal' },
    }
};

const Template = (args: ButtonProps & { onCloseModal: () => void }) => <ButtonWithModal {...args} />;

export const ButtonWithModalExample = Template.bind({});
ButtonWithModalExample.args = {
    title: 'Modal Title',
    description: 'Modal Description',
    onCloseModal: () => {},
    isOpen: false,
};
