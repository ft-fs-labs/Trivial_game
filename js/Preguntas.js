
import PantallaFin from "./PantallaFin.js"

class Preguntas {
    constructor(game) {
        this.game = game

        this.createDOM()
        this.setEvents()
    }
    createDOM(){
        this.btnPregunta = document.createElement("button")
        this.btnPregunta.innerHTML= "Nueva Pregunta"
       
    }

    setEvents(){
        this.btnPregunta.addEventListener("click", () => {

            this.game.updateRightAnswer()
        })
    }

    load(){
        const pantallaFin = new PantallaFin()
        pantallaFin.render()
    }

    render(){
        this.game.container.appendChild(this.btnPregunta)
    }

}

export default Preguntas

