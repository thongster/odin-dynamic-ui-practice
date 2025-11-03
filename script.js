function hamburger() {
  const hamburger = document.querySelector(".hamburger");
  const navOptions = document.querySelector(".navOptions");

  hamburger.addEventListener("click", () => {
    navOptions.classList.toggle("invisible");
  });
}

hamburger();
