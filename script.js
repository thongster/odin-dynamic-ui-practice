// toggle nav invisible class on mousover/mouseout
function hamburger() {
  const nav = document.querySelector('.nav');
  const navOptions = document.querySelector('.navOptions');

  nav.addEventListener('mouseover', () => {
    navOptions.classList.toggle('invisible');
  });

  nav.addEventListener('mouseout', () => {
    navOptions.classList.toggle('invisible');
  });
}

// slideshow carousel
function slideShow() {
  const previousButton = document.querySelector('.previous');
  const nextButton = document.querySelector('.next');
  const images = document.querySelector('.images');
  const imageList = document.querySelectorAll('.images img');
  const buttonList = document.querySelectorAll('.carouselNav > button');
  let imagePlace = imageList.length - imageList.length;
  let moveImage = 0;

  toggleActiveButton(imagePlace);
  nextButton.addEventListener('click', moveNext);
  previousButton.addEventListener('click', movePrevious);
  selectSlide();

  // move viewport on X axis per click
  // each image is 100% width
  // multiply how many % widths to move based on imagePlace
  function moveNext() {
    if (imagePlace === imageList.length - 1) {
      toggleActiveButton(imagePlace);
      imagePlace = imageList.length - imageList.length;
      moveImage = 0;
      images.style.transform = `translateX(${moveImage}%)`;
      toggleActiveButton(imagePlace);
      return;
    }
    toggleActiveButton(imagePlace);
    moveImage = (imagePlace + 1) * 100;
    images.style.transform = `translateX(-${moveImage}%)`;
    imagePlace++;
    toggleActiveButton(imagePlace);
  }

  function movePrevious() {
    if (imagePlace === imageList.length - imageList.length) {
      toggleActiveButton(imagePlace);
      imagePlace = imageList.length - 1;
      moveImage = imagePlace * 100;
      images.style.transform = `translateX(-${moveImage}%)`;
      toggleActiveButton(imagePlace);
      return;
    }
    toggleActiveButton(imagePlace);
    moveImage = (imagePlace - 1) * 100;
    images.style.transform = `translateX(-${moveImage}%)`;
    imagePlace--;
    toggleActiveButton(imagePlace);
  }

  function selectSlide() {
    // determine old button to highlight
    let oldActiveButton = imagePlace;
    buttonList.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        // disable highilight on old button
        toggleActiveButton(oldActiveButton);
        // determine and move X distance
        moveImage = i * 100;
        images.style.transform = `translateX(-${moveImage}%)`;
        // activate highlight on new active button, reassign old button
        toggleActiveButton(i);
        oldActiveButton = i;
      });
    });
  }
}

function toggleActiveButton(imagePlace) {
  const buttonList = document.querySelectorAll('.carouselNav > button');
  buttonList[imagePlace].classList.toggle('carouselNavHover');
}

hamburger();
slideShow();
