const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediasDosAlunos = [10, 7, 9, 6];
    //lista de duas dimensoes //duas listas alunos [0] e mediaDosAlunos [1]
let listaDeNotasEalunos = [alunos,mediasDosAlunos];
                //1-[Alunos]2-['joao']                  //1-[mediaDosAlunos] 2 -[10]
console.log(`${listaDeNotasEalunos [0][0]},sua media e ${listaDeNotasEalunos[1][0]}`)
                //para acessar um item especifico de uma lista de 2 dimensoes   
                //precisamoss usar um [] para acessar o primeiro indice que esta na lista 
                // de 2 dimensoes e + outro [] para acessar um indice do primeiro item selecionado
