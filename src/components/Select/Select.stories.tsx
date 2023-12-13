import React from "react";
import  { useState } from 'react';
import { YDesignWrapper } from "../YDesignWrapper/YDesignWrapper";
import { Select, SelectProps } from "./Select";
import { css } from "@emotion/css";
import { Icon } from "../Icon/Icon";

const StorybookSelect: React.FC<SelectProps> = (props) => {
    const [selectedValue, setSelectedValue] = useState("");
  const handleSelect = (value: string) => {
    setSelectedValue(value);

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
                <Select title={"Select an element "} options={["First option" , "Second option", "Third option","1 ", "Fourth option" ]} themeUser={"light"} onSelect={handleSelect} isBlock={true}/>
            </div>
        </YDesignWrapper>
    );
};

// export default {
//     title: "Select",
//     component: StorybookSelect,
//     parameters: {
//         backgrounds: { disable: true },
//     },
//     argTypes: {
//         children: { control: "text" },
//         variant: {
//             control: "select",
//             options: ["primary", "secondary"],
//         },
//         size: {
//             control: "select",
//             options: ["small", "medium", "large"],
//         },
//         rounded: { control: "boolean" },
//     },
// };