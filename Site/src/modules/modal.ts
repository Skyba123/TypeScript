import { HTMLElementWithClass } from "../types/types";

export function initializeModal() {
    const modal = document.querySelector(".modal") as HTMLElementWithClass;
    const openModalBtn = document.querySelector(".cta button") as HTMLElementWithClass;
    const closeModalBtn = document.querySelector(".closebtn") as HTMLElementWithClass;

    if (openModalBtn && modal && closeModalBtn) {
        openModalBtn.addEventListener("click", () => {
            modal.style.display = "block";
        });

        closeModalBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", (event: MouseEvent) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    } else {
        console.error("Не удалось найти элементы для модального окна.");
    }
}