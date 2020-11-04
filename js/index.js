const divId = "Container"

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

function Portfolio() {
  return ` 
        <div id="Content">
            <h1>
                My Portfolio!
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
                
                Phasellus aliquet nisi et eleife
            </h5>
        </div>
        `
}

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
                    You can reach me @ <a href="mailto:denis.r.lima88@gmail.com">denis.r.lima88@gmail.com</a>
                    <br><br>
                    You can also find me on:
                </h5>
                <a href="https://www.linkedin.com/in/denis-roberto-alves-de-almeida-lima-1a122575/" target="_blank"><img src="./img/LI-In-Bug.png" alt="LinkedIn" title="LinkedIn"></a>
                <a href="https://github.com/denis-r-Lima" target="_blank"><img src="./img/GitHub-Mark-64px.png" alt="GitHub" title="GitHub"></a>
            </center>
        </div>
        `
}

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
