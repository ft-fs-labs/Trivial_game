
import StartPage from "./js/StartPage.js";
import Preguntas from "./js/Preguntas.js";
import PantallaFin from "./js/PantallaFin.js";



class Game {
  constructor() {

    this.score = 0
    this.questions = ["Pregunta 1", "Pregunta 2","Pregunta 3","Pregunta 4"]
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

    this.load(new PantallaFin(this))
  }

  load(page) {

    this.container.innerHTML = ""
    this.currentPage = page;
    page.render();
    
  }
}

export default Game;
