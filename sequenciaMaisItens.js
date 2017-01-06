/* jshint esversion: 6*/

// A seguinte sequência iterativa é definida pelo conjunto de inteiros positivos onde:
//
// n -> n/2 (se n é par) n -> 3n + 1 (se n é impar)
//
// Usando as regras acima e começando pelo número 13, nós geraríamos a seguinte sequência:
//
// 13 40 20 10 5 16 8 4 2 1
//
// O que pode ser observado dessa sequência (começando no 13 e terminando no 1) é que ela contém 10 items. Embora ainda não
// esteja matematicamente provado, é esperando que, dado um numero inteiro positivo qualquer, a sequencia sempre chegará em 1.
//
// Pergunta: Qual inteiro positivo abaixo de 1 milhão, produz a sequencia com mais itens?
//
// Desafio: Crie um código em uma das linguaguens disponíveis que calcule a resposta.

function fazSequencia( valor ) { // total de numeros da sequencia
    let cont = 1;
    while ( valor > 1) {
        if( valor % 2 === 0 ) {
            valor = valor / 2;
        }else {
            valor = ( valor * 3 ) + 1;
        }

        cont++;
    }

    return cont;
}

let numeroMaior;
let maiorSequencia = 0;

for ( let i = 1; i < 1000000; i++ ) {
    let sequencia = fazSequencia( i );
    if( sequencia > maiorSequencia ) {
        maiorSequencia = sequencia;
        numeroMaior = i;
    }
}

console.log( `Numero com maior sequência: ${ numeroMaior } `);
console.log( `Sequência obtida: ${ maiorSequencia } `);
