
import StartPage from "./js/StartPage.js";
import Preguntas from "./js/Preguntas.js";
import PantallaFin from "./js/PantallaFin.js";



class Game {
  constructor() {

    this.score = 0
    this.quenstions = []
    this.container = document.createElement('div')
    document.body.append(this.container)
    this.currentPage = undefined;

    this.load(new StartPage(this));
  }


  start() {
    this.score = 0
    this.load(new Preguntas(this))
  }

  updateRightAnswer() {
    this.score += 5

    this.load(new PantallaFin(this))
  }


  load(page) {

    this.container.innerHTML = ""
    this.currentPage = page;
    this.container.innerHTML = "";
    page.render();
    
  }
}

export default Game;
