// tipo de dado que estamos trabalhando
// e os booleanos

//converscao implicita 
const numero = 456
const numeroString = "456"
const numeroStr = "456a"

console.log(numero == numeroString) //ambos são iguais em comparação implicita porque o JS transforma em STRing
console.log(numero === numeroString) //não são iguais por que nesse caso o JS entende que nesse caso um é STRing e o outro um number INTeiro
console.log(numero + numeroString) //nesse caso não vai SOMAR e sim CONCATENAR
console.log(numero + Number(numeroStr)) // já neste caso o resultado será NaN, 
                                        //"Not a Number", por que foi incluido 
                                        //uma STRing (texto ou letra) "a" no final do númeral.

//Number()
//String()

console.log(numero + Number(numeroString))


//conversao explicia


