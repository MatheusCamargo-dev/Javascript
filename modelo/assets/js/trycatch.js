const soma = (x,y) =>{
    if(
        typeof x !== 'number' || 
        typeof y !== 'number'
    ){
        throw('x e y precisam ser numeros');
    }

    return x + y;
}
try{
    console.log(soma(1, 2));
    console.log(soma('1', 2));

}catch(erro){
    console.log('Insira um valor valído')
}
// 3
// Insira um valor valído