const nome = 'Rebeca';
const concatenacao = 'Ola ' + nome + ' !' // template String pode quebrar linhas, 
//pois ele interpola converte a variavel dentro do proprio texto

const template = `Olá   // se pular linha ele considera a quebra ao exibir o resultado
${nome}!`;
console.log(concatenacao, template)

console.log(`1 + 1 = ${1 + 1}`) // 1 + 1 = 2

const up = texto => texto.toUpperCase(); // função arrow
console.log(`Ei ... ${up("cuidado")}!`);