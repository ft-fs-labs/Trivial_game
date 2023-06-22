
import StartPage from "./js/StartPage.js";



class Game {
  constructor() {

    this.currentPage = undefined;

    this.load(new StartPage(this));
  }

  load(page) {
    this.currentPage = page;
    page.render();
  }
}

export default Game;
