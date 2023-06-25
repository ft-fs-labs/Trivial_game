import View from './View.js'

class OutroView extends View {
	constructor(game) {
		super(game)

		this._buildDOM()
		this._attachEventHandlers()
	}
	_buildDOM() {
		const scoreScreen = document.createElement('p')

		const startAnotherGameButton = document.createElement('button')
		startAnotherGameButton.innerText = 'Volver a cargar el juego'

		this._viewContainer.append(scoreScreen, startAnotherGameButton)
	}

	_attachEventHandlers() {
		this._viewContainer
			.querySelector('button')
			.addEventListener('click', () => {
				this.game.startQuiz()
			})
	}

	render() {
		this._viewContainer.querySelector(
			'p'
		).textContent = `Score: ${this.game.score}`

		super.render()
	}
}

export default OutroView
