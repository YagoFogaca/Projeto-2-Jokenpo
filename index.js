const prompt = require('prompt-sync')();
console.clear();
//

programa: while (true) {
    const opcao = ['pedra', 'papel', 'tesoura'];
    let opcaoComputadorPartida =
        opcao[Math.floor(Math.random() * opcao.length)];
    let opcaoUsuarioPartida;
    let pontosUsuario = 0;
    let pontosComputador = 0;
    let empates = 0;
    let rodadas = +prompt('Quantas rodadas deseja jogar? ');
    console.log();
    while (isNaN(rodadas) == true) {
        rodadas = +prompt('Quantas rodadas deseja jogar? ');
    }
    console.log();
    for (let i = 0; i < rodadas; i++) {
        console.log(`Escolha somente um número de 1 a 3!`);
        let opcaoUsuario = +prompt(
            'Você escolhe qual? 1- pedra 2- papel 3- tesoura ',
        );
        while (
            isNaN(opcaoUsuario) == true ||
            (opcaoUsuario != 1 && opcaoUsuario != 2 && opcaoUsuario != 3)
        ) {
            console.log('Escolha somente um número de 1 a 3!');
            opcaoUsuario = +prompt(`1- pedra 2- papel 3- tesoura `);
        }
        if (opcaoUsuario === 1) {
            opcaoUsuarioPartida = opcao[0];
        } else if (opcaoUsuario === 2) {
            opcaoUsuarioPartida = opcao[1];
        } else {
            opcaoUsuarioPartida = opcao[2];
        }
        if (opcaoUsuarioPartida == 'papel') {
            switch (opcaoComputadorPartida) {
                case 'papel':
                    console.log(`Deu empate!`);
                    empates++;
                    break;
                case 'pedra':
                    console.log(`Papel ganha de pedra. Você ganhou!`);
                    pontosUsuario++;
                    break;
                case 'tesoura':
                    console.log(`Papel perde para tesoura. Você perdeu!`);
                    pontosComputador++;
                    break;
            }
        } else if (opcaoUsuarioPartida == 'pedra') {
            switch (opcaoComputadorPartida) {
                case 'pedra':
                    console.log(`Deu empate!`);
                    empates++;
                    break;
                case 'tesoura':
                    console.log(`Pedra ganha de tesoura. Você ganhou!`);
                    pontosUsuario++;
                    break;
                case 'papel':
                    console.log(`Pedra perde para papel. Você perdeu!`);
                    pontosComputador++;
                    break;
            }
        } else if (opcaoUsuarioPartida == 'tesoura') {
            switch (opcaoComputadorPartida) {
                case 'tesoura':
                    console.log(`Deu empate!`);
                    empates++;
                    break;
                case 'papel':
                    console.log(`Tesoura ganha de papel. Você ganhou!`);
                    pontosUsuario++;
                    break;
                case 'pedra':
                    console.log(`Tesoura perde para pedra. Você perdeu!`);
                    pontosComputador++;
                    break;
            }
        }
    }
    if (pontosUsuario > pontosComputador) {
        console.log();
        console.log(`O placar ficou: 
                Usuario: ${pontosUsuario}
                Computador: ${pontosComputador}
                Empates: ${empates}
                O usuario foi o grande campeão!`);
    } else if (pontosUsuario < pontosComputador) {
        console.log();
        console.log(`O placar ficou: 
                Usuario: ${pontosUsuario}
                Computador: ${pontosComputador}
                Empates: ${empates}
                O computador foi o grande campeão!`);
    } else {
        console.log();
        console.log(`O placar ficou: 
                Usuario: ${pontosUsuario}
                Computador: ${pontosComputador}
                Empates: ${empates}
                Que loucura, deu empate!`);
    }
    let jogarDeNovo = prompt('Deseja jogar novamente? ');
    while (jogarDeNovo != 'sim' && jogarDeNovo != 'nao') {
        jogarDeNovo = prompt('Deseja jogar novamente? ');
    }
    if (jogarDeNovo == 'sim') {
        console.log();
        console.clear();
        console.log('Boa escolha!');
        continue programa;
    } else {
        console.log();
        console.log('Que pena. Até uma proxima!');
        console.log();
        break programa;
    }
}
