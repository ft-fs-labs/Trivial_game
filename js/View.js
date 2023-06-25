class View {
	constructor(game) {
		this.game = game

		this._viewContainer = document.createElement('section')
	}

	_buildDOM() {}

	_attachEventHandlers() {}

	render() {
		this.game.container.append(this._viewContainer)
	}
}

export default View
