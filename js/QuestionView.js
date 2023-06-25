import View from './View.js'

class QuestionView extends View {
	constructor(game, questionDetails) {
		super(game)

		this.viewContainer.classList.add('view-question')

		this.question = questionDetails.question
		this.correctAnswer = questionDetails.correctAnswer

		this.allAnswer = this.shuffleAnswersWithCorrect(
			questionDetails.incorrectAnswers,
			this.correctAnswer
		)

		this.msSuspense = 500
		this.msFeedback = 500

		this.buildDOM()
		this.attachEventHandlers()
	}

	buildDOM() {
		const question = document.createElement('p')
		question.innerText = this.question

		this.viewContainer.append(question)

		this.allAnswer.forEach((answer, index) => {
			const id = 'answer-' + index

			const label = document.createElement('label')
			label.setAttribute('for', id)
			label.innerText = answer

			const input = document.createElement('input')
			input.setAttribute('type', 'radio')
			input.setAttribute('id', id)
			input.setAttribute('name', 'answer')
			input.setAttribute('value', answer)

			this.viewContainer.append(input, label)
		})
	}
	attachEventHandlers() {
		this.viewContainer.addEventListener('click', (event) => {
			if (event.target.tagName === 'LABEL') {
				const label = event.target

				const input = label.previousElementSibling

				const isCorrect = input.value === this.correctAnswer

				this.viewContainer.classList.add('disabled')
				label.classList.add('pending')

				setTimeout(() => {
					label.classList.add(isCorrect ? 'success' : 'error')

					setTimeout(() => this.game.checkAnswer(isCorrect), this.msFeedback)
				}, this.msSuspense)
			}
		})
	}

	shuffleAnswersWithCorrect(incorrectAnswers, correctAnswer) {
		const allAnswer = [...incorrectAnswers]

		const index = Math.floor(Math.random() * (incorrectAnswers.length + 1))

		allAnswer.splice(index, 0, correctAnswer)

		return allAnswer
	}
}

export default QuestionView
