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

function slideShow() {
    const previousButton = document.querySelector(".previous")
    const nextButton = document.querySelector(".next")
    const images = document.querySelector(".images")
    const imageList = document.querySelectorAll(".images img")
    let imagePlace = imageList.length - imageList.length
    let moveImage = 0

    nextButton.addEventListener("click", () => {
        if (imagePlace === imageList.length - 1) {
            imagePlace = imageList.length - imageList.length
            moveImage = 0
            images.style.transform = `translateX(${moveImage}%)`
            return;
        }
        moveImage = ((imagePlace + 1) * 100)
        images.style.transform = `translateX(-${moveImage}%)`
        imagePlace++
    })

    previousButton.addEventListener("click", () => {
        if (imagePlace === imageList.length - imageList.length) {
            imagePlace = imageList.length - 1
            moveImage = ((imagePlace) * 100)
            images.style.transform = `translateX(-${moveImage}%)`
            return;
        }
        moveImage = ((imagePlace - 1) * 100)
        images.style.transform = `translateX(-${moveImage}%)`
        imagePlace--
    })


}

hamburger();
slideShow()