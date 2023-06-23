import Preguntas from "./Preguntas.js"

class PantallaFin{
    constructor(game){

        this.game = game
        this.createDOM()
        this.setEvent()
    }
    createDOM(){

        this.btn = document.createElement('button')
        this.btn.innerText = 'Volver a cargar el juego'

        this.scoreScreen = document.createElement('p')
        
    }

    setEvent(){
        this.btn.addEventListener('click',() => {
            this.game.start()
        })
    }

    render(){
        this.scoreScreen.textContent = `Score: ${this.game.score}`
        this.game.container.append(this.btn, this.scoreScreen)
    }


 
  
}

export default PantallaFin;