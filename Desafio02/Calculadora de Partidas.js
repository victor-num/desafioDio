// função para calcular vitórias e derrotas
function calculo(vitorias, derrotas){
    return vitorias - derrotas
}

// função para verificar o nivél
function verificarNivel(nivel){
    if ( nivel <= 10 ) {
        return "FERRO"

    }else if( resultado >= 11 && resultado <= 20 ){
        return "BRONZE"

    }else if ( resultado >= 21 && resultado <= 50 ){
        return "PRATA" 
    
    }else if ( resultado >= 51 && resultado <= 80 ){
        return "OURO" 
    
    }else if ( resultado >= 81 && resultado <= 90 ){
        return "DIAMANTE" 
    
    }else if ( resultado >= 91 && resultado <= 100 ){
        return "LENDÁRIO"
    }else if (resultado >= 101)
        return "IMORTAL"

}
// chamando a função
let resultado = calculo(2 , 500)
let nivel = verificarNivel(resultado)

// imprimindo o resultado
console.log("O resultado é = " + resultado + " " + nivel )