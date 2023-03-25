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

  let aboutP1 = document.querySelector("#about-part1");
  let aboutP2 = document.querySelector("#about-part2");
  let aboutP3 = document.querySelector("#about-part3");

  observer.observe(aboutP1);
  observer.observe(aboutP2);
  observer.observe(aboutP3);
}
