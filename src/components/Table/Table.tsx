import React, { useState } from "react";
import { css, cx } from "@emotion/css";

interface Item {
    id: string;
}

export interface TableProps<T extends Item> {
    title?: string;
    items: T[];
    isDarkMode: boolean;
    isDisabled: boolean;
    className?: string;
}
export const Table = <T extends Item>({
    title,
    items,
    isDarkMode,
    isDisabled,
    className,
}: TableProps<T>) => {
    const [isDecreasing, setIsDecreasing] = useState(false);
    const [arrowIndex, setArrowIndex] = useState(0);
    const allKeys: string[] = Array.from(
        new Set(items.flatMap((item) => Object.keys(item))),
    );

    const toLowerIfString = (value: any) => {
        return typeof value === "string" ? value.toLowerCase() : value;
    };

    const sortTable = (index: number) => {
        if (isDecreasing) {
            items.sort(
                (a, b) =>
                    toLowerIfString(a[allKeys[index]]) -
                    toLowerIfString(b[allKeys[index]]),
            );
        } else {
            items.sort(
                (a, b) =>
                    toLowerIfString(b[allKeys[index]]) -
                    toLowerIfString(a[allKeys[index]]),
            );
        }
    };

    return (
        <div className={cx(className, styles.Table(isDarkMode, isDisabled,isDecreasing))}>
            <h2>{title}</h2>
            <div className="table">
                <div className="row header">
                    {allKeys.slice(1).map((key, index: number) => (
                        <div
                            className={
                                arrowIndex === index ? "cell arrow" : "cell"
                            }
                            onClick={() => {
                                setIsDecreasing(!isDecreasing);
                                sortTable(index);
                                setArrowIndex(index);
                            }}
                            key={key}
                        >
                            {key}
                        </div>
                    ))}
                </div>

                {items.map((item) => (
                    <div className="row" key={item.id}>
                        {allKeys.slice(1).map((key) => (
                            <div className="cell" key={key}>
                                {item[key]}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
const styles = {
    Table: (isDarkMode: boolean, isDisabled: boolean ,isDecreasing :boolean ) => {
        return css`
            .table {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            .row {
                display: flex;
                margin: 20px;
                justify-content: space-between;
                width: 100%;
                height: 100%;
            }
            .cell {
                margin: 5px;
                border: 1px solid black;
                width: 100%;
                height: 100%;
            }
            .arrow {
                position: relative;
            }
            .arrow::after {
                ${isDecreasing ?  "content: '<';":  "content: '>';" }
                position: absolute;
                top: 0%;
                right: -5px; 
                transform: translateY(-50%);
                width: 0;
                height: 0;
            }
        `;
    },
};
