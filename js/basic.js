console.log ('Olá mundo!!')

var userName = 'Alice Lopes'

document.getElementById('userName').innerHTML = userName

// Declaracao de Variaveis // 
//var nome = 'Mestre Yoda' // Como o proprio nome ja diz, o valor das variaveis podem ser alterados. Entao posso ter uma variavel com o mesmo nome, mas valores diferentes 
//var idade = 100
//var jedi = true 

//console.log(typeof nome)
//console.log(typeof idade)
//console.log(typeof true)

// Operadores Matematicos //
//var n1 = 5
//var n2 = 5

//console.log(typeof n1)
//console.log (typeof n2)

//var total = n1 + n2
//console.log(total)

// Operadores de Comparacao//
// var v1 = 5
// var v2 = 10

// var resultado = v1 === v2 
// console.log (resultado)

// Funcoes//
// function soma(n1, n2) {
//     console.log(n1 + n2)
// }
// soma(10,10)
// function boasVindas(nome){
//     alert(nome + ',seja bem vindo(a)')
// }
// boasVindas('Alice')
// function soma(n1, n2){
//     return n1 + n2
// }
// var resultado = soma(5,5)
// console.log(resultado)

// Controle de Fluxos com BDD//
// Historia do usuario: 
// Sendo um cliente correntista do banco  (Ator)
// Posso sacar dinheiro em caixas eletronicos   (Acao)
// Para poder comprar em lugares que nao aceitam cartao de debito ou credito  (Valor agregado da funcionalidade)

// Cenario 1: Saque com sucesso 
// Dado que meu saldo é de R$ 1.000,00
// Quando faco um saque de R$ 500,00
// Entao o valor do saque deve ser deduzido do meu saldo 

// Cenario 2: Saque com valor superior ao saldo
// Dado que meu saldo é de R$ 1.000,00
// Quando faco um saque de R$ 1.001,00
// Entao nao deve deduzir do meu saldo 
// E deve mostrar uma mensagem de alerta informando que o valor e superior ao saldo 


// Cenario 3: Saque com valor maximo
// Dado  que meu saldo e de R$ 1.000,00
// E o valor maximo por operacao e de R$ 700,00
// Quando faco um saque no valor de R$ 701,00
// Entao nao deve deduzir do meu saldo 
// E deve mostrar uma mensagem de alerta informando que o valor e superior ao limite permitido por operacao 

// var saldo = 1000
// function saque(valor){
//     if (valor > saldo){
//         console.log('Valor do saque superior ao saldo')}
//     else if (valor > 700){
//         console.log('Valor do saque superior ao maximo permitido por operacao')
//     }
//     else {saldo = saldo - valor}
// }
// saque (701)
// console.log(saldo)

// Arrays  //
// em todo Array a posicao inicial é 0
// var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']
// console.log(gaveteiro[1])

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']
// personagens.push('C3pO') // .push é utilizado para adicionar um item ao final do array 
// //personagens.pop() // .pop() é utilizado para remover o ultimo item do array
// personagens = personagens.filter(function(p)
//     {return p !== 'Darth Vader'}) // Dessa forma e possivel ignorar um item que esteja em qualquer posicao do array, ou seja, ele vai estar na lista mas nao sera exibido

// personagens = personagens.filter(function(p)
//     {return p === 'Mestre Yoda'}) // Dessa forma e possivel filtrar apenas um determinado item  
// console.log(personagens)

// Controles de Repeticao (Loops)//
//  var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']
// personagens.forEach(function(p){ // forEach e o responsavel por realizar a repeticao retorno os valores de cada posicao
//     console.log(p)
// })
// for (var i in personagens){ // nesse caso serao retornadas as posicoes
//     console.log(i)
// }
// for (var i in personagens){ // nessa caso serao retornadas os valores de cada posicao 
//     console.log(personagens[i])
// }
// for (var i = 0; i <= 10; i++ ){ // codigo sera executado ate a condicao retornar false 
//     console.log(i)
// }

// Objetos //
// var yoda = {
//     nome: 'Mestre Yoda',
//     idade: 100,
//     jedi: true,
//     mostraIdade: function(){
//         console.log(`A idade do ${this.nome} é ${this.idade} anos.`)
//     }
// }
// console.log(yoda)
// yoda.mostraIdade()

// Constantes //
// const nome = 'Darth Vader' // ao utlizar const o valor atribuido sera sempre o mesmo
// console.log (nome)
