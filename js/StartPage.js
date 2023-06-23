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

  }

  setEvents() {
    this.bottonStart.addEventListener("click", () => this.game.start())
  }

  render() {

    this.game.container.append(this.bottonStart)
  }
}

export default StartPage;
