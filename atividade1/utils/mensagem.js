const funcoesAluno=require("../alunos")
 
function mensagemAluno(aluno){
    return `O aluno ${aluno.nome} está ${funcoesAluno.verificarSituacao(aluno)}`
}
 
module.exports= mensagemAluno