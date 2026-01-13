document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".blurbsection");
    const blurb = document.querySelector(".blurb");
    if (!section || !blurb) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    blurb.classList.add("slide-in");
                } else {
                    blurb.classList.remove("slide-in");
                }
            });
        },
        {
            threshold: 0.3
        }
    );

    observer.observe(section);
});
