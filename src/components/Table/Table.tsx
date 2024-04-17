import React, { useState } from "react";
import { css, cx } from "@emotion/css";
import { Icon } from "../Icon/Icon";
import { theme } from "../../theme/theme";
import { Button } from "../Button/Button";

interface Item {
    id: string;
    [key: string]: any;
}

export interface TableProps<T extends Item> {
    title?: string;
    items: T[];
    isDisabled: boolean;
    className?: string;
    perPage?: number;
}
export const Table = <T extends Item>({
    title,
    items,
    isDisabled,
    className,
    perPage,
}: TableProps<T>) => {
    if (perPage === -1 || perPage === undefined) {
        perPage = -1;
    }
    const [arrowIndex, setArrowIndex] = useState(0);
    const [page, setPage] = useState(1);
    const columnNames: string[] = Array.from(
        new Set(items.flatMap((item) => Object.keys(item))),
    );
    const [tabIsDecreasing, setTabIsDecreasing] = useState<boolean[]>(
        new Array(columnNames.length).fill(false),
    );

    const compareString = (a: string, b: string) => {
        if (a > b) {
            return 1;
        } else if (a == b) {
            return 0;
        } else {
            return -1;
        }
    };
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
                items.sort((a, b) =>
                    compareString(a[columnNames[index]], b[columnNames[index]]),
                );
            } else {
                items.sort((a, b) =>
                    compareString(b[columnNames[index]], a[columnNames[index]]),
                );
            }
        }
    };

    return (
        <div className={cx(className, styles.Table(isDisabled))}>
            <div className="tabComponent">
                <div className="title">{title}</div>
                <div className="table">
                    <div className="row header">
                        {columnNames.map((key, index: number) => (
                            <div
                                className={
                                    key === "id" ? "disNone" : "cell header"
                                }
                                onClick={() => {
                                    sortTable(index);
                                    setArrowIndex(index);
                                }}
                                key={key}
                            >
                                {key}
                                {tabIsDecreasing[index] &&
                                arrowIndex === index ? (
                                    <div className="arrow">
                                        <Icon
                                            iconName={"arrow-up"}
                                            color={theme.colors.primary}
                                        />
                                    </div>
                                ) : !tabIsDecreasing[index] &&
                                  arrowIndex === index ? (
                                    <div className="arrow">
                                        <Icon
                                            iconName={"arrow-down"}
                                            color={theme.colors.primary}
                                            className="arrow"
                                        />
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                        ))}
                    </div>
                    {perPage !== -1
                        ? items
                              .slice((page - 1) * perPage, page * perPage)
                              .map((item, i: number) => (
                                  <div
                                      className={"row " + i}
                                      id={
                                          page <= items.length / perPage
                                              ? perPage - 1 === i
                                                  ? "noneBorder"
                                                  : ""
                                              : (items.length % perPage) - 1 ===
                                                  i
                                                ? "noneBorder"
                                                : ""
                                      }
                                      key={item.id}
                                  >
                                      {columnNames.map((key, i: number) => (
                                          <div
                                              className={
                                                  key === "id"
                                                      ? "disNone"
                                                      : "cell"
                                              }
                                              key={key}
                                          >
                                              {item[key]}
                                          </div>
                                      ))}
                                  </div>
                              ))
                        : items.map((item, i: number) => (
                              <div
                                  className="row"
                                  id={
                                      i === items.length - 1 ? "noneBorder" : ""
                                  }
                                  key={item.id}
                              >
                                  {columnNames.map((key, i: number) => (
                                      <div
                                          className={
                                              key === "id" ? "disNone" : "cell"
                                          }
                                          key={key}
                                      >
                                          {item[key]}
                                      </div>
                                  ))}
                              </div>
                          ))}
                </div>
                {perPage !== -1 && (
                    <div className="nextPage">
                        <div className="actu">
                            {page} / {Math.ceil(items.length / perPage)}
                        </div>
                        <div className="chang">
                            <Button
                                suffix={"chevron-left"}
                                size={"small"}
                                variant="secondary"
                                onClick={() => {
                                    page != 1 && setPage(page - 1);
                                }}
                            />
                            <Button
                                suffix={"chevron-right"}
                                size={"small"}
                                variant="secondary"
                                onClick={() => {
                                    page < items.length / perPage &&
                                        setPage(page + 1);
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
const styles = {
    Table: (isDisabled: boolean) => {
        return css`
            .tabComponent {
                border: 2px solid ${theme.colors.primary};
                border-radius: 20px;
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0px;
            }
            .title {
                font-weight: bold;
                padding-top: 10px;
                padding-left: 30px;
            }
            .table {
                display: flex;
                padding-top: 10px;
                padding-right: 30px;
                padding-left: 30px;
                flex-direction: column;
                justify-content: space-between;
            }
            .row {
                display: flex;
                text-align: center;
                margin: 0px;
                padding: 10px;
                justify-content: space-between;

                border-bottom: 1px ${theme.colors.primary} solid;
            }
            #noneBorder {
                border-bottom: none;
            }
            .cell {
                margin: 10px;
                width: 100%;
                height: 100%;
                font-weight: 250;
            }
            .cell header {
                text-align: left;
            }
            .header {
                font-weight: 500;
            }
            .arrow {
                display: inline;
                position: absolute;
            }

            .disNone {
                display: none;
            }
            .nextPage {
                border-top: 2px solid ${theme.colors.primary};
                text-align: center;
                padding: 10px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }

            .actu {
                padding: auto;
                vertical-align: middle;
            }
            .chang {
                display:flex;
                flex-direction:row;
                padding: auto;
                cursor:pointeur;
                vertical-align: middle;
            }
            .chang svg {
                margin: auto;
            }
        `;
    },
};
