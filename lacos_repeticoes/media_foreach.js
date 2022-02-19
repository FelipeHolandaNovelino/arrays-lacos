const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;
                        //.forEach ira fazer uma repeticao na array e logo interpreta a funcao nota como nota[0],nota[1]...;
notas.forEach( nota => { //.forEach() so recebe em seu parametro uma funcao,logo e chamada de CALLBACK;
    somaDasNotas += nota  //.forEach e um tipo de for atualizado 'para cada';
})                          

let media = somaDasNotas/notas.length

console.log(media)