class CounterPage {
  constructor(game) {
    this.game = game;

    this.createDOM();
    this.setEvents();
  }

  createDOM() {
    this.bottonStart= document.createElement("button");
    this.btn.textContent = "START";
    this.container=document.getElementById("main-container")
  }

  setEvents() {
    this.bottonStart.addEventListener("click", () => {
      this.game.init();
    });
  }
load(){

  const pregunta = new Pregunta()
  pregunta.render()
}
  render() {
   
    this.game.container.append(this.bottonStart);
  }
}

export default CounterPage;
