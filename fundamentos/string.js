const escola = "Cod3r";
console.log(escola.charAt(4)); // retorna a letra que está o indice ..
console.log(escola.charAt(5)); // retorna apenas um valor vazio e nao um erro
console.log(escola.charCodeAt(3)) // retorna o valor da tabela ASCI
console.log(escola.indexOf('3')); // retorna o indice

console.log(escola.substring(1));
console.log(escola.substring(0,3)); //vai do indice 0 ate o 3 mas nao inclui o 3

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3,'e')); 
console.log('Ana,Maria,Pedro'.split(','));