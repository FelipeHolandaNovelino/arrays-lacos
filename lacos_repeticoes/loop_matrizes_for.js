const notas1 = [10 , 6.5, 8 ,7.5];
const notas2 = [9  , 6  , 6];
const notas3 = [8.5, 9.5];

const notasGerais = [notas1,notas2,notas3]; //const notasGerais e uma array de 2dimensoes pois contem outras arrays;

let media = 0;

for (let i = 0; i < notasGerais.length; i++) {       //usaremos um primeiro for para identificar os indices do a array notasGerais[i] com a let i [0][1][2]
    for (let j = 0; j < notasGerais[i].length; j++) {   //Ja no segundo for o declaramos J para ser o segundo indice notasGerais [i][J] 
      media += notasGerais[i][j]/notasGerais[i].length;  // sendo o i um dos indices do notasGerais e J o indice da array dentro de notasGerais  
    }                                                                        // notasGerais[i][j]
  } 
  
media = media/notasGerais.length 

console.log(media)