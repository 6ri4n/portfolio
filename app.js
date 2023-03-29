window.addEventListener("load", () => {
  hideNavBar();
  createAboutSectionObserver();
  createProjectsSectionObserver();
  changeProjectTitleColor();
});

function hideNavBar() {
  let navBar = document.querySelector("nav");
  let oldScrollY = window.scrollY;
  window.onscroll = () => {
    if (oldScrollY < window.scrollY) {
      navBar.style.opacity = "0";
    } else {
      navBar.style.opacity = "1";
    }
    oldScrollY = window.scrollY;
  };
}

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
    threshold: 0.001,
  });

  let aboutP1 = document.querySelector("#about-part1");
  let aboutP2 = document.querySelector("#about-part2");
  let aboutP3 = document.querySelector("#about-part3");

  observer.observe(aboutP1);
  observer.observe(aboutP2);
  observer.observe(aboutP3);
}

function createProjectsSectionObserver() {
  function animateSlideUp(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.id === "project-h2") {
          let project1 = document.querySelector("#project-1");
          project1.classList.add("slide-up-2");
        } else if (entry.target.id === "project-1") {
          let projectH2 = document.querySelector("#projects h2");
          projectH2.classList.add("slide-up-2");
        }
        entry.target.classList.add("slide-up-2");
      }
    });
  }

  let observer = new IntersectionObserver(animateSlideUp, {
    root: null,
    rootMargin: "0px",
    threshold: 0.001,
  });

  let projectH2 = document.querySelector("#project-h2");
  let project1 = document.querySelector("#project-1");
  let project2 = document.querySelector("#project-2");
  let project3 = document.querySelector("#project-3");
  let project4 = document.querySelector("#project-4");
  let project5 = document.querySelector("#project-5");
  let project6 = document.querySelector("#project-6");

  observer.observe(projectH2);
  observer.observe(project1);
  observer.observe(project2);
  observer.observe(project3);
  observer.observe(project4);
  observer.observe(project5);
  observer.observe(project6);
}

function changeProjectTitleColor() {
  let projectItem = document.querySelectorAll(".project-item");

  for (let project of projectItem) {
    project.addEventListener("mouseover", () => {
      let projectTitle = project.firstElementChild.children[1];
      projectTitle.style.color = "var(--main-color)";
    });

    project.addEventListener("mouseout", () => {
      let projectTitle = project.firstElementChild.children[1];
      projectTitle.style.color = "black";
    });
  }
}
