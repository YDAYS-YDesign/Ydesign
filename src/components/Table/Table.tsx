import React, { useState } from "react";
import { css, cx } from "@emotion/css";
import { Icon } from "../Icon/Icon";

interface Item {
    id: string;
    [key: string]: any;
}

export interface TableProps<T extends Item> {
    title?: string;
    items: T[];
    isDisabled: boolean;
    className?: string;
}
export const Table = <T extends Item>({
    title,
    items,
    isDisabled,
    className,
}: TableProps<T>) => {
    const [arrowIndex, setArrowIndex] = useState(0);
    const columnNames: string[] = Array.from(
        new Set(items.flatMap((item) => Object.keys(item))),
    );
    const [tabIsDecreasing, setTabIsDecreasing] = useState<boolean[]>(new Array(columnNames.length).fill(false));


    const compareString =(a:string , b:string)=>{
        if (a>b) {
            return 1
        } else if(a==b) {
            return 0
        }else{
            return -1
        }
    }
    const sortTable = (index: number) => {
        const isDecreasing = [...tabIsDecreasing];
        isDecreasing[index] = !isDecreasing[index];
        setTabIsDecreasing(isDecreasing);

        if (typeof columnNames[index] === "number") {
            if (isDecreasing[index]) {
                items.sort(
                    (a, b) => a[columnNames[index]] - b[columnNames[index]],
                );
            } else {
                items.sort(
                    (a, b) => b[columnNames[index]] - a[columnNames[index]],
                );
            }
        } else {
            if (isDecreasing[index]) {
                items.sort(
                    (a, b) => compareString(a[columnNames[index]],b[columnNames[index]]),
                );
            } else {
                items.sort(
                    (a, b) => compareString(b[columnNames[index]],a[columnNames[index]]),
                );
            }
        }
    };

    return (
        <div
            className={cx(
                className,
                styles.Table(isDisabled),
            )}
        >
            <h2>{title}</h2>
            <div className="table">
                <div className="row header">
                    {columnNames.map((key, index: number) => (
                        <div
                            className={
                                key == "id"
                                    ? "displayNon"
                                    : arrowIndex === index
                                      ? "cell arrow"
                                      : "cell"
                            }
                            onClick={() => {
                                
                                sortTable(index);
                                setArrowIndex(index);
                            }}
                            key={key}
                        >
                            {key}
                            {tabIsDecreasing[index] && arrowIndex===index  ? (
                                <Icon
                                iconName={"arrow-up"}
                                color="pink"
                            />
                            ) : !tabIsDecreasing[index] && arrowIndex===index ?
                            (
                                <Icon
                                iconName={"arrow-down"}
                                color="pink"
                            />  
                            )  : <></>}
                            
                        </div>
                    ))}
                </div>

                {items.map((item) => (
                    <div className="row" key={item.id}>
                        {columnNames.map((key) => (
                            <div
                                className={key == "id" ? "displayNon" : "cell"}
                                key={key}
                            >
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
    Table: (
        isDisabled: boolean,
    ) => {
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
            .displayNon {
                display: none;
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
