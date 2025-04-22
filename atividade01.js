function calcularMedia(){

let notaUm, notaDois, notaTres, media

notaUm = Number(prompt('Digite a primeira nota!'));
notaDois = Number(prompt('Digite a segunda nota!'));
notaTres = Number(prompt('Digite a terceira nota!'));

media = (notaUm + notaDois + notaTres) / 3

if (media > 7) {
    alert('Sua média é ' + media + ', parabéns!');
}

else if (media < 7) {
    alert('Sua média é ' + media + ', está abaixo da média!');
}

else if (media = 7) {
    alert('Sua média é ' + media + ', você está na média!');
}            

}