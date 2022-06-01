const prompt = require('prompt-sync')();
console.clear();
//
const opcao = ['pedra', 'papel', 'tesoura'];
let opcaoPartida;
console.log(`Escolha somente o número ou um número de 1 a 3!`);
let opcaoUsuario = +prompt('Você escolhe qual? 1- pedra 2- papel 3- tesoura ');
while (
    isNaN(opcaoUsuario) == true ||
    (opcaoUsuario != 1 && opcaoUsuario != 2 && opcaoUsuario != 3)
) {
    console.log('Escolha somente o número ou um número de 1 a 3!');
    opcaoUsuario = +prompt(`1- pedra 2- papel 3- tesoura `);
}
if (opcaoUsuario === 1) {
    opcaoPartida = opcao[0];
} else if (opcaoUsuario === 2) {
    opcaoPartida = opcao[1];
} else {
    opcaoPartida = opcao[2];
}
const computador = Math.floor(Math.random() * opcao.length);
console.log(`O usuario escolheu: ${opcaoPartida}
O computador escolheu: ${opcao[computador]}`);
// colocar um peso para pedra, papel e tesoura;
// pedra: 0;
// papel: 1;
// tesoura: 2;
// Pedra ganha da tesoura, mas perde para o papel; pedra > tesoura
// Tesoura ganha do papel, mas perde para a pedra; tesoura > papel
// Papel ganha da pedra, mas perde para a tesoura. papel > pedra
