window.addEventListener("load", () => {
  createAboutSectionObserver();
});

function createAboutSectionObserver() {
  function animateSlideLeft(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-left");
      }
    });
  }

  let observer = new IntersectionObserver(animateSlideLeft, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  let aboutH2 = document.querySelector("#about h2");
  let aboutP1 = document.querySelector("#about-p1");
  let aboutP2 = document.querySelector("#about-p2");
  let aboutTech = document.querySelector(".tech");

  observer.observe(aboutH2);
  observer.observe(aboutP1);
  observer.observe(aboutP2);
  observer.observe(aboutTech);
}
