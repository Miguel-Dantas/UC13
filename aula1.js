// var pessoa={
//     nome:"carlos",
//     idade:18,
//     salario:4500,
//     endereco:{
//         rua:"Carlos Silva",
//         numero:"23",
//         cep:"08666-123",
//         bairro:"Silva Rocha",
//         cidade:"Santana",
//         estado:"SP"
//     }
// }

// function verificandoIdade(pessoa) {
//     if (pessoa.idade>=18){
//         return true;
//     }else{
//         return false;
//     }
// }

// function calcularPercentual(pessoa,percentual){
//     let valorPercentual = pessoa.salario*(percentual/100)
//     return valorPercentual
// }

// function verificarPercentualDoSalario(pessoa){
//     if(calcularPercentual(pessoa)>=2350){
//         return true;
//     }else{
//         return false;
//     }
// }

// function verificandoPossibilidadeCompraCarro(pessoa){
//     if(verificarPercentualDoSalario(pessoa) && verificandoIdade(pessoa)){
//         return console.log("Você pode comprar um veiculo")
//     }else{
//         return console.log("Você não pode comprar")
//     }
// }

// verificandoPossibilidadeCompraCarro(pessoa);

var pessoa={
    nome:"Carlos",
    nascimento:2000,
    estadoCivil:"Casado",
    calcularIdade: function (){
        return 2025-this.nascimento;
    }
}

console.log(pessoa.calcularIdade())