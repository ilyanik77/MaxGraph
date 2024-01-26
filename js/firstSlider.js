
const slider = document.querySelector(".first__content__bottom__slider-box");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const slides = Array.from(slider.querySelectorAll("img"));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
  	activeDot(slideIndex);
}

function showNextSlide() {
  	slideIndex = (slideIndex + 1) % slideCount;
  	updateSlider();
  
}
function updateSlider() {
  	slides.forEach((slide, index) => {
    	if (index === slideIndex) {
      		slide.style.display = "block";
    	} else {
      		slide.style.display = "none";
    	}
  	});
}

