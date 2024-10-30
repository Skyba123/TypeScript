const modal = document.querySelector(".modal") as HTMLElement;
const closeModalBtn = document.querySelector(".closebtn") as HTMLElement;
const openModalBtn = document.querySelector(".cta button") as HTMLElement;

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
}


window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    console.log("Поточна позиція прокрутки:", scrollPosition);
   
});


function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


function handleScrollAnimation() {
  const animatedSections = document.querySelectorAll(".animated-section") as NodeListOf<HTMLElement>;
  
  animatedSections.forEach(section => {
      if (isInViewport(section)) {
          section.classList.add("visible");
      }
  });
}


window.addEventListener("scroll", handleScrollAnimation);


handleScrollAnimation();


async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        
        const container = document.getElementById("data-container");
        if (container) {
            data.slice(0, 5).forEach((item: { title: string, body: string }) => {
                const post = document.createElement("div");
                post.className = "post";
                post.innerHTML = `<h4>${item.title}</h4><p>${item.body}</p>`;
                container.appendChild(post);
            });
        }
    } catch (error) {
        console.error("Помилка при отриманні даних:", error);
    }
}
fetchData();