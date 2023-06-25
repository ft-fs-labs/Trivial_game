import View from './View.js'

class OutroView extends View {
	constructor(game) {
		super(game)

		this.buildDOM()
		this.attachEventHandlers()
	}

	buildDOM() {
		const scoreScreen = document.createElement('p')

		const startAnotherGameButton = document.createElement('button')
		startAnotherGameButton.innerText = 'START ANOTHER GAME'

		this.viewContainer.append(scoreScreen, startAnotherGameButton)
	}

	attachEventHandlers() {
		this.viewContainer.querySelector('button').addEventListener('click', () => {
			this.game.startQuiz()
		})
	}

	render() {
		this.viewContainer.querySelector(
			'p'
		).innerText = `Tu puntuación es: ${this.game.score}`

		super.render()
	}
}

export default OutroView
