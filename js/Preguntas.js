
class Pregunta {
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
        const pantallaFinal = new PantallaFinal()
        pantallaFinal.render()
    }

    render(){
        this.containerDOM.appendChild(this.btnPregunta)
    }

}
const pregunta = new Pregunta()
pregunta.render()

export default Pregunta

