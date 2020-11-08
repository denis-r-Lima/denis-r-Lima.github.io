const divId = "Container"

addEventListener("load", () => {
  document.body.style.visibility = "visible"
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
  function State(init) {
    this.state = init
    this.showState = () => this.state
    this.setState = (value) => {
      if (this.state !== value) {
        this.state = value
        Renderer(divId, Main())
        return
      } else {
        return
      }
    }

    return [this.showState, this.setState]
  }

  return new State(init)
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
            <div class="portfolio__container">
              <div class="project">
                <img src="./img/projects/snake_game.PNG" alt="Snake Game" onclick="document.getElementById('slide1').style.display = 'flex'">
                <div class="project__description">
                <div class="down__button" onclick="dropDown()"><img src='./img/arrow_down.svg'></div>
                  <h3>Snake Game</h3><br>
                    Snake is a vintage mobile game, on this project I learned how to manipulate canvas and manage key press event listener with pure HTML, 
                    CSS and JavaScript.<br><br>
                    The project´s code can be found on  my <a href="https://github.com/denis-r-Lima" target="_blank">GitHub</a>.
                </div>
                <div class="modal" id="slide1" onclick="this.style.display = 'none'"><img src="./img/projects/snake_game.PNG" alt="Snake Game">
                </div>
              </div>
              <div class="project">
                <img src="./img/projects/chat_live.PNG" alt="Chat Live" onclick="document.getElementById('slide2').style.display = 'flex'">
                <div class="project__description">
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
                <div class="project__description">
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
              <div class="project__description">
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
                <h1>Projeto 5</h1>
                <div class="project__description">
                <div class="down__button" onclick="dropDown()"><img src='./img/arrow_down.svg'></div>
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
                    onmouseover="generateRandomChar(this)">denis.r.lima88@gmail.com</a>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at semper augue, at suscipit libero. Aenean eu pellentesque metus. Duis congue blandit est, ac sollicitudin dui scelerisque id. Proin vel suscipit purus. Pellentesque finibus malesuada lacus nec ornare. Suspendisse potenti. Etiam lobortis velit et ornare placerat. Donec suscipit, est sit amet accumsan malesuada, nisi odio mollis leo, sed porta massa sem et mauris.

                Vivamus nec dapibus felis, vel pretium magna. Vestibulum faucibus elementum urna, quis dapibus nibh sagittis a. Suspendisse at ultrices velit. Aenean non congue ligula. Praesent varius, lectus sed sagittis tincidunt, urna eros mattis enim, sit amet efficitur eros dolor ut risus. Integer auctor leo ut elit euismod, quis dignissim erat venenatis. Donec quis rutrum elit. Donec placerat dignissim ipsum egestas auctor. In hac habitasse platea dictumst. Aliquam vel faucibus mauris, in commodo odio. Donec vitae tempor odio, eget maximus nulla. Phasellus quis fringilla est.
                
                Donec blandit, leo id ornare vehicula, tortor mi gravida est, in porta ipsum ligula a orci. Quisque sed odio nisl. Praesent volutpat, ante eu vehicula cursus, risus nunc pellentesque ante, ac dictum nibh massa in elit. Suspendisse id viverra ligula. Morbi a scelerisque lorem. Maecenas non felis ac justo tempor suscipit. Fusce eget tortor ligula. Fusce eleifend nibh in felis congue scelerisque. Vestibulum sem massa, viverra vel eros mattis, tempor mattis dolor. Maecenas convallis metus turpis, nec eleifend nisi imperdiet sed. Aenean ac augue turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis ligula nibh, auctor eget massa non, pulvinar iaculis turpis. Integer interdum mattis neque ac efficitur. Sed elementum nisi nec ante cursus, id accumsan turpis porttitor.
                
                Nunc ullamcorper massa vel ligula elementum scelerisque. Aenean mattis finibus sollicitudin. Donec vel elit volutpat, porta nulla a, rutrum ex. Maecenas sit amet hendrerit lacus. Phasellus semper nibh sapien, quis mattis quam posuere sit amet. Donec pellentesque leo a sem molestie rhoncus. Nam vulputate porta arcu non sodales. Duis porta tortor lectus, vel consectetur ex malesuada ut. Proin nisi ligula, pellentesque ut luctus et, ultrices non eros. Vestibulum ac augue et augue pulvinar elementum. Integer sapien massa, facilisis vel blandit sed, placerat vel lectus. Ut molestie vulputate magna eu maximus.
                
                Phasellus aliquet nisi et eleifend dignissim. Curabitur efficitur faucibus lacus at pellentesque. In pharetra tempus leo, rutrum feugiat felis ullamcorper ac. Aenean dignissim bibendum laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed mattis purus sed luctus placerat. Aenean vitae convallis dolor. Duis volutpat purus placerat, vestibulum elit sed, tincidunt augue. Curabitur maximus odio in quam pellentesque mattis. Nullam nec arcu enim.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at semper augue, at suscipit libero. Aenean eu pellentesque metus. Duis congue blandit est, ac sollicitudin dui scelerisque id. Proin vel suscipit purus. Pellentesque finibus malesuada lacus nec ornare. Suspendisse potenti. Etiam lobortis velit et ornare placerat. Donec suscipit, est sit amet accumsan malesuada, nisi odio mollis leo, sed porta massa sem et mauris.

                Vivamus nec dapibus felis, vel pretium magna. Vestibulum faucibus elementum urna, quis dapibus nibh sagittis a. Suspendisse at ultrices velit. Aenean non congue ligula. Praesent varius, lectus sed sagittis tincidunt, urna eros mattis enim, sit amet efficitur eros dolor ut risus. Integer auctor leo ut elit euismod, quis dignissim erat venenatis. Donec quis rutrum elit. Donec placerat dignissim ipsum egestas auctor. In hac habitasse platea dictumst. Aliquam vel faucibus mauris, in commodo odio. Donec vitae tempor odio, eget maximus nulla. Phasellus quis fringilla est.
                
                Donec blandit, leo id ornare vehicula, tortor mi gravida est, in porta ipsum ligula a orci. Quisque sed odio nisl. Praesent volutpat, ante eu vehicula cursus, risus nunc pellentesque ante, ac dictum nibh massa in elit. Suspendisse id viverra ligula. Morbi a scelerisque lorem. Maecenas non felis ac justo tempor suscipit. Fusce eget tortor ligula. Fusce eleifend nibh in felis congue scelerisque. Vestibulum sem massa, viverra vel eros mattis, tempor mattis dolor. Maecenas convallis metus turpis, nec eleifend nisi imperdiet sed. Aenean ac augue turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis ligula nibh, auctor eget massa non, pulvinar iaculis turpis. Integer interdum mattis neque ac efficitur. Sed elementum nisi nec ante cursus, id accumsan turpis porttitor.
                
                Nunc ullamcorper massa vel ligula elementum scelerisque. Aenean mattis finibus sollicitudin. Donec vel elit volutpat, porta nulla a, rutrum ex. Maecenas sit amet hendrerit lacus. Phasellus semper nibh sapien, quis mattis quam posuere sit amet. Donec pellentesque leo a sem molestie rhoncus. Nam vulputate porta arcu non sodales. Duis porta tortor lectus, vel consectetur ex malesuada ut. Proin nisi ligula, pellentesque ut luctus et, ultrices non eros. Vestibulum ac augue et augue pulvinar elementum. Integer sapien massa, facilisis vel blandit sed, placerat vel lectus. Ut molestie vulputate magna eu maximus.
                
                Phasellus aliquet nisi et eleife.<br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at semper augue, at suscipit libero. Aenean eu pellentesque metus. Duis congue blandit est, ac sollicitudin dui scelerisque id. Proin vel suscipit purus. Pellentesque finibus malesuada lacus nec ornare. Suspendisse potenti. Etiam lobortis velit et ornare placerat. Donec suscipit, est sit amet accumsan malesuada, nisi odio mollis leo, sed porta massa sem et mauris.

                Vivamus nec dapibus felis, vel pretium magna. Vestibulum faucibus elementum urna, quis dapibus nibh sagittis a. Suspendisse at ultrices velit. Aenean non congue ligula. Praesent varius, lectus sed sagittis tincidunt, urna eros mattis enim, sit amet efficitur eros dolor ut risus. Integer auctor leo ut elit euismod, quis dignissim erat venenatis. Donec quis rutrum elit. Donec placerat dignissim ipsum egestas auctor. In hac habitasse platea dictumst. Aliquam vel faucibus mauris, in commodo odio. Donec vitae tempor odio, eget maximus nulla. Phasellus quis fringilla est.
                
                Donec blandit, leo id ornare vehicula, tortor mi gravida est, in porta ipsum ligula a orci. Quisque sed odio nisl. Praesent volutpat, ante eu vehicula cursus, risus nunc pellentesque ante, ac dictum nibh massa in elit. Suspendisse id viverra ligula. Morbi a scelerisque lorem. Maecenas non felis ac justo tempor suscipit. Fusce eget tortor ligula. Fusce eleifend nibh in felis congue scelerisque. Vestibulum sem massa, viverra vel eros mattis, tempor mattis dolor. Maecenas convallis metus turpis, nec eleifend nisi imperdiet sed. Aenean ac augue turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis ligula nibh, auctor eget massa non, pulvinar iaculis turpis. Integer interdum mattis neque ac efficitur. Sed elementum nisi nec ante cursus, id accumsan turpis porttitor.
                
                Nunc ullamcorper massa vel ligula elementum scelerisque. Aenean mattis finibus sollicitudin. Donec vel elit volutpat, porta nulla a, rutrum ex. Maecenas sit amet hendrerit lacus. Phasellus semper nibh sapien, quis mattis quam posuere sit amet. Donec pellentesque leo a sem molestie rhoncus. Nam vulputate porta arcu non sodales. Duis porta tortor lectus, vel consectetur ex malesuada ut. Proin nisi ligula, pellentesque ut luctus et, ultrices non eros. Vestibulum ac augue et augue pulvinar elementum. Integer sapien massa, facilisis vel blandit sed, placerat vel lectus. Ut molestie vulputate magna eu maximus.
                
                Phasellus aliquet nisi et eleifend dignissim. Curabitur efficitur faucibus lacus at pellentesque. In pharetra tempus leo, rutrum feugiat felis ullamcorper ac. Aenean dignissim bibendum laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed mattis purus sed luctus placerat. Aenean vitae convallis dolor. Duis volutpat purus placerat, vestibulum elit sed, tincidunt augue. Curabitur maximus odio in quam pellentesque mattis. Nullam nec arcu enim.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at semper augue, at suscipit libero. Aenean eu pellentesque metus. Duis congue blandit est, ac sollicitudin dui scelerisque id. Proin vel suscipit purus. Pellentesque finibus malesuada lacus nec ornare. Suspendisse potenti. Etiam lobortis velit et ornare placerat. Donec suscipit, est sit amet accumsan malesuada, nisi odio mollis leo, sed porta massa sem et mauris.

                Vivamus nec dapibus felis, vel pretium magna. Vestibulum faucibus elementum urna, quis dapibus nibh sagittis a. Suspendisse at ultrices velit. Aenean non congue ligula. Praesent varius, lectus sed sagittis tincidunt, urna eros mattis enim, sit amet efficitur eros dolor ut risus. Integer auctor leo ut elit euismod, quis dignissim erat venenatis. Donec quis rutrum elit. Donec placerat dignissim ipsum egestas auctor. In hac habitasse platea dictumst. Aliquam vel faucibus mauris, in commodo odio. Donec vitae tempor odio, eget maximus nulla. Phasellus quis fringilla est.
                
                Donec blandit, leo id ornare vehicula, tortor mi gravida est, in porta ipsum ligula a orci. Quisque sed odio nisl. Praesent volutpat, ante eu vehicula cursus, risus nunc pellentesque ante, ac dictum nibh massa in elit. Suspendisse id viverra ligula. Morbi a scelerisque lorem. Maecenas non felis ac justo tempor suscipit. Fusce eget tortor ligula. Fusce eleifend nibh in felis congue scelerisque. Vestibulum sem massa, viverra vel eros mattis, tempor mattis dolor. Maecenas convallis metus turpis, nec eleifend nisi imperdiet sed. Aenean ac augue turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis ligula nibh, auctor eget massa non, pulvinar iaculis turpis. Integer interdum mattis neque ac efficitur. Sed elementum nisi nec ante cursus, id accumsan turpis porttitor.
                
                Nunc ullamcorper massa vel ligula elementum scelerisque. Aenean mattis finibus sollicitudin. Donec vel elit volutpat, porta nulla a, rutrum ex. Maecenas sit amet hendrerit lacus. Phasellus semper nibh sapien, quis mattis quam posuere sit amet. Donec pellentesque leo a sem molestie rhoncus. Nam vulputate porta arcu non sodales. Duis porta tortor lectus, vel consectetur ex malesuada ut. Proin nisi ligula, pellentesque ut luctus et, ultrices non eros. Vestibulum ac augue et augue pulvinar elementum. Integer sapien massa, facilisis vel blandit sed, placerat vel lectus. Ut molestie vulputate magna eu maximus.
                
                Phasellus aliquet nisi et eleife.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at semper augue, at suscipit libero. Aenean eu pellentesque metus. Duis congue blandit est, ac sollicitudin dui scelerisque id. Proin vel suscipit purus. Pellentesque finibus malesuada lacus nec ornare. Suspendisse potenti. Etiam lobortis velit et ornare placerat. Donec suscipit, est sit amet accumsan malesuada, nisi odio mollis leo, sed porta massa sem et mauris.

                Vivamus nec dapibus felis, vel pretium magna. Vestibulum faucibus elementum urna, quis dapibus nibh sagittis a. Suspendisse at ultrices velit. Aenean non congue ligula. Praesent varius, lectus sed sagittis tincidunt, urna eros mattis enim, sit amet efficitur eros dolor ut risus. Integer auctor leo ut elit euismod, quis dignissim erat venenatis. Donec quis rutrum elit. Donec placerat dignissim ipsum egestas auctor. In hac habitasse platea dictumst. Aliquam vel faucibus mauris, in commodo odio. Donec vitae tempor odio, eget maximus nulla. Phasellus quis fringilla est.
                
                Donec blandit, leo id ornare vehicula, tortor mi gravida est, in porta ipsum ligula a orci. Quisque sed odio nisl. Praesent volutpat, ante eu vehicula cursus, risus nunc pellentesque ante, ac dictum nibh massa in elit. Suspendisse id viverra ligula. Morbi a scelerisque lorem. Maecenas non felis ac justo tempor suscipit. Fusce eget tortor ligula. Fusce eleifend nibh in felis congue scelerisque. Vestibulum sem massa, viverra vel eros mattis, tempor mattis dolor. Maecenas convallis metus turpis, nec eleifend nisi imperdiet sed. Aenean ac augue turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis ligula nibh, auctor eget massa non, pulvinar iaculis turpis. Integer interdum mattis neque ac efficitur. Sed elementum nisi nec ante cursus, id accumsan turpis porttitor.
                
                Nunc ullamcorper massa vel ligula elementum scelerisque. Aenean mattis finibus sollicitudin. Donec vel elit volutpat, porta nulla a, rutrum ex. Maecenas sit amet hendrerit lacus. Phasellus semper nibh sapien, quis mattis quam posuere sit amet. Donec pellentesque leo a sem molestie rhoncus. Nam vulputate porta arcu non sodales. Duis porta tortor lectus, vel consectetur ex malesuada ut. Proin nisi ligula, pellentesque ut luctus et, ultrices non eros. Vestibulum ac augue et augue pulvinar elementum. Integer sapien massa, facilisis vel blandit sed, placerat vel lectus. Ut molestie vulputate magna eu maximus.
                
                Phasellus aliquet nisi et eleifend dignissim. Curabitur efficitur faucibus lacus at pellentesque. In pharetra tempus leo, rutrum feugiat felis ullamcorper ac. Aenean dignissim bibendum laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed mattis purus sed luctus placerat. Aenean vitae convallis dolor. Duis volutpat purus placerat, vestibulum elit sed, tincidunt augue. Curabitur maximus odio in quam pellentesque mattis. Nullam nec arcu enim.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at semper augue, at suscipit libero. Aenean eu pellentesque metus. Duis congue blandit est, ac sollicitudin dui scelerisque id. Proin vel suscipit purus. Pellentesque finibus malesuada lacus nec ornare. Suspendisse potenti. Etiam lobortis velit et ornare placerat. Donec suscipit, est sit amet accumsan malesuada, nisi odio mollis leo, sed porta massa sem et mauris.

                Vivamus nec dapibus felis, vel pretium magna. Vestibulum faucibus elementum urna, quis dapibus nibh sagittis a. Suspendisse at ultrices velit. Aenean non congue ligula. Praesent varius, lectus sed sagittis tincidunt, urna eros mattis enim, sit amet efficitur eros dolor ut risus. Integer auctor leo ut elit euismod, quis dignissim erat venenatis. Donec quis rutrum elit. Donec placerat dignissim ipsum egestas auctor. In hac habitasse platea dictumst. Aliquam vel faucibus mauris, in commodo odio. Donec vitae tempor odio, eget maximus nulla. Phasellus quis fringilla est.
                
                Donec blandit, leo id ornare vehicula, tortor mi gravida est, in porta ipsum ligula a orci. Quisque sed odio nisl. Praesent volutpat, ante eu vehicula cursus, risus nunc pellentesque ante, ac dictum nibh massa in elit. Suspendisse id viverra ligula. Morbi a scelerisque lorem. Maecenas non felis ac justo tempor suscipit. Fusce eget tortor ligula. Fusce eleifend nibh in felis congue scelerisque. Vestibulum sem massa, viverra vel eros mattis, tempor mattis dolor. Maecenas convallis metus turpis, nec eleifend nisi imperdiet sed. Aenean ac augue turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis ligula nibh, auctor eget massa non, pulvinar iaculis turpis. Integer interdum mattis neque ac efficitur. Sed elementum nisi nec ante cursus, id accumsan turpis porttitor.
                
                Nunc ullamcorper massa vel ligula elementum scelerisque. Aenean mattis finibus sollicitudin. Donec vel elit volutpat, porta nulla a, rutrum ex. Maecenas sit amet hendrerit lacus. Phasellus semper nibh sapien, quis mattis quam posuere sit amet. Donec pellentesque leo a sem molestie rhoncus. Nam vulputate porta arcu non sodales. Duis porta tortor lectus, vel consectetur ex malesuada ut. Proin nisi ligula, pellentesque ut luctus et, ultrices non eros. Vestibulum ac augue et augue pulvinar elementum. Integer sapien massa, facilisis vel blandit sed, placerat vel lectus. Ut molestie vulputate magna eu maximus.
                
                Phasellus aliquet nisi et eleife.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at semper augue, at suscipit libero. Aenean eu pellentesque metus. Duis congue blandit est, ac sollicitudin dui scelerisque id. Proin vel suscipit purus. Pellentesque finibus malesuada lacus nec ornare. Suspendisse potenti. Etiam lobortis velit et ornare placerat. Donec suscipit, est sit amet accumsan malesuada, nisi odio mollis leo, sed porta massa sem et mauris.

                Vivamus nec dapibus felis, vel pretium magna. Vestibulum faucibus elementum urna, quis dapibus nibh sagittis a. Suspendisse at ultrices velit. Aenean non congue ligula. Praesent varius, lectus sed sagittis tincidunt, urna eros mattis enim, sit amet efficitur eros dolor ut risus. Integer auctor leo ut elit euismod, quis dignissim erat venenatis. Donec quis rutrum elit. Donec placerat dignissim ipsum egestas auctor. In hac habitasse platea dictumst. Aliquam vel faucibus mauris, in commodo odio. Donec vitae tempor odio, eget maximus nulla. Phasellus quis fringilla est.
                
                Donec blandit, leo id ornare vehicula, tortor mi gravida est, in porta ipsum ligula a orci. Quisque sed odio nisl. Praesent volutpat, ante eu vehicula cursus, risus nunc pellentesque ante, ac dictum nibh massa in elit. Suspendisse id viverra ligula. Morbi a scelerisque lorem. Maecenas non felis ac justo tempor suscipit. Fusce eget tortor ligula. Fusce eleifend nibh in felis congue scelerisque. Vestibulum sem massa, viverra vel eros mattis, tempor mattis dolor. Maecenas convallis metus turpis, nec eleifend nisi imperdiet sed. Aenean ac augue turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis ligula nibh, auctor eget massa non, pulvinar iaculis turpis. Integer interdum mattis neque ac efficitur. Sed elementum nisi nec ante cursus, id accumsan turpis porttitor.
                
                Nunc ullamcorper massa vel ligula elementum scelerisque. Aenean mattis finibus sollicitudin. Donec vel elit volutpat, porta nulla a, rutrum ex. Maecenas sit amet hendrerit lacus. Phasellus semper nibh sapien, quis mattis quam posuere sit amet. Donec pellentesque leo a sem molestie rhoncus. Nam vulputate porta arcu non sodales. Duis porta tortor lectus, vel consectetur ex malesuada ut. Proin nisi ligula, pellentesque ut luctus et, ultrices non eros. Vestibulum ac augue et augue pulvinar elementum. Integer sapien massa, facilisis vel blandit sed, placerat vel lectus. Ut molestie vulputate magna eu maximus.
                
                Phasellus aliquet nisi et eleifend dignissim. Curabitur efficitur faucibus lacus at pellentesque. In pharetra tempus leo, rutrum feugiat felis ullamcorper ac. Aenean dignissim bibendum laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed mattis purus sed luctus placerat. Aenean vitae convallis dolor. Duis volutpat purus placerat, vestibulum elit sed, tincidunt augue. Curabitur maximus odio in quam pellentesque mattis. Nullam nec arcu enim.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at semper augue, at suscipit libero. Aenean eu pellentesque metus. Duis congue blandit est, ac sollicitudin dui scelerisque id. Proin vel suscipit purus. Pellentesque finibus malesuada lacus nec ornare. Suspendisse potenti. Etiam lobortis velit et ornare placerat. Donec suscipit, est sit amet accumsan malesuada, nisi odio mollis leo, sed porta massa sem et mauris.

                Vivamus nec dapibus felis, vel pretium magna. Vestibulum faucibus elementum urna, quis dapibus nibh sagittis a. Suspendisse at ultrices velit. Aenean non congue ligula. Praesent varius, lectus sed sagittis tincidunt, urna eros mattis enim, sit amet efficitur eros dolor ut risus. Integer auctor leo ut elit euismod, quis dignissim erat venenatis. Donec quis rutrum elit. Donec placerat dignissim ipsum egestas auctor. In hac habitasse platea dictumst. Aliquam vel faucibus mauris, in commodo odio. Donec vitae tempor odio, eget maximus nulla. Phasellus quis fringilla est.
                
                Donec blandit, leo id ornare vehicula, tortor mi gravida est, in porta ipsum ligula a orci. Quisque sed odio nisl. Praesent volutpat, ante eu vehicula cursus, risus nunc pellentesque ante, ac dictum nibh massa in elit. Suspendisse id viverra ligula. Morbi a scelerisque lorem. Maecenas non felis ac justo tempor suscipit. Fusce eget tortor ligula. Fusce eleifend nibh in felis congue scelerisque. Vestibulum sem massa, viverra vel eros mattis, tempor mattis dolor. Maecenas convallis metus turpis, nec eleifend nisi imperdiet sed. Aenean ac augue turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis ligula nibh, auctor eget massa non, pulvinar iaculis turpis. Integer interdum mattis neque ac efficitur. Sed elementum nisi nec ante cursus, id accumsan turpis porttitor.
                
                Nunc ullamcorper massa vel ligula elementum scelerisque. Aenean mattis finibus sollicitudin. Donec vel elit volutpat, porta nulla a, rutrum ex. Maecenas sit amet hendrerit lacus. Phasellus semper nibh sapien, quis mattis quam posuere sit amet. Donec pellentesque leo a sem molestie rhoncus. Nam vulputate porta arcu non sodales. Duis porta tortor lectus, vel consectetur ex malesuada ut. Proin nisi ligula, pellentesque ut luctus et, ultrices non eros. Vestibulum ac augue et augue pulvinar elementum. Integer sapien massa, facilisis vel blandit sed, placerat vel lectus. Ut molestie vulputate magna eu maximus.
                
                Phasellus aliquet nisi et eleife.<br>
            </h5>
        </div>
        `
}

function Main() {
  return activePage[currentPage()]()
}
