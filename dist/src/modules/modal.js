export function initializeModal() {
    const modal = document.querySelector(".modal");
    const openModalBtn = document.querySelector(".cta button");
    const closeModalBtn = document.querySelector(".closebtn");
    if (openModalBtn && modal && closeModalBtn) {
        openModalBtn.addEventListener("click", () => {
            modal.style.display = "block";
        });
        closeModalBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }
    else {
        console.error("Не удалось найти элементы для модального окна.");
    }
}
