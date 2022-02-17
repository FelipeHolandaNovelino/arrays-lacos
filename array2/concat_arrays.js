const salaDeJavaScript = ['Ju','Léo','Raquel'];

const salaDePython = ['Melisa','Helena','Rodrigo'];

const salasUnificadas = salaDePython.concat(salaDeJavaScript);

console.log(salasUnificadas)  //.concat nao modifica as arrays,por isso ele precisa ser o resultado de uma nova variavel