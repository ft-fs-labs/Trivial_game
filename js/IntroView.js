import View from './View.js'

class IntroView extends View {
	constructor(game) {
		super(game)

		this._buildDOM()
		this._attachEventHandlers()
	}

	_buildDOM() {
		const startButton = document.createElement('button')
		startButton.textContent = 'START'

		this._viewContainer.append(startButton)
	}

	_attachEventHandlers() {
		this._viewContainer
			.querySelector('button')
			.addEventListener('click', () => this.game.startQuiz())
	}
}

export default IntroView
