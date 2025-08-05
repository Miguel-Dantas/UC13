 function calcularMedia(notas){
    const media= notas.reduce((acumulador,anterior)=>{
        return acumulador+anterior
    },0)
    return media / 3
}
 
function verificarSituacao(aluno) {
    if (calcularMedia(aluno.notas)>=7) {
        return ("Aprovado");
    }else if(calcularMedia(aluno.notas)<5) {
        return ("Reprovado");
    }else{
        return ("Recupeção");
    }
}
 
module.exports={
    calcularMedia:calcularMedia,
    verificarSituacao:verificarSituacao
}