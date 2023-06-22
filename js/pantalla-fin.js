import Pregunta from "./Preguntas.js"

class PantallaFin{
    constructor(){
        
    }
    createDom(){
        this.createDom = document.getElementById("main-container")

        this.btn = document.createElement('button')
        this.btn.innerText = 'Volver a cargar el juego'

        this.score = document.createElement('div')
        this.score.innerText = 'SCORE'
    }
    render(){
        
        this.createDom.appendChild(this.btn);
        
        
        this.createDom.append(this.score);
    }
    setEvent(){
        this.btn.addEventListener('click', this.load)
    }
    
    load(){
        const preguntas = new Pregunta()
        Pregunta.render()
    }
  
}


const pantallaFin = new PantallaFin()
pantallaFin.render();

export default PantallaFin;