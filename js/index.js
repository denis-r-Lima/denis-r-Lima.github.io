const targetDivId = "Container"

window.addEventListener("load", () => {
  document.body.style.visibility = "visible"
})

let isTouch = false

window.addEventListener("touchstart", () => {
  if (!isTouch) {
    document.documentElement.style.setProperty("--prev-nex-display", "none")
    isTouch = true
  }
})

const date = new Date()
const hour = date.getHours()
let greeting = "Hello There"
if (hour >= 5 && hour < 12) greeting = "Good Morning"
if (hour >= 12 && hour < 18) greeting = "Good Afternoon"
if ((hour >= 18 && hour <= 23) || (hour >= 0 && hour < 5)) greeting = "Good Evening"

function Renderer(id, inner) {
  document.getElementById(id).innerHTML = inner
}
function StateHandler(init) {
  class State {
    constructor(init) {
      this.state = init
    }

    get showState() {
      return this.state
    }

    setState = (value) => {
      if (this.state !== value) {
        this.state = value
        Renderer(targetDivId, Main())
      }
    }
  }

  let state = new State(init)
  return [state.showState, state.setState]
}

const [currentPage, setCurrentPage] = StateHandler("")

const activePage = {
  Portfolio,
  Contact,
  About,
}

//Portfolio HTML code
function Portfolio() {
  slideIndex = 1
  return ` 
        <div id="Content">
          <h1>My Portfolio</h1>
          <center>
            <div class="portfolio__container" ontouchstart="touchScreenHandlerX(event)">
              <div class="project">
                <img src="./img/projects/snake_game.PNG" alt="Snake Game" onclick="document.getElementById('slide1').style.display = 'flex'">
                <div class="project__description" ontouchstart="touchScreenHandlerY(event)">
                <div class="down__button" onclick="dropDown()"><img src='./img/arrow_down.svg'></div>
                  <h3>Snake Game</h3><br>
                    Snake is a vintage mobile game, on this project I learned how to manipulate canvas and manage key press event listener with plain HTML, 
                    CSS and JavaScript.<br><br>
                    The project´s code can be found on  my <a href="https://github.com/denis-r-Lima" target="_blank">GitHub</a>.
                </div>
                <div class="modal" id="slide1" onclick="this.style.display = 'none'"><img src="./img/projects/snake_game.PNG" alt="Snake Game">
                </div>
              </div>
              <div class="project">
                <img src="./img/projects/chat_live.PNG" alt="Chat Live" onclick="document.getElementById('slide2').style.display = 'flex'">
                <div class="project__description" ontouchstart="touchScreenHandlerY(event)">
                  <center>
                    <div class="down__button" onclick="dropDown()"><img src='./img/arrow_down.svg'></div>
                  </center>
                  <h3>Chat Live</h3><br>
                  Chat live is a project of a chat page, on this project a Node.js server was created using express and socket.IO for communication.<br><br>
                  The project´s code can be found on  my <a href="https://github.com/denis-r-Lima" target="_blank">GitHub</a>.
                </div>
                <div class="modal" id="slide2" onclick="this.style.display = 'none'"><img src="./img/projects/chat_live.PNG" alt="Chat Live">
                </div>
              </div>
              <div class="project">
                <img src="./img/projects/pictionary.PNG" alt="Pictionary" onclick="document.getElementById('slide3').style.display = 'flex'">
                <div class="project__description" ontouchstart="touchScreenHandlerY(event)">
                  <center>
                    <div class="down__button" onclick="dropDown()"><img src='./img/arrow_down.svg'></div>
                  </center>
                  <h3>Pictionary</h3><br>
                  Pictionary is a drawing game in which one person draws and another teammates need to identify the word. <br>
                  For this project a Node.js server was created using express and socket.IO to communicate several players 
                  to share the same canvas and all players can see what is being designed. <br><br>
                  The project´s code can be found on  my <a href="https://github.com/denis-r-Lima" target="_blank">GitHub</a>.
                </div>
                <div class="modal" id="slide3" onclick="this.style.display = 'none'"><img src="./img/projects/pictionary.PNG" alt="Pictionary">
                </div>
              </div>
              <div class="project">
                <img src="./img/projects/ez_converter.PNG" alt="EZ Converter" onclick="document.getElementById('slide4').style.display = 'flex'">
                <div class="project__description" ontouchstart="touchScreenHandlerY(event)">
                  <center>
                    <div class="down__button" onclick="dropDown()"><img src='./img/arrow_down.svg'></div>
                  </center>
                  <h3>EZ Converter</h3><br>
                  EZ converter is a unit converter, this was my first React Native project, giving me the opportunity to explore the framework,
                  learning how to prepare the structure for the app and how to animate elements.<br>
                  This project also have a external API integration to update currency exchange rates daily. <br><br>
                  The project´s code can be found on  my <a href="https://github.com/denis-r-Lima" target="_blank">GitHub</a>.
                </div>
                <div class="modal" id="slide4" onclick="this.style.display = 'none'"><img src="./img/projects/ez_converter.PNG" alt="EZ Converter">
                </div>
              </div>
              <div class="project">
              <img src="./img/projects/portfolio.PNG" alt="EZ Converter" onclick="document.getElementById('slide5').style.display = 'flex'">
              <div class="project__description" ontouchstart="touchScreenHandlerY(event)">
                <center>
                  <div class="down__button" onclick="dropDown()"><img src='./img/arrow_down.svg'></div>
                </center>
                <h3>My Portfolio</h3><br>
                This is basically the webpage that you are on =). <br><br>
                The project´s code can be found on  my <a href="https://github.com/denis-r-Lima" target="_blank">GitHub</a>.
              </div>
              <div class="modal" id="slide5" onclick="this.style.display = 'none'"><img src="./img/projects/portfolio.PNG" alt="EZ Converter">
              </div>
            </div>
              <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
              <a class="next" onclick="plusSlides(1)">&#10095;</a>
            </div>
          </center>
          <div class="dot__container">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
            <span class="dot" onclick="currentSlide(4)"></span>
            <span class="dot" onclick="currentSlide(5)"></span>
          </div>
        </div> 
        `
}

//Contact HTML code

function Contact() {
  return `
        <div id="Content">
            <center>
                <h1>
                    Contact me!
                </h1>
                <br>
                <h5>
                    Do you want to talk? Any doubt about my projects? Want me as part of your team? <br>
                    You can reach me @ <a id="email__link" href="mailto:denis.r.lima88@gmail.com"
                    onmouseover="handleChangeCharts(this)">denis.r.lima88@gmail.com</a>
                    <br><br>
                    You can also find me on:
                </h5>
                <a href="https://www.linkedin.com/in/denis-roberto-alves-de-almeida-lima-1a122575/" target="_blank"><img src="./img/LI-In-Bug.png" alt="LinkedIn" title="LinkedIn"></a>
                <a href="https://github.com/denis-r-Lima" target="_blank"><img src="./img/GitHub-Mark-64px.png" alt="GitHub" title="GitHub"></a>
            </center>
        </div>
        `
}

//About HTML code
function About() {
  return `
        <div id="Content">
            <h1>
                About Me!
            </h1>
            <h5 id="about__text">
                Hi, I am Denis Lima, as you can see on the big text above =). <br>
                I am a petroleum engineer who always was passionate about coding, and motorcycles. Everything started a long time ago, I don't know maybe when I was 14 or 15 years old, personal blogs
                was the big thing of the moment and I decided to build a small page to provide templates for that, few years latter I started my bachelor degree in engineering
                and I learned the basics of software development, using C.<br>
                After finished my degree I started my professional carrier, and it really bothered me that simple tasks could be made easier and more efficient with a proper software,
                and so I started to develop small applications for the team, and the more I studied about software development the more I fell in love for the subject, and now after working several 
                years in oil & gas field I am trying to start a new carrier as software developer.  
        </div>
        `
}

function Main() {
  return activePage[currentPage]()
}
