function hamburger() {
  const nav = document.querySelector(".nav");
  const navOptions = document.querySelector(".navOptions");

  nav.addEventListener("mouseover", () => {
    navOptions.classList.toggle("invisible");
  });

  nav.addEventListener("mouseout", () => {
    navOptions.classList.toggle("invisible");
  });
}

hamburger();
