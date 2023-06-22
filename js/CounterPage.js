class CounterPage {
  constructor(game) {
    this.game = game;

    this.createDOM();
    this.setEvents();
  }

  createDOM() {
    this.screen = document.createElement("p");

    this.btn = document.createElement("button");
    this.btn.textContent = "CONTAR";
  }

  setEvents() {
    this.btn.addEventListener("click", () => {
      this.game.increment();
    });
  }

  render() {
    this.screen.textContent = this.game.counter;
    this.game.container.append(this.screen, this.btn);
  }
}

export default CounterPage;
