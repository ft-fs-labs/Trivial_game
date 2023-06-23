
import PantallaFin from "./PantallaFin.js"

class Preguntas {
    constructor(game) {
        this.game = game
        this.index = 0
        this.createDOM()
        this.setEvents()
        
    }
    createDOM(){
        this.btnPregunta = document.createElement("button")
        this.btnPregunta.innerHTML= "Nueva Pregunta"
        this.question = document.createElement("p")
        
    }

    setEvents(){
        this.btnPregunta.addEventListener("click", () => {
            this.index++
            this.game.score += 5
            this.render()
            if(this.index > this.game.questions.length -1){
                this.game.updateRightAnswer()
                
            }
        })
    }

    render(){
        this.question.innerHTML = this.game.questions[this.index]
        this.game.container.appendChild(this.question) 
        this.game.container.appendChild(this.btnPregunta)
    }

}

export default Preguntas

