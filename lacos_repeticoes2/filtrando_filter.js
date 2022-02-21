const nomes = ['Felipe', 'Raphael', 'Cezar', 'Arthur', 'Manu' ];
const notas = [7, 10, 3.5, 8];

const reprovados = nomes.filter((aluno,indice) => notas[indice] < 5) //o metodo .filter() recebe em seu parametro uma funcao 
                                                                    //tbm recebe um segundo parametro -indice- no qual sera atribuido o valor de indice do elemento
                                                                    // que ele esta passando no momento pela array exp ('Felipe', 0)
console.log(`Reprovados ${reprovados}`)


