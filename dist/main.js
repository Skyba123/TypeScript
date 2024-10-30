const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".closebtn");
const openModalBtn = document.querySelector(".cta button");
import { initializeModal } from "./modules/modal.js";
import { initializeScrollAnimation } from "./modules/scrollAnimation.js";
import { fetchDataAndDisplay } from "./modules/fetchData.js";
initializeModal();
initializeScrollAnimation(document.querySelectorAll(".animated-section"));
fetchDataAndDisplay("https://jsonplaceholder.typicode.com/posts", document.getElementById("data-container"));
