function isInViewport(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

export function initializeScrollAnimation(elements: NodeListOf<HTMLElement>): void {
    function handleScrollAnimation() {
        elements.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", handleScrollAnimation);
    handleScrollAnimation(); 
}