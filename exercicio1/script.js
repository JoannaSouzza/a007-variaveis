let nome
let idade;

console.log(typeof nome, typeof idade)

//Pq o resultado não tem valor//

nome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade")

console.log(typeof nome, typeof Number(idade))

console.log("Olá,", nome, "você tem", idade, "anos.")

