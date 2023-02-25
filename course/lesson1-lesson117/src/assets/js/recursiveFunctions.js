function loopRecursivo(max){
    if(max >= 10) return;
    max++;
    console.log(max)
    loopRecursivo(max)
}

loopRecursivo(0)