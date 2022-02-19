const arrayVazia = [,,,]; //A virgula declara que foi criada uma posicao e caso ele nao seja declarado ira resultar em undefined
console.log(arrayVazia.length) //como foram criadas as posicoes o resultado sera 3

arrayVazia.push(50)

console.log(arrayVazia) //como os 3 primeiros elementos nao foram declarados eles serao undefined
console.log(arrayVazia.length)
