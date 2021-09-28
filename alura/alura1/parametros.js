//Básico de parâmetros

//function soma(num1, num2){
//    return num1 + num2;
//}

//console.log(soma(2, 2))
//console.log(soma(-582, 982))

//parâmetros x argumentos

//function nomeIdade(nome, idade){
//    return `meu nome é ${nome} e minha idade é ${idade}`;
//}
//console.log(nomeIdade("Guilhermino", 35))


function soma(num1, num2){
    return num1 + num2;
}

function multiplica(num1 = 1, num2 = 1){
    return num1 * num2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)))
console.log(multiplica(soma(4, 5)))