
class PantallaFin{
    constructor(){
        
    }
    loadBtn(){
        this.btn = document.createElement('button')
        this.btn.innerText = 'Volver a cargar el juego'
        document.body.appendChild(this.btn)
        
        this.score = document.createElement('div')
        this.score.innerText = 'SCORE'
        document.body.append(this.score)

        this.btn.addEventListener('click', this.handleClick)
    }
    handleClick(){
        const preguntas = new Pregunta()
        Pregunta.start()
    }
  
}


const pantallaFin = new PantallaFin()
pantallaFin.loadBtn();

