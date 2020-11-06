let slideIndex = 1

function plusSlides(n) {
  showSlides((slideIndex += n))
}

function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  let i
  let slides = document.getElementsByClassName("project")
  let dots = document.getElementsByClassName("dot")
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  let slide = document.querySelector(".active__slide")
  if (slide) {
    slide.classList.remove("active__slide")
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.width = "0"
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }
  slides[slideIndex - 1].style.width = "100%"
  dots[slideIndex - 1].className += " active"
  setTimeout(() => {
    slides[slideIndex - 1].className += " active__slide"
  }, 100)
}

function dropDown() {
  let descriptions = document.getElementsByClassName("project__description")
  let downButton = document.getElementsByClassName("down__button")

  if (downButton[slideIndex - 1].classList.contains("back")) {
    descriptions[slideIndex - 1].style.height = "100%"
    downButton[slideIndex - 1].innerHTML = "<img src='./img/arrow_down.svg'>"
    downButton[slideIndex - 1].classList.remove("back")
  } else {
    descriptions[slideIndex - 1].style.height = "20px"
    downButton[slideIndex - 1].innerHTML = "<img src='./img/arrow_up.svg'>"
    downButton[slideIndex - 1].classList.add("back")
  }
}