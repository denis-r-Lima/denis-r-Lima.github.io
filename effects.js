function menuClick() {
  document.querySelector(".Menu").classList.toggle("nav__active")
}

function menuButton(link, e) {
  setCurrentPage(link)
  document.getElementById("top").style.height = "40vh"
  let select = document.querySelector(".Selected")
  if (select) select.classList.remove("Selected")
  e.classList.add("Selected")
}

let i = 0
let j = 0
const txt1 = "Hello there! I am Denis Lima,"
const txt2 = "and I'm a Full Stack JS Developer (At least I think I am =D)"
let typeSpeed

function typeWriter() {
  typeSpeed = Math.random() * (120 - 50) + 50
  if (i < txt1.length) {
    document.getElementById("h1__me").innerHTML += txt1.charAt(i)
    i++
    setTimeout(typeWriter, typeSpeed)
  } else {
    if (j < txt2.length) {
      document.getElementById("h5__me").innerHTML += txt2.charAt(j)
      j++
      setTimeout(typeWriter, typeSpeed)
    }
  }
}

typeWriter()
