
import StartPage from "./js/StartPage.js";
import Preguntas from "./js/Preguntas.js";
import PantallaFin from "./js/PantallaFin.js";



class Game {
  constructor() {

    this.score = 0
    this.questions = []
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
    page.render();
    
  }


  bringQuestions(){
    fetch('https://the-trivia-api.com/v2/questions')
    .then((res) => res.json())
    .then((data) => {
      for ( let i=0; i < data.lenght; i++){
        data[i]
        const questionsText = data[i].question.text
         console.log(questionsText)
    }})
      }
      
     
  }
 



    
    
const game = new Game()
game.bringQuestions()
export default Game
