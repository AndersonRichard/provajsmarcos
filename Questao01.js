function executarCallBack(funcaoCall){
    funcaoCall();
}

executarCallBack(() => {
    console.log("Testando CallBack");
})