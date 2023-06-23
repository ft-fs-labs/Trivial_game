
import PantallaFin from "./PantallaFin.js"

class Preguntas {
    constructor(game) {
        this.game = game
        this.index = 0
        this.createDOM()
        this.setEvents()
        
    }
    createDOM(){
        this.btnPregunta = document.createElement("input")
        this.btnPregunta.innerHTML= "Nueva Pregunta"
        this.question = document.createElement("p")

        this.respuesta1 = document.createElement("input");
        this.respuesta2 = document.createElement("input");
        this.respuesta3 = document.createElement("input");

        
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
        this.respuesta1.addEventListener("click", () => {
            this.index++
            this.game.score += 5
            this.render()
            if(this.index > this.game.questions.length -1){
                this.game.updateRightAnswer() 
            }
        })
        this.respuesta2.addEventListener("click", () => {
            this.index++
            this.game.score += 5
            this.render()
            if(this.index > this.game.questions.length -1){
                this.game.updateRightAnswer() 
            }
        })
        this.respuesta3.addEventListener("click", () => {
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
        this.game.container.appendChild(this.respuesta1)
        this.game.container.appendChild(this.respuesta2)
        this.game.container.appendChild(this.respuesta3)
    }
    startTime(){
        setTimeout(() => {
        console.log("clase del boton/input");
      }, 3000);
    }

}

export default Preguntas

