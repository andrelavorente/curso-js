const resultado = fizzBuzz(x);
console.log(resultado);

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'Não é um número!'

    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'Fizzbuzz';

    if (entrada % 3 === 0)   
        return 'Fizz';

    if (entrada % 5 === 0)
        return 'buzz';
        
    return entrada;
}
