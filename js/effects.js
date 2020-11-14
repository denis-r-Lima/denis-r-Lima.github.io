function menuClick() {
  document.querySelector(".Menu").classList.toggle("nav__active")
}

function menuButton(link, e) {
  currentPage.setState(link)
  document.getElementById("top").style.height = "40vh"
  let select = document.querySelector(".Selected")
  if (select) select.classList.remove("Selected")
  e.classList.add("Selected")
  if (link === "Portfolio") {
    currentSlide(1)
  }
}

let i = 0
let j = 0
const firstText = `${greeting}! I am Denis Lima,`
const secondText = "and I'm a Full Stack JS Developer!"
let typeSpeed

function typeWriter() {
  typeSpeed = Math.random() * (120 - 50) + 50
  if (i < firstText.length) {
    document.getElementById("h1__me").innerHTML += firstText.charAt(i)
    i++
    setTimeout(typeWriter, typeSpeed)
  } else {
    if (j < secondText.length) {
      document.getElementById("h5__me").innerHTML += secondText.charAt(j)
      j++
      setTimeout(typeWriter, typeSpeed)
    }
  }
}

function generateRandomString(length) {
  const source = "ABCDEFGHIJKLMNOPQRSTUVXYWZabcdefghijklmnopqrstuvxywz@."
  let string = source.charAt(Math.floor(Math.random() * (source.length - 1)))

  for (let i = 1; i < length; i++) {
    string += source.charAt(Math.floor(Math.random() * (source.length - 1)))
  }

  return string
}

let k = 0
let randomSpeed
let originalText
let textLength

function applyRandomString(e) {
  e.innerHTML = generateRandomString(textLength)

  k++

  randomSpeed = Math.random() * (300 - 50) + 50

  if (k < 10) {
    setTimeout(() => applyRandomString(e), randomSpeed)
  } else {
    returnOriginalText(originalText, e)
  }
}

function returnOriginalText(text, e) {
  e.innerHTML = text
}

function handleChangeCharts(e) {
  k = 0
  originalText = e.innerHTML
  textLength = originalText.length

  applyRandomString(e)

  e.addEventListener("mouseleave", () => {
    returnOriginalText(originalText, e)
    k = 11
  })
}

typeWriter()
