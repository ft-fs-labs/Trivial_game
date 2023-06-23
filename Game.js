
import CounterPage from "./js/CounterPage.js";
import PantallaFinn from "./js/pantalla-fin.js";
import Pregunta from "./Preguntas.js"



class Game {
  constructor() {
    this.counter = 0;

    this.container = document.createElement("div");
    document.body.append(this.container);

    this.currentPage = undefined;

    this.load(new CounterPage(this));
  }

  increment() {
    this.counter++;
    this.currentPage.render();
  }

  load(page) {
    this.currentPage = page;
    page.render();
  }


  bringQuestions(){
    fetch('https://the-trivia-api.com/v2/questions')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
      }
      bringQuestions()
      
    }


