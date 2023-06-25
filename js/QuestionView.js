import View from './View.js'

class QuestionView extends View {
	constructor(game, questionDetails) {
		super(game)

		this._msForFeedback = 4000
		this._msForNextQuestion = 2000

		this._question = questionDetails.question
		this._correctAnswer = questionDetails.correctAnswer
		this._isCorrect = undefined

		this._selectedAnswer = {
			input: null,
			label: null,
		}

		this._allAnswer = this._shuffleAnswer(
			questionDetails.incorrectAnswers,
			this._correctAnswer
		)

		this._buildDOM()
		this._attachEventHandlers()
	}

	_buildDOM() {
		const question = document.createElement('p')
		question.innerText = this._question

		this._viewContainer.append(question)

		this._allAnswer.forEach((answer, index) => {
			const id = 'answer-' + index

			const label = document.createElement('label')
			label.innerText = answer
			label.setAttribute('for', id)

			const input = document.createElement('input')
			input.setAttribute('id', id)
			input.setAttribute('type', 'radio')
			input.setAttribute('name', 'answer')
			input.setAttribute('value', answer)

			this._viewContainer.append(input, label)
		})
	}

	_attachEventHandlers() {
		this._viewContainer.addEventListener('click', (event) => {
			if (event.target.tagName === 'LABEL') {
				this._selectedAnswer.label = event.target
				this._selectedAnswer.input = event.target.previousElementSibling

				this._lockForm()
				this._changeStatus('pending')

				this._waitForFeedback(this._msForFeedback)
			}
		})
	}

	_lockForm() {
		this._viewContainer.classList.add('disabled')
	}

	_changeStatus(statusClassName) {
		this._selectedAnswer.label.classList.add(statusClassName)
	}

	_waitForFeedback(ms) {
		setTimeout(() => {
			this._isCorrect = this._checkAnswer(this._selectedAnswer.input.value)

			this._changeStatus(this._isCorrect ? 'success' : 'error')

			this._waitForNextQuestion(this._msForNextQuestion)
		}, ms)
	}

	_checkAnswer(playerAnswer) {
		return playerAnswer === this._correctAnswer
	}

	_waitForNextQuestion(ms) {
		setTimeout(() => {
			this.game.checkAnswer(this._isCorrect)
		}, ms)
	}

	_shuffleAnswer(incorrectAnswers, correctAnswer) {
		const allAnswer = [...incorrectAnswers]

		const randomIndex = Math.floor(
			Math.random() * (incorrectAnswers.length + 1)
		)

		allAnswer.splice(randomIndex, 0, correctAnswer)

		return allAnswer
	}
}

export default QuestionView
