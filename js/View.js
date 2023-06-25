class View {
	constructor(game) {
		this.game = game

		this.viewContainer = document.createElement('section')
	}

	buildDOM() {}
	attachEventHandlers() {}

	render() {
		this.game.container.append(this.viewContainer)
	}
}

export default View
