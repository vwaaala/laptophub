const sliderContents = document.querySelector(".slider-contents");
const sliderImage = document.querySelectorAll(".slider-image");
const nextBtn = document.querySelector(".slider-right-btn");
const prevBtn = document.querySelector(".slider-left-btn");

const dots = document.querySelectorAll(".dot");
document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const maxSlide = sliderImage.length - 1;
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // slide change functionality
  function changeSlide(cs) {
    sliderContents.style.transform = `translateX(-${100 * cs}vw)`;
  }

  // prev slide functionality
  function prevSlide() {
    if (currentSlide === 0) {
      currentSlide = maxSlide;
    } else {
      currentSlide--;
    }
    changeSlide(currentSlide);
    activateDot(currentSlide);
  }
  // next slide functionality
  function nextSlide() {
    if (currentSlide === maxSlide) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    changeSlide(currentSlide);
    activateDot(currentSlide);
  }

  // slide using keyboard
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });

  // slide using click dot
  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      currentSlide = index;
      changeSlide(currentSlide);
      activateDot(currentSlide);
    });
  });

  //current slide active  dot functionality
  function activateDot(cs) {
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[cs].classList.add("active");
  }

  activateDot(currentSlide);
});
