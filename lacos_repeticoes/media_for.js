const notas = [10, 6.5, 8, 7.5];
//array notas //0, 1, 2, 3-indices
let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) { //criamos a variavel i para enumerar qual indice usaremos
                                        // no for () vimos que enquanto i for menos que a array notas
    somaDasNotas += notas[i]            //havera uma  repeticao e adicionaremos mais 1 ao i
}                                       //assim podemos usar o i para  sinalizar qual indice da array notas vamos usar

let media = somaDasNotas/notas.length;

console.log(media)