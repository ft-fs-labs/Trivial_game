import Preguntas from "./Preguntas.js";

class StartPage {
  constructor(game) {
    this.game = game;

    this.createDOM();
    this.setEvents();
  }

  createDOM() {
    this.bottonStart = document.createElement("button");
    this.bottonStart.textContent = "START";
    this.container = document.getElementById("main-container")
  }

  setEvents() {
    this.bottonStart.addEventListener("click", this.load)
  }
  load() {

    const pregunta = new Preguntas()
    pregunta.render()
  }
  render() {

    this.container.append(this.bottonStart);
  }
}

export default StartPage;
