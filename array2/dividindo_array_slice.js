                //0
const nomes = ['joao', 'juliana','Ana', 'Caio', 'Lara', 'Marjorie', "Guilherme",
               'Aline,', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Viviam',
               'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo'];
                        //declaramos indice 0 e nome.length 10,ou seja comeca no 0 e ira ate o 9
const sala1 = nomes.slice(0,nomes.length/2);
                        //aqui declaramos somente 10,ira comecar de 10 pra frente.
const sala2 = nomes.slice(nomes.length/2);

console.log(`Alunos da Sala 1: ${sala1}`)
console.log(`Alunos da Sala 2: ${sala2}`)
               
