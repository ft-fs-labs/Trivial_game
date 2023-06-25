import IntroView from './js/IntroView.js'
import QuestionView from './js/QuestionView.js'
import OutroView from './js/OutroView.js'

class Game {
	constructor() {
		this.score = 0
		this.container = document.createElement('div')

		this.introView = new IntroView(this)
		this.questionViews = []
		this.outroView = new OutroView(this)

		this.initGame()
	}

	startQuiz() {
		this.score = 0

		this.bringQuestions()
	}

	checkAnswer(isCorrect) {
		if (isCorrect) this.score += 5

		if (this.stillHasQuestion()) {
			this.nextQuestion()
		} else {
			this.endQuiz()
		}
	}

	nextQuestion() {
		this.load(this.questionViews.pop())
	}

	stillHasQuestion() {
		return this.questionViews.length
	}

	endQuiz() {
		this.load(this.outroView)
	}

	initGame() {
		document.body.append(this.container)

		this.load(this.introView)
	}

	load(view) {
		this.container.innerHTML = ''
		view.render()
	}

	bringQuestions() {
		fetch('https://the-trivia-api.com/v2/questions')
			.then((res) => res.json())
			.then((questions) => {
				this.questionViews = questions.map(
					(q) =>
						new QuestionView(this, {
							question: q.question.text,
							correctAnswer: q.correctAnswer,
							incorrectAnswers: q.incorrectAnswers,
						})
				)

				this.nextQuestion()
			})
	}
}

export default Game
