import { Post } from "../types/types";  
export async function fetchDataAndDisplay(url: string, container: HTMLElement): Promise<void> {
    try {
        const response = await fetch(url);
        const data: Post[] = await response.json(); 

        data.slice(0, 5).forEach((item) => {
            const post = document.createElement("div");
            post.className = "post";
            post.innerHTML = `<h4>${item.title}</h4><p>${item.body}</p>`;
            container.appendChild(post);
        });
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
    }
}