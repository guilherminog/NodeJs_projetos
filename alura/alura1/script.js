// var primeira função que surgiu no Java script

//var altura = 5;
//var comprimento = 7;

//area = altura * comprimento;
//console.log(area)
//var area;


//'let' é uma função sem variação fora do bloco de código!
// Já o 'var' é aberto, pode ocorrer variações e pode ser atribuido a 
//uma variavel fora do do bloco de código.
//Contudo a função let' ainda tem como ocorrer variações 
//e mudanças no dentro e fora do bloco, quando usamos 'const' a 'variavel' se
//torna literalmente constante e para "dados sensíveis" é melhor trabalhar com 
// a 'variavel' "CONST", assim como orinetação a objetos.

//let forma = 'retangulo'
//let altura = 5;
//let comprimento = 7;
//let area;

//if (forma === 'retangulo'){
//    area = altura * comprimento;
//} else{
//    area = ((altura * comprimento) /2);
//}

//console.log(area)

// sempre que a gente cria uma nova variavel  'const', temos que dar um valor para 'iniciar'
//no caso da 'variavel' "area" n'ao te como utilizar 'CONST' pelo simples fato de n'ao ter um
//valor constante para "CONST", por isso temos que utilizar "LET" ou "VAR", mas nesse caso eh 
//melhor usar a variavel "LET" por que eh menos "sensivel a mudanças na VARiavel". 

const forma = 'quadrado'
const altura = 5;
const comprimento = 7;
let area; 

if (forma === 'quadrado'){
    area = (altura * comprimento);
} else {
    area = (altura * comprimento)/2;
} 

console.log(area)

