import View from './View.js'

class IntroView extends View {
	constructor(game) {
		super(game)

		this.buildDOM()
		this.attachEventHandlers()
	}

	buildDOM() {
		const startButton = document.createElement('button')
		startButton.innerText = 'START'

		this.viewContainer.append(startButton)
	}

	attachEventHandlers() {
		this.viewContainer.querySelector('button').addEventListener('click', () => {
			this.game.startQuiz()
		})
	}
}

export default IntroView
