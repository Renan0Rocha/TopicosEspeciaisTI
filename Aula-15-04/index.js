//QUESTÃO 1

let matriz = [];
let cont = 1;

for (let i = 0; i < 4; i++) {
    matriz[i] = [];
    for (let j = 0; j < 4; j++) {
        matriz[i][j] = cont;
        cont++;
    }
}

document.write('<table border="1">');
for (let i = 0; i < 4; i++) {
    document.write('<tr>');
    for (let j = 0; j < 4; j++) {
        document.write('<td>' + matriz[i][j] + '</td>');
    }
    document.write('</tr>');
}
document.write('</table>');

//QUESTÃO 2

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        if (matriz[i][j] === 10) {
            document.write('O número 10 foi encontrado na matriz');
            break;
        }
    }
}

//QUESTÃO 3 fAÇA UM EXEMPLO DE TAREFAS USANDO ESSA MATRIX QUE USE == != <> >= <= !===


//Como definir o username no terminal do vscode?
//No terminal do vscode, digite o comando git config --global user.name "seu nome de usuário"
// quero definir o e-mail também


