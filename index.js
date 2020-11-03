const divId = 'Container'


function Renderer(id, inner){
    document.getElementById(id).innerHTML = inner
}
function StateHandler(init){

    function State(init){
    this.state = init
    this.showState = () => this.state
    this.setState = (value) => {
        if(this.state !== value){
            this.state = value
            Renderer(divId, Main())
            return
        }else{
            return
        }
    }
    
    return [this.showState, this.setState]
}

return new State(init)

}

const [currentPage, setCurrentPage] = StateHandler('')

const activePage ={
    Portfolio,
    Contact
}


function Portfolio(){
    return(
        `<center><h1>Retro mobile game SNAKE!</h1>
        </center>`
    )
}

function Contact(){
    return(
        `
        <div id="Content">
            <center>
                <h1>
                    Contact me!
                </h1>
                <br>
                <h5>
                    Do you want to talk? Any doubt about my job? Want me as part of your team? <br>
                    Contact me @: <b><a href="mailto:denis.r.lima88@gmail.com">denis.r.lima88@gmail.com</a></b>
                </h5>
            </center>
        </div>
        `
    )
}

function Main(){
    return(
        activePage[currentPage()]()
    )
}

const PagesNavigation = {
    Portfolio
}


function menuClick(e){
    document.querySelector(".Menu").classList.toggle("nav__active")
}

function menuButton(link, e){
    setCurrentPage(link)
    document.getElementById('top').style.height= '40vh'
    let select = document.querySelector('.Selected')
    if (select) select.classList.remove('Selected')
    e.classList.add('Selected')
}
