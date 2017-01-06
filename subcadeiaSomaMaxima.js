/* jshint esversion: 6*/

// Subcadeia da soma máxima
// ----------------------------
//
// Dado um conjunto de números, descobrir o subconjunto em que a soma dos elementos são de máxima soma.
//
//
// Exemplo: dado o conjunto de elementos [2, -4, 6, 8, -10, 100, -6, 5]
// O subconjunto de soma máxima é: [2, -4, **6, 8, -10, 100**, -6, 5]
//
// Assim, o programa deve retornar a posição do primeiro e do último elemento da subcadeia.
// Neste exemplo, as posições 2 e 5, considerando a primeira posição com índice 0.


let array = [ 2, -4, 6, 8, -10, 100, -6, 5 ];
let maiorSoma = 0;
let posInicio = 0;
let posFim = 0;

function calculaSomaMaxima(){

    for (var i = 0; i < array.length; i++) {
        for (var j = i+1; j < array.length; j++) {

            let soma = 0;

            for( let k = i; k <= j; k++){
                soma += array[ k ];
            }

            if( soma > maiorSoma ){
                posInicio = i;
                posFim = j;
                maiorSoma = soma;
            }
        }
    }

    console.log(`Posição de início e fim: [ ${posInicio}, ${posFim} ] Soma: ${maiorSoma}`);
}
