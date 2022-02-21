const salaSol = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaLua = [6, 5, 8, 9, 5, 6];
const salaEclipse = [7, 3.5, 8, 9.5];

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador, atual) =>   //reduce e mais um metodo que faz loop em um array ,precisa de dois parametro
    atual + acumulador,0)                                          //atual corresponde ao valor atual do loop exp SalaSol.reduce(acumulador,7)
    return somaDasNotas/notasDaSala.length                         // em atual + acumulador,0 o numero zero representa o valor inicial da soma
}

console.log(`Media da sala Sol: ${mediaSala(salaSol)}`)
console.log(`Media da sala Lua: ${mediaSala(salaLua)}`)
console.log(`Media da sala Eclipse ${mediaSala(salaEclipse)}`)

//segundo exemplo

const notas = [10, 10, 6, 6];

const media = notas.reduce((acum,atual) => atual + acum ,0)/notas.length  //usando o reduce para medir uma media comum
console.log(media)   //quando só temos uma linha de instrução dentro da função (atual + acum) não precisamos usar chaves e nem da palavra-chave return.


const numeros = [43, 50, 65, 12]
/*const soma = numeros.reduce(function (acum, atual) {
    return atual + acum
   }, 0)*/                                                             

function operacaoNumerica(acum, atual) {   //exemplo da  funcao callback fora do reduce()
    return atual + acum
   }
   
const soma = numeros.reduce(operacaoNumerica, 0)
