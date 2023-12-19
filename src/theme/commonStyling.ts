export type Sizes = "small" | "medium" | "large";

export const getSizeStyles = (size: Sizes) => {
    let fontSize = 16;
    switch (size) {
        case "small":
            fontSize = 12;
            break;
        case "medium":
            fontSize = 16;
            break;
        case "large":
            fontSize = 20;
            break;
    }
    let padding = "8px 16px";
    switch (size) {
        case "small":
            padding = "4px 10px";
            break;
        case "medium":
            padding = "6px 12px";
            break;
        case "large":
            padding = "8px 14px";
            break;
    }
    let sizes;
    switch (size) {
        case "small":
            sizes = "height: 25px;";
            break;
        case "medium":
            sizes = "height: 30px;";
            break;
        case "large":
            sizes = "height: 35px;";
            break;
    }
    return { fontSize, padding, minSizes: sizes };
};
