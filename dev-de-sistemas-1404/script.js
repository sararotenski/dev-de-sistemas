let numero

numero = Number(prompt("Digite um número."))

if (numero < 0) {
    alert("Esse número é negativo! Digite um número positivo.")
}

else if (numero % 2 == 0) {
    alert("Você digitou o número " + numero + ". Ele é par!")
}

else {
    alert("Você digitou o número " + numero + ". Ele é ímpar!")
}