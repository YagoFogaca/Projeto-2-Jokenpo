const prompt = require('prompt-sync')();
console.clear();
//

programa: while (true) {
    console.log('Bem vindo(a) ao JOKENPÔ !');
    const opcao = ['pedra', 'papel', 'tesoura'];
    let opcaoUsuarioPartida;
    let pontosUsuario = 0;
    let pontosComputador = 0;
    let empates = 0;
    let rodadas = +prompt('Quantas rodadas deseja jogar? ');
    console.log();
    while (isNaN(rodadas) == true) {
        rodadas = +prompt('Quantas rodadas deseja jogar? ');
    }
    for (let i = 0; i < rodadas; i++) {
        let opcaoComputadorPartida =
            opcao[Math.floor(Math.random() * opcao.length)];
        console.log(`Escolha somente um número de 1 a 3!`);
        let opcaoUsuario = +prompt(
            'Você escolhe qual? 1-PEDRA | 2-PAPEL | 3-TESOURA ',
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
                    console.log(`Usuario ganhou!`);
                    pontosUsuario++;
                    break;
                case 'tesoura':
                    console.log(`Computador ganhou!`);
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
                    console.log(`Usuario ganhou!`);
                    pontosUsuario++;
                    break;
                case 'papel':
                    console.log(`Computador ganhou!`);
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
                    console.log(`Usuario ganhou!`);
                    pontosUsuario++;
                    break;
                case 'pedra':
                    console.log(`Computador ganhou!`);
                    pontosComputador++;
                    break;
            }
        }
    }
    if (empates > (pontosComputador || pontosUsuario)) {
        console.log();
        console.log(`O placar final depois de ${rodadas} rodadas:
                Usuario: ${pontosUsuario}
                Computador: ${pontosComputador}
                Empates: ${empates}
                Que loucura, deu empate!`);
    } else if (pontosUsuario > pontosComputador) {
        console.log();
        console.log(`O placar final depois de ${rodadas} rodadas:
                Usuario: ${pontosUsuario}
                Computador: ${pontosComputador}
                Empates: ${empates}
                O usuario foi o grande campeão!`);
    } else if (pontosUsuario < pontosComputador) {
        console.log();
        console.log(`O placar final depois de ${rodadas} rodadas:
                Usuario: ${pontosUsuario}
                Computador: ${pontosComputador}
                Empates: ${empates}
                O computador foi o grande campeão!`);
    } else {
        console.log();
        console.log(`O placar final depois de ${rodadas} rodadas:
                Usuario: ${pontosUsuario}
                Computador: ${pontosComputador}
                Empates: ${empates}
                E deu empate geral!`);
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
