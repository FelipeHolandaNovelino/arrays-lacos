const listaChamada = ['joao', 'juliana','Ana', 'Caio', 
                      'Lara', 'Marjorie', 'Leo'];

listaChamada.splice(1, 2, 'Rodrigo'); //-podemo usar o splice sem o ultimo elemento 
                                      //"Rodrigo",assim ele ira so remover os elementos declarados.
                                     //-Caso queira adicionar apenas um elemento em determinado local declaramos 
                                     //0 como segundo parametro
                                     //-exp: listaChamada.splice(2, 0, 'Rodrigo')
                                     //Nao ira remover nenhum elemento e ira adicionar o rodrigo logo apos
                                     //o elemento 2.

console.log(`Lista de chamada ${listaChamada}`)
