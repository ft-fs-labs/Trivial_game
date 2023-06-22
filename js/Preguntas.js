const containerDOM = document.getElementById("main-container")
class Pregunta {
    constructor() {
        this.btnPregunta = document.createElement("button")
        this.btnPregunta.innerHTML= "Nueva Pregunta"
    }

    start() {
        containerDOM.appendChild(this.btnPregunta)
        this.btnPregunta.addEventListener("click", this.load)
    }

    load(){
        const pantallaFinal = new PantallaFinal()
        pantallaFinal.start()
    }

}
const pregunta = new Pregunta()
pregunta.start()

export default Pregunta; 