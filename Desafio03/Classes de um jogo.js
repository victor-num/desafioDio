class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque = ""
    
        if(this.tipo === "guerreiro"){
           ataque = "Espada"
   
       } else if(this.tipo === "mago"){
           ataque = "Magia"
   
       } else if(this.tipo === "monge"){
            ataque = "Artes Marciais"
       
       } else if (this.tipo === "ninja"){
            ataque = "Shuriken"
       }

       console.log(`O ${this.tipo} atacou usando ${ataque}`)
               
    }
  
}

let primeiroHeroi = new heroi ("Gaus", 45, "guerreiro")
let segundoHeroi =  new heroi("Zephyr", 450, "mago")
let terceiroHeroi = new heroi ("Onnion", 98, "monge")
let quartoHeroi = new heroi ("Ryu", 23, "ninja")

primeiroHeroi.atacar()
segundoHeroi.atacar()
terceiroHeroi.atacar()
quartoHeroi.atacar()