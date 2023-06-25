import IntroView from './js/IntroView.js'
import QuestionView from './js/QuestionView.js'
import OutroView from './js/OutroView.js'

class Game {
	constructor() {
		this.score = 0
		this.container = document.createElement('div')

		this._introView = new IntroView(this)
		this._questionViews = []
		this._outroView = new OutroView(this)

		this._initGame()
	}

	startQuiz() {
		this.score = 0
		this._bringQuestions()
	}

	checkAnswer(isCorrect) {
		if (isCorrect) this.score += 5

		if (this._stillHasQuestion()) {
			this._nextQuestion()
		} else {
			this._endQuiz()
		}
	}

	_initGame() {
		document.body.append(this.container)

		this._load(this._introView)
	}

	_endQuiz() {
		this._load(this._outroView)
	}

	_nextQuestion() {
		this._load(this._questionViews.pop())
	}

	_stillHasQuestion() {
		return this._questionViews.length
	}

	_load(view) {
		this.container.innerHTML = ''

		view.render()
	}

	_bringQuestions() {
		fetch('https://the-trivia-api.com/v2/questions')
			.then((res) => res.json())
			.then((questions) => {
				this._questionViews = questions.map(
					(q) =>
						new QuestionView(this, {
							question: q.question.text,
							incorrectAnswers: q.incorrectAnswers,
							correctAnswer: q.correctAnswer,
						})
				)

				this._nextQuestion()
			})
	}
}

export default Game
