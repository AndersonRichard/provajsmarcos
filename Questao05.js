// o uso do let permite a mutalidade dessa forma uma variavel declara como Anderson pode ser alterada
// enquanto a const é imutavel e ao tentar realizar alteração dará erro ao executar o código

let name = "Anderson";

console.log(name);

name = "Novo argumento";

console.log(name);

const name2 = "Richard";

console.log(name2);

name2 = "Novo argumento 2";

console.log(name2);