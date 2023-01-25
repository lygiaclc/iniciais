var name = prompt("Qual seu nome e sobrenome?");

//pegar as iniciais em convertê-las em maiúsculas

//pegar a 1 letra do 1 nome
var firstInitial = name.slice(0,1);

// pegar a posição da primeira letra do sobrenome
var secondInitialPosition = name.indexOf(" ") + 1;

//pegar a primeira letra do segundo nome
var secondInitial = name.slice(secondInitialPosition, secondInitialPosition + 1);

//mostrar o resultado na página;
document.write("Suas iniciais são: " + firstInitial.toUpperCase() + secondInitial.toUpperCase());