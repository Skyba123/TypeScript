export type Post = {
    title: string;
    body: string;
};

export type HTMLElementWithClass = HTMLElement & {
    classList: DOMTokenList;
};