//console.log() mostra uma informação noconsole
console.log("Olá, Mundo!");
console.log("lets'go")

console.log(typeof "Olá, Mundo!") //string
console.log(typeof 19) //number
console.log(typeof 10 - 5) // NaN
console.log(typeof true) // boolean
console.log(typeof false) // boolean

// váriavel
// const não pode ter seu valor alterado durante o progama
const nome = "Wenderson";
console.log(nome);
// let pode ter seu valor alterado durante o progama
let idade = 19;
console.log(idade);

console.log("Olá " + nome + ", que tem " + idade + " anos.")

idade = 20;
console.log(idade);

console.log(`Olá ${nome}, que tem ${idade} anos.`)

const name = "bryan";
console.log(name)

let peso = 3
console.log(peso)

console.log(`Olá ${name}, e peso ${peso} kilos.`)

peso = 5
console.log("Olá " + name + ", e peso " + peso + " kilos.")

//Metodos de string
const texto = "JavaScript"

//conta quantos caracteres a string tem
console.log(texto.length)

// altera todas as letras para maisculo
console.log(texto.toUpperCase())

// altera todas as letras para minusculo
console.log(texto.toLowerCase)

const nome_completo = "Wenderson da Costa Gomes"

console.log(nome_completo.includes("Costa"))// true

console.log(10 > 5) //true
console.log(10 < 5) //false
console.log(10 >= 10) //true
console.log(10 <= 5) //false
console.log("10" == 10) //true
console.log("10" === 10) //false
console.log(10 !== 5) //true

const idadePessoa = 17

console.log(idadePessoa >= 18) //false
console.log(idadePessoa >= 16) //true

const nome1 = "Jhonathan"
const nome2 = "Bryan"

console.log(nome1 >= 19) // false 
console.log(nome2 <= 17) // false 

// coletamos a idade da pessoa
let pessoaIdade = 19;
// verificar se a idade é maior ou igual a 18
if(pessoaIdade >= 18){
    // se maior ou igual a 18 então é ela maior de idade
    console.log("Já Pode Ser Preso HAHAHAHAHA!")
}else{
    // se menor que 18 então ela é menor de idade
    console.log("Não Vai pra balada!")
}

// coletamos a idade da pessoa
   let idadeVotacao = 16
// verificar se a pessoa é maior que 70
if(idadeVotacao > 70){
    console.log("Voce não é obrigado a votar!")
}
else if(idadeVotacao >= 18){
    // senão se a idade da pessoa for maior ou igual a 18
    console.log("Voce tem que votar obrigatoriamente!")
}

else if(idadeVotacao >= 16){
    // senão se a idade da pessoa for maior ou igual a 16
    console.log("Voce não é obrigadoa votar, mas caso queira pode!")
}
else {
    // senão for nenhuma das alternativas anteriores
    console.log("Voce não pode votar")
}


//coleta a media das notas do aluno
let notaMedia = 7
// verificar se a nota e acima da media 
if(notaMedia >= 10){
    console.log("Parabens, nota acima da media!!")
}
else if(notaMedia >= 7){
    // ver se a nota e maior ou igual a 7
    console.log("esta na media!!")
}
else{
    // se menor que 7 ela e menor
    console.log("Reprovado, e vai estudar criança!!")
}



//escolha dos numeros
let numero1 = 30
let numero2 = 15
// verificar se e maior que 30
if(numero1 > 15){
    console.log("e maior que 15!")
}
else if(numero2 > 15){
    //verificar se e menor ou igual a 15
    console.log("e igual a 15!" )
}
else{
    //ver se e menor que 30
    console.log("e menor que 30")
}

// chave de acesso 
let senha = senai123
//verificar se a senha esta correta
if(senha = senai123){
    console.log("acesso autorizado")
}
else if(senha = senai123){
    console.log("Senha igual")
}
else if(senha = senai321){
    console.log("Senha incorreta")
}

let grau = 18

if(grau = 18){
    console.log("frio")
}
else if(senha = 18 - 27){
    console.log("agradavel")
}
else if(senha = 27){
    console.log("quente")
}