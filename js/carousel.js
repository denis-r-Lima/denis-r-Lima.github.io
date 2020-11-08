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

function touchScreenHandlerX(e) {
  let xStart = e.targetTouches[0].pageX
  let xEnd = xStart
  let action = true

  e.target.addEventListener("touchmove", (e) => {
    e.preventDefault()
    xEnd = e.targetTouches[0].pageX
    if (action) {
      if (xEnd + 80 < xStart) {
        plusSlides(1)
        action = false
        return
      } else {
        if (xStart + 80 < xEnd) {
          plusSlides(-1)
          action = false
          return
        }
      }
    }
    return
  })
}

function touchScreenHandlerY(e) {
  let yStart = e.targetTouches[0].pageY
  let yEnd = yStart
  let action = true

  e.target.addEventListener("touchmove", (e) => {
    e.preventDefault()
    yEnd = e.targetTouches[0].pageY
    if (action) {
      if (yStart + 60 < yEnd) {
        dropDown()
        action = false
        return
      }
    }

    return
  })
}
