const valores = [7.7,8.9,6.3,9.2];
console.log(valores[0],valores[3]);
console.log(valores[4]) // undefined

valores[4] = 10;
console.log(valores[4])
valores[15] = 1;
console.log(valores) // inclui no array [ 7.7, 8.9, 6.3, 9.2, 10, <10 empty items>, 1 ]
console.log(valores.length)
valores.push({id:3},false,null,'teste') //acrescente dados no array (heterogeneo)
console.log(valores)
console.log(valores.pop()) // remove o ultimo indice do array
delete valores[0]; // retira o 1 indice do array
console.log(valores);
console.log(typeof valores) // em JS array é object, é dinamico, é indexado, é heterogeneo