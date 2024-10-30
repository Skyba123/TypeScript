"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".closebtn");
const openModalBtn = document.querySelector(".cta button");
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
window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    console.log("Поточна позиція прокрутки:", scrollPosition);
});
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth));
}
function handleScrollAnimation() {
    const animatedSections = document.querySelectorAll(".animated-section");
    animatedSections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add("visible");
        }
    });
}
window.addEventListener("scroll", handleScrollAnimation);
handleScrollAnimation();
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://jsonplaceholder.typicode.com/posts");
            const data = yield response.json();
            const container = document.getElementById("data-container");
            if (container) {
                data.slice(0, 5).forEach((item) => {
                    const post = document.createElement("div");
                    post.className = "post";
                    post.innerHTML = `<h4>${item.title}</h4><p>${item.body}</p>`;
                    container.appendChild(post);
                });
            }
        }
        catch (error) {
            console.error("Помилка при отриманні даних:", error);
        }
    });
}
fetchData();
