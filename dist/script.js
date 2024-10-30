"use strict";
const modal = document.getElementById('myModal');
const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');
openModalButton === null || openModalButton === void 0 ? void 0 : openModalButton.addEventListener('click', () => {
    if (modal) {
        modal.style.display = 'block';
    }
});
closeModalButton === null || closeModalButton === void 0 ? void 0 : closeModalButton.addEventListener('click', () => {
    if (modal) {
        modal.style.display = 'none';
    }
});
// Додавання анімації при скролі
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const header = document.querySelector('header');
    if (header) {
        header.style.opacity = (100 - scrollPosition / 5) / 100 + '';
    }
});
const dataContainer = document.getElementById('dataContainer');
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
    if (dataContainer) {
        data.forEach((post) => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
            dataContainer.appendChild(postElement);
        });
    }
})
    .catch((error) => console.error('Error fetching data:', error));
