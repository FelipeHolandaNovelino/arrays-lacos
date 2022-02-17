const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediasDosAlunos = [10, 7, 9, 6];
    
let listaDeNotasEalunos = [alunos,mediasDosAlunos];
                               
     //funcao        //parametro da funcao 
const exibeNomeNota = (nomeDoAluno) => {                    //.includes() retorna false/true .Se aquele dado do parametro se encontra ou nao na lista.
    if (listaDeNotasEalunos[0].includes(nomeDoAluno)) { //.includes() recebe um parametro ()no qual devera ser o que vc precisa pesquisar dentro da lista
        let indice = listaDeNotasEalunos[0].indexOf(nomeDoAluno) //.idexof() retorna o numero indice na lista do que voce colocou no parametro 
        return listaDeNotasEalunos[0][indice] +              //exp listaDeNotasEAlunos[alunos].includes['Ana'] minha let indice ira receber [3] pois
         ` Sua media e `+ listaDeNotasEalunos[1][indice]        //e o numero de indice que estara o elemento ana na lista alunos.
    } else {
        return `Aluno nao cadastrado`
    }
}

console.log(exibeNomeNota("Ana"))
