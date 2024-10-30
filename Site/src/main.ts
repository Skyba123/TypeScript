const modal = document.querySelector(".modal") as HTMLElement;
const closeModalBtn = document.querySelector(".closebtn") as HTMLElement;
const openModalBtn = document.querySelector(".cta button") as HTMLElement;


import { initializeModal } from "./modules/modal.js";
import { initializeScrollAnimation } from "./modules/scrollAnimation.js";
import { fetchDataAndDisplay } from "./modules/fetchData.js";

initializeModal();
initializeScrollAnimation(document.querySelectorAll(".animated-section") as NodeListOf<HTMLElement>);
fetchDataAndDisplay("https://jsonplaceholder.typicode.com/posts", document.getElementById("data-container") as HTMLElement);