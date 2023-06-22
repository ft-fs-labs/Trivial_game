
import PantallaFin from "./PantallaFin.js"

class Preguntas {
    constructor() {
        this.createDOM()
        this.setEvents()
    }
    createDOM(){
        this.btnPregunta = document.createElement("button")
        this.btnPregunta.innerHTML= "Nueva Pregunta"
        this.containerDOM = document.getElementById("main-container")
    }

    setEvents(){
        this.btnPregunta.addEventListener("click", this.load)
    }

    load(){
        const pantallaFin = new PantallaFin()
        pantallaFin.render()
    }

    render(){
        this.containerDOM.appendChild(this.btnPregunta)
    }

}

export default Preguntas

