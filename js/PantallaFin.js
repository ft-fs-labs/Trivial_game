import Preguntas from "./Preguntas.js"

class PantallaFin{
    constructor(){
        this.createDOM()
        this.setEvent()
    }
    createDOM(){
        this.containerDOM = document.getElementById("main-container")

        this.btn = document.createElement('button')
        this.btn.innerText = 'Volver a cargar el juego'

        this.score = document.createElement('div')
        this.score.innerText = 'SCORE'
    }
    render(){

        this.containerDOM.append(this.btn, this.score)
    }
    setEvent(){
        this.btn.addEventListener('click', this.load)
    }
    
    load(){
        const preguntas = new Preguntas()
        
        preguntas.render()
        
    }
 
  
}

export default PantallaFin;