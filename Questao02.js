function imprimirMensagem(mensagem, func){
    console.log("Teste")
    setTimeout(func, 20000);
    
    return mensagem
}
const teste1 = "Teste"
imprimirMensagem(teste1, function(){
    console.log("Teste realiado com sucesso");
});